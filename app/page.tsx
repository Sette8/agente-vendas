import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import TeamGrid from '@/components/TeamGrid';
import Gallery from '@/components/Gallery';
import Loyalty from '@/components/Loyalty';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import VisitBlock from '@/components/VisitBlock';
import FinalCta from '@/components/FinalCta';
import RevealWrapper from '@/components/RevealWrapper';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Navalha · Barbearia masculina | Corte, barba e agendamento',
  description:
    'Barbearia masculina classica. Cortes, barba na navalha e atendimento por hora marcada. Agende em segundos pelo WhatsApp.',
};

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <RevealWrapper style={{ marginBottom: 44, maxWidth: 600 }}>
      <span className="eyebrow" style={{ marginBottom: 18 }}>
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          fontSize: 'clamp(32px, 6vw, 52px)',
          lineHeight: 1.04,
          textTransform: 'uppercase',
          marginTop: 8,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--muted)', marginTop: 14, fontSize: 16 }}>{subtitle}</p>
      )}
    </RevealWrapper>
  );
}

function Section({
  id,
  children,
  pt = 94,
}: {
  id?: string;
  children: React.ReactNode;
  pt?: number;
}) {
  return (
    <section id={id} style={{ padding: `${pt}px 0 94px`, position: 'relative' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="servicos">
        <div
          className="glow"
          style={{ width: 400, height: 400, background: 'rgba(224,50,47,.1)', top: -100, right: -80 }}
        />
        <div
          className="glow"
          style={{ width: 360, height: 360, background: 'rgba(22,38,60,.55)', bottom: -120, left: -90 }}
        />
        <SectionHead
          eyebrow="O oficio"
          title="Feito com tempo e tecnica"
          subtitle="Preco justo pelo trabalho bem feito. Sem pressa, sem atalho."
        />
        <ServiceGrid limit={6} />
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <Link href="/servicos" className="btn btn-ghost">
            Ver todos os servicos
          </Link>
        </div>
      </Section>

      <Section id="equipe" pt={20}>
        <SectionHead
          eyebrow="Quem esta atras da cadeira"
          title="A equipe"
          subtitle="Profissionais com mao firme e olho treinado. Agende direto com o seu."
        />
        <TeamGrid />
      </Section>

      <Section id="galeria" pt={20}>
        <SectionHead eyebrow="O ambiente" title="A casa" />
        <Gallery />
      </Section>

      <Section id="fidelidade" pt={20}>
        <Loyalty />
      </Section>

      <Section pt={20}>
        <SectionHead eyebrow="Quem senta, volta" title="O que dizem" />
        <Testimonials />
        <p style={{ color: 'var(--muted)', fontSize: 12.5, marginTop: 18 }}>
          Depoimentos ilustrativos &mdash; troque pelas avaliacoes reais dos seus clientes.
        </p>
      </Section>

      <Section id="faq" pt={20}>
        <SectionHead eyebrow="Antes de marcar" title="Perguntas frequentes" />
        <Faq />
      </Section>

      <Section pt={20}>
        <SectionHead eyebrow="Onde nos encontrar" title="Visite" />
        <VisitBlock />
      </Section>

      <Section pt={20}>
        <FinalCta />
      </Section>
    </>
  );
}
