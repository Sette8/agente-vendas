import type { Metadata } from 'next';
import TeamGrid from '@/components/TeamGrid';
import FinalCta from '@/components/FinalCta';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Equipe',
  description:
    'Conhea os barbeiros da Navalha Barbearia. Agende direto com Caio Ribeiro, Teo Andrade ou Bruno Salles.',
};

export default function EquipePage() {
  return (
    <>
      <section style={{ padding: '140px 0 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <RevealWrapper>
            <span className="eyebrow" style={{ marginBottom: 18 }}>
              Quem esta atras da cadeira
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                fontSize: 'clamp(40px, 8vw, 72px)',
                lineHeight: 1,
                textTransform: 'uppercase',
                marginTop: 8,
                marginBottom: 14,
              }}
            >
              A equipe
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 520 }}>
              Profissionais com mao firme e olho treinado. Agende direto com o seu.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section style={{ padding: '0 0 94px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <TeamGrid />
        </div>
      </section>

      <section style={{ padding: '0 0 94px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <FinalCta />
        </div>
      </section>
    </>
  );
}
