import type { Metadata } from 'next';
import { CONFIG } from '@/lib/config';
import { buildGenericWhatsAppLink } from '@/lib/whatsapp';
import RevealWrapper from '@/components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Navalha Barbearia. Endereco, horario de funcionamento, telefone e como chegar.',
};

export default function ContatoPage() {
  const waLink = buildGenericWhatsAppLink();

  return (
    <>
      <section style={{ padding: '140px 0 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <RevealWrapper>
            <span className="eyebrow" style={{ marginBottom: 18 }}>
              Onde nos encontrar
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
              Contato
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 520 }}>
              Estamos esperando por voce. Venha nos visitar ou fale no WhatsApp.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <section style={{ padding: '0 0 94px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
          <div className="contact-grid">
            {/* Info card */}
            <RevealWrapper>
              <div
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r)',
                  padding: 30,
                }}
              >
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                    ),
                    label: 'Horario',
                    value: `${CONFIG.horario}\n${CONFIG.fechado}`,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                    ),
                    label: 'Endereco',
                    value: `${CONFIG.endereco}\n${CONFIG.cidade} · ${CONFIG.cep}`,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
                    ),
                    label: 'Telefone',
                    value: CONFIG.telefoneDisplay,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    ),
                    label: 'Instagram',
                    value: '@barbearia.navalha',
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      gap: 16,
                      padding: '18px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                      ...(i === 0 ? { paddingTop: 0 } : {}),
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        flexShrink: 0,
                        borderRadius: 13,
                        background: 'rgba(224,50,47,.12)',
                        border: '1px solid rgba(224,50,47,.24)',
                        display: 'grid',
                        placeItems: 'center',
                        color: 'var(--red2)',
                      }}
                    >
                      {row.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: 14 }}>
                        {row.label}
                      </div>
                      <div style={{ color: 'var(--muted)', fontSize: 13.5, marginTop: 2, whiteSpace: 'pre-line' }}>
                        {row.value}
                      </div>
                    </div>
                  </div>
                ))}

                <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-red"
                    style={{ fontSize: 14, padding: '12px 22px' }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: 14, padding: '12px 22px' }}
                  >
                    Como chegar
                  </a>
                </div>
              </div>
            </RevealWrapper>

            {/* Map */}
            <RevealWrapper delay={1}>
              <div
                style={{
                  borderRadius: 'var(--r)',
                  overflow: 'hidden',
                  minHeight: 380,
                  background:
                    'radial-gradient(120% 90% at 70% 20%, rgba(224,50,47,.14), transparent 60%), linear-gradient(150deg, #16263C, #0B121E)',
                  position: 'relative',
                }}
              >
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.endereco + ', ' + CONFIG.cidade)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0, minHeight: 380, opacity: 0.85 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localizacao da Navalha Barbearia no Google Maps"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 760px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
