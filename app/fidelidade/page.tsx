import type { Metadata } from 'next';
import Loyalty from '@/components/Loyalty';
import FinalCta from '@/components/FinalCta';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Fidelidade',
  description:
    'Programa de fidelidade da Navalha Barbearia. A cada 10 cortes, o decimo e por nossa conta. Tudo no WhatsApp.',
};

export default function FidelidadePage() {
  return (
    <>
      <section style={{ padding: '140px 0 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <RevealWrapper>
            <span className="eyebrow" style={{ marginBottom: 18 }}>
              Programa de fidelidade
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
              Fidelidade
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 560 }}>
              Quem volta sempre, ganha. A cada corte voce acumula um ponto. No decimo, a gente paga.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section style={{ padding: '0 0 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <Loyalty />
        </div>
      </section>

      <section style={{ padding: '0 0 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {[
              {
                num: '01',
                title: 'Agende e va',
                text: 'Marque seu horario pelo WhatsApp e apareca na hora certa.',
              },
              {
                num: '02',
                title: 'Ganhe pontos',
                text: 'Cada corte vale um ponto no seu cartao digital. Nada de papel pra perder.',
              },
              {
                num: '03',
                title: 'Decimo gratis',
                text: 'Completou 10? O proximo corte sai zero. A gente avisa antes.',
              },
            ].map((step) => (
              <RevealWrapper key={step.num}>
                <div
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--r)',
                    padding: '28px 24px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 900,
                      fontSize: 40,
                      color: 'rgba(224,50,47,.3)',
                      lineHeight: 1,
                      marginBottom: 12,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 700,
                      fontSize: 18,
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{step.text}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
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
