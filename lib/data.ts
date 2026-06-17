export interface Service {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  durationMin: number;
  active: boolean;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  description: string;
  photo: string;
  active: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span?: 'a' | 'b';
}

export interface Testimonial {
  id: string;
  text: string;
  name: string;
  since: string;
  initial: string;
  stars: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    id: 'corte-navalha',
    name: 'Corte Navalha',
    description: 'Maquina, tesoura e acabamento a navalha.',
    priceCents: 5000,
    durationMin: 40,
    active: true,
  },
  {
    id: 'barba-terapia',
    name: 'Barba Terapia',
    description: 'Toalha quente, modelagem e hidratacao.',
    priceCents: 4500,
    durationMin: 30,
    active: true,
  },
  {
    id: 'combo',
    name: 'Combo Corte + Barba',
    description: 'A experiencia completa Navalha.',
    priceCents: 8500,
    durationMin: 70,
    active: true,
  },
  {
    id: 'pezinho',
    name: 'Pezinho & Acabamento',
    description: 'Pra manter o corte sempre alinhado.',
    priceCents: 2500,
    durationMin: 20,
    active: true,
  },
  {
    id: 'sobrancelha',
    name: 'Sobrancelha',
    description: 'Design masculino na navalha.',
    priceCents: 2000,
    durationMin: 15,
    active: true,
  },
  {
    id: 'pigmentacao',
    name: 'Pigmentacao',
    description: 'Disfarce e preenchimento de falhas.',
    priceCents: 6000,
    durationMin: 45,
    active: true,
  },
];

export const BARBERS: Barber[] = [
  {
    id: 'caio',
    name: 'Caio Ribeiro',
    role: 'Barbeiro-mestre',
    description: 'Especialista em classicos e barba desenhada na navalha.',
    photo:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    active: true,
  },
  {
    id: 'teo',
    name: 'Teo Andrade',
    role: 'Fade specialist',
    description: 'Degrades precisos, cortes modernos e pigmentacao.',
    photo:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80',
    active: true,
  },
  {
    id: 'bruno',
    name: 'Bruno Salles',
    role: 'Barba & navalha',
    description: 'Toalha quente, modelagem e ritual completo de barba.',
    photo:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80',
    active: true,
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80',
    alt: 'Salao da barbearia',
    caption: 'O salao',
    span: 'a',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80',
    alt: 'Cadeira de barbeiro',
    caption: 'A cadeira',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    alt: 'Ferramentas de barbeiro',
    caption: 'Ferramentas',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
    alt: 'Cliente em atendimento',
    caption: 'O corte',
    span: 'b',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80',
    alt: 'Detalhe do acabamento',
    caption: 'O detalhe',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?auto=format&fit=crop&w=600&q=80',
    alt: 'Navalha',
    caption: 'A navalha',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: 'Melhor barba que ja fiz na vida. Sai de la outro homem. Virei cliente fixo no primeiro dia.',
    name: 'Rafael M.',
    since: 'Cliente desde 2022',
    initial: 'R',
    stars: 5,
  },
  {
    id: 't2',
    text: 'Atendimento de outro nivel. Entendem o que voce quer antes de voce explicar. Ambiente impecavel.',
    name: 'Diego A.',
    since: 'Cliente desde 2021',
    initial: 'D',
    stars: 5,
  },
  {
    id: 't3',
    text: 'Marquei pelo WhatsApp em dez segundos e fui atendido na hora marcada. Profissionalismo raro.',
    name: 'Lucas P.',
    since: 'Cliente desde 2023',
    initial: 'L',
    stars: 5,
  },
];

export const FAQ: FaqItem[] = [
  {
    id: 'f1',
    question: 'Preciso agendar ou posso ir direto?',
    answer:
      'Trabalhamos por hora marcada para voce nao esperar. Da pra encaixar sem agendar quando ha horario livre, mas o agendamento garante a cadeira.',
  },
  {
    id: 'f2',
    question: 'Quais formas de pagamento?',
    answer:
      'Pix, cartao de debito e credito e dinheiro. O valor e fechado antes do servico, sem surpresa.',
  },
  {
    id: 'f3',
    question: 'Posso escolher o barbeiro?',
    answer:
      'Sim. No agendamento voce escolhe o profissional ou deixa sem preferencia e atende quem estiver disponivel primeiro.',
  },
  {
    id: 'f4',
    question: 'Como funciona a fidelidade?',
    answer:
      'A cada corte voce marca um ponto no cartao digital. Ao completar dez, o decimo corte e por nossa conta. Tudo controlado pelo WhatsApp.',
  },
  {
    id: 'f5',
    question: 'Preciso remarcar, e agora?',
    answer:
      'Sem problema. Chame no WhatsApp com antecedencia e remarcamos para o melhor horario disponivel.',
  },
];

export const HOURS = [
  '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00',
];

export function formatPrice(cents: number): string {
  return `R$ ${(cents / 100).toFixed(0)}`;
}

export function getWorkingDays(count = 6): Array<{ label: string; iso: string }> {
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const result: Array<{ label: string; iso: string }> = [];
  let added = 0;
  let i = 0;
  while (added < count && i < 30) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const wd = d.getDay();
    if (wd >= 2 && wd <= 6) {
      result.push({
        label: `${weekdays[wd]} ${d.getDate()} ${months[d.getMonth()]}`,
        iso: d.toISOString().slice(0, 10),
      });
      added++;
    }
    i++;
  }
  return result;
}
