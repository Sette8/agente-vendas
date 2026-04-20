import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys'
import qrcode from 'qrcode-terminal'
import axios from 'axios'
import admin from 'firebase-admin'
import dotenv from 'dotenv'

dotenv.config()

// 🔥 FIREBASE
const serviceAccount = JSON.parse(process.env.FIREBASE_KEY)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

// 🧠 PROMPT
function gerarPrompt(msg, hist = []) {
  return `
Você é um vendedor especialista em restaurantes e delivery.

Objetivo:
- Diagnosticar
- Identificar problema
- Conduzir para venda

Nunca fale preço direto.

Histórico:
${hist.map(h => `Cliente: ${h.cliente}\nIA: ${h.resposta}`).join('\n')}

Mensagem:
"${msg}"

Responda de forma natural e humana.
`
}

// 🤖 IA
async function responderIA(msg, hist) {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        contents: [{ parts: [{ text: gerarPrompt(msg, hist) }] }]
      }
    )

    return res.data.candidates[0].content.parts[0].text
  } catch (e) {
    console.log('Erro IA:', e.message)
    return 'Te respondo melhor já 👍'
  }
}

// 🎯 CLASSIFICAR
function classificar(msg) {
  msg = msg.toLowerCase()
  if (msg.includes('preço') || msg.includes('valor')) return 'quente'
  if (msg.includes('depois') || msg.includes('vou ver')) return 'morno'
  return 'frio'
}

// 💾 SALVAR
async function salvar(numero, cliente, resposta, status) {
  await db.collection('leads').doc(numero).set({
    numero,
    status,
    atualizado: new Date()
  }, { merge: true })

  await db.collection('leads').doc(numero).collection('msgs').add({
    cliente,
    resposta,
    data: new Date()
  })
}

// 📚 HISTÓRICO
async function historico(numero) {
  const snap = await db.collection('leads')
    .doc(numero)
    .collection('msgs')
    .orderBy('data', 'desc')
    .limit(5)
    .get()

  return snap.docs.map(d => d.data()).reverse()
}

// 🔁 FOLLOW-UP
function followUp(sock, numero) {
  setTimeout(() => {
    sock.sendMessage(numero, {
      text: 'Fala! Conseguiu ver o que te mandei? 👀'
    })
  }, 3600000)

  setTimeout(() => {
    sock.sendMessage(numero, {
      text: 'Tive uma ideia aqui que pode aumentar seus pedidos 👍'
    })
  }, 86400000)
}

// 🚀 BOT
async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('auth')

  const sock = makeWASocket({ auth: state })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', ({ connection, qr }) => {
    if (qr) qrcode.generate(qr, { small: true })
    if (connection === 'open') console.log('✅ BOT ONLINE')
  })

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const numero = msg.key.remoteJid
    const texto =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text

    if (!texto) return

    console.log('📩', numero, texto)

    const hist = await historico(numero)
    const resposta = await responderIA(texto, hist)
    const status = classificar(texto)

    await salvar(numero, texto, resposta, status)

    await sock.sendMessage(numero, { text: resposta })

    if (hist.length === 0) followUp(sock, numero)
  })
}

start()