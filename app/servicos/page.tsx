import type { Metadata } from 'next';
import ServiceGrid from '@/components/ServiceGrid';
import FinalCta from '@/components/FinalCta';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Servicos',
  description:
    'Catalogo completo de servicos da Navalha Barbearia: corte, barba, combo, pezinho, sobrancelha e pigmentacao. Precos e duracao.',
};

export default function ServicosPage() {
  return (
    <>
      <section style={{ padding: '140px 0 60px', position: 'relative' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <RevealWrapper>
            <span className="eyebrow" style={{ marginBottom: 18 }}>
              O oficio
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
              Servicos
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 520 }}>
              Preco justo pelo trabalho bem feito. Cada servico com tempo e tecnica dedicados.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section style={{ padding: '0 0 94px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <ServiceGrid showBookButton />
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
