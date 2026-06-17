import { TESTIMONIALS } from '@/lib/data';
import RevealWrapper from './RevealWrapper';

export default function Testimonials() {
  return (
    <div className="testimonials-grid">
      {TESTIMONIALS.map((t, idx) => (
        <RevealWrapper key={t.id} delay={(idx % 3) as 0 | 1 | 2 | 3}>
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--r)',
              padding: 26,
              height: '100%',
            }}
          >
            <div style={{ color: 'var(--red2)', fontSize: 13, letterSpacing: 2, marginBottom: 14 }}>
              {'★'.repeat(t.stars)}
            </div>
            <p style={{ fontSize: 15, color: '#E2E6EB', lineHeight: 1.6, marginBottom: 20 }}>
              {t.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--red2), var(--red))',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  color: '#fff',
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                {t.initial}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: 14 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.since}</div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      ))}

      <style>{`
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 820px) { .testimonials-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
