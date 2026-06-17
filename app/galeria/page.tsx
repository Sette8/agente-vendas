import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import FinalCta from '@/components/FinalCta';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Galeria',
  description:
    'Galeria de fotos da Navalha Barbearia. Veja o ambiente, as cadeiras, as ferramentas e os cortes.',
};

export default function GaleriaPage() {
  return (
    <>
      <section style={{ padding: '140px 0 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <RevealWrapper>
            <span className="eyebrow" style={{ marginBottom: 18 }}>
              O ambiente
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
              A casa
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 520 }}>
              Um espaco feito pra voce se sentir em casa enquanto fica ainda melhor.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section style={{ padding: '0 0 94px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <Gallery />
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
