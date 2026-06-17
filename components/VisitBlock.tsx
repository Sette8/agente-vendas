import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import RevealWrapper from './RevealWrapper';

export default function VisitBlock() {
  return (
    <div className="visit-grid">
      <RevealWrapper>
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r)',
            padding: 30,
            height: '100%',
          }}
        >
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              ),
              label: 'Horario',
              value: `${CONFIG.horario} · ${CONFIG.fechado}`,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              ),
              label: 'Endereco',
              value: `${CONFIG.endereco} · ${CONFIG.cidade}`,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
              ),
              label: 'Contato',
              value: `${CONFIG.telefoneDisplay} · @barbearia.navalha`,
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
                <div style={{ color: 'var(--muted)', fontSize: 13.5, marginTop: 2 }}>{row.value}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 24 }}>
            <a
              href={CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Como chegar
            </a>
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={1}>
        <div
          style={{
            borderRadius: 'var(--r)',
            overflow: 'hidden',
            position: 'relative',
            minHeight: 300,
            background:
              'radial-gradient(120% 90% at 70% 20%, rgba(224,50,47,.14), transparent 60%), linear-gradient(150deg, #16263C, #0B121E)',
          }}
          className="visit-map"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(rgba(148,162,180,.08) 1px, transparent 1px) 0 0/42px 42px, linear-gradient(90deg, rgba(148,162,180,.08) 1px, transparent 1px) 0 0/42px 42px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              zIndex: 2,
            }}
          >
            <a
              href={CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir no Google Maps"
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--red2), var(--red))',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 900,
                  color: '#fff',
                  fontSize: 22,
                  boxShadow: '0 12px 30px rgba(0,0,0,.55)',
                }}
              >
                N
              </div>
            </a>
          </div>
        </div>
      </RevealWrapper>

      <style>{`
        .visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 760px) { .visit-grid { grid-template-columns: 1fr; } .visit-map { min-height: 220px; } }
      `}</style>
    </div>
  );
}
