import Link from 'next/link';
import { CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '46px 0 36px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 22px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--red2), var(--red))',
              display: 'grid',
              placeItems: 'center',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 900,
              color: '#fff',
              fontSize: 20,
            }}
          >
            N
          </div>
          <span
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              letterSpacing: '0.2em',
              fontSize: 19,
            }}
          >
            NAVALHA
          </span>
        </div>

        <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 14, color: 'var(--muted)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/servicos" className="footer-link">Servicos</Link>
          <Link href="/equipe" className="footer-link">Equipe</Link>
          <Link href="/galeria" className="footer-link">Galeria</Link>
          <Link href="/fidelidade" className="footer-link">Fidelidade</Link>
          <Link href="/contato" className="footer-link">Contato</Link>
          <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href={`https://wa.me/${CONFIG.fone}`} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
        </div>

        <p style={{ color: 'var(--muted)', fontSize: 13.5 }}>
          {CONFIG.endereco} &middot; {CONFIG.cidade} &middot; {CONFIG.horarioShort}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#5b6675',
            marginTop: 4,
          }}
        >
          Criado por{' '}
          <strong style={{ color: 'var(--red2)', fontWeight: 700 }}>Agencia L7</strong>
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: var(--red2); }
      `}</style>
    </footer>
  );
}
