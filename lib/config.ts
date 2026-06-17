export const CONFIG = {
  fone: '5500000000000',
  nome: 'Navalha Barbearia',
  instagram: 'https://instagram.com/barbearia.navalha',
  mapsUrl: 'https://maps.google.com/?q=Rua+das+Palmeiras+120+Centro',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-00.000000!3d-00.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDAwJzAwLjAiUyAwMMKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v0',
  endereco: 'Rua das Palmeiras, 120 · Centro',
  cidade: 'Sua Cidade, MS',
  cep: '00000-000',
  telefoneDisplay: '(00) 90000-0000',
  horario: 'Terça a Sábado · 9h às 20h',
  horarioShort: 'Ter–Sáb 9h–20h',
  fechado: 'Domingo e Segunda fechado',
  siteUrl: 'https://www.suabarbearia.com.br',
  bookingMode: (process.env.BOOKING_MODE ?? 'whatsapp') as 'whatsapp' | 'supabase',
} as const;
