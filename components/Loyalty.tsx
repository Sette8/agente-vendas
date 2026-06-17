'use client';

import { useBooking } from './booking/BookingProvider';
import RevealWrapper from './RevealWrapper';

export default function Loyalty() {
  const { openModal } = useBooking();

  return (
    <RevealWrapper>
      <div
        style={{
          position: 'relative',
          border: '1px solid var(--line)',
          borderRadius: 'var(--r)',
          overflow: 'hidden',
          background:
            'radial-gradient(120% 130% at 85% 0, rgba(224,50,47,.16), transparent 55%), linear-gradient(150deg, #16263C, #0B121E)',
          padding: '38px 32px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 34,
          alignItems: 'center',
        }}
        className="loyalty-grid"
      >
        <div>
          <span className="eyebrow" style={{ marginBottom: 16 }}>
            Programa de fidelidade
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              fontSize: 'clamp(24px, 4vw, 34px)',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: 14,
            }}
          >
            O decimo corte e por nossa conta
          </h3>
          <p style={{ color: '#CFD6DF', fontSize: 15, marginBottom: 22, maxWidth: 380 }}>
            A cada corte voce marca um ponto no cartao digital. Fechou dez, o proximo sai zero. Sem
            cartao de papel pra perder: tudo no seu WhatsApp.
          </p>
          <button className="btn btn-red" onClick={() => openModal()}>
            Comecar agora
          </button>
        </div>

        <div
          aria-hidden="true"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 12,
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            const filled = i < 7;
            const isFree = i === 9;
            return (
              <div
                key={i}
                style={{
                  aspectRatio: '1',
                  borderRadius: 14,
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: 15,
                  ...(isFree
                    ? {
                        background: 'linear-gradient(135deg, var(--red2), var(--red))',
                        border: 'none',
                        color: '#fff',
                        boxShadow: '0 10px 24px -8px rgba(224,50,47,.6)',
                      }
                    : filled
                    ? {
                        background: 'rgba(224,50,47,.16)',
                        border: '1px solid rgba(224,50,47,.4)',
                        color: 'var(--red2)',
                      }
                    : {
                        background: 'rgba(255,255,255,.04)',
                        border: '1px dashed var(--line2)',
                        color: 'var(--muted)',
                      }),
                }}
              >
                {isFree ? 'FREE' : filled ? 'N' : i + 1}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .loyalty-grid { grid-template-columns: 1fr !important; padding: 30px 24px !important; }
        }
      `}</style>
    </RevealWrapper>
  );
}
