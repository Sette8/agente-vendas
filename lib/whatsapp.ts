import { CONFIG } from './config';

interface BookingData {
  service: { name: string; price: string };
  barber: string;
  day: string;
  time: string;
}

export function buildWhatsAppLink(data: BookingData): string {
  const msg = [
    `Ola! Quero agendar na ${CONFIG.nome}.`,
    '',
    `Servico: ${data.service.name} (${data.service.price})`,
    `Profissional: ${data.barber}`,
    `Dia: ${data.day}`,
    `Horario: ${data.time}`,
  ].join('\n');

  return `https://wa.me/${CONFIG.fone}?text=${encodeURIComponent(msg)}`;
}

export function buildGenericWhatsAppLink(text?: string): string {
  const msg = text ?? `Ola! Vim pela pagina da ${CONFIG.nome} e quero agendar um horario.`;
  return `https://wa.me/${CONFIG.fone}?text=${encodeURIComponent(msg)}`;
}
