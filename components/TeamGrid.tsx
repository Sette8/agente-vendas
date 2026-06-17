'use client';

import Image from 'next/image';
import { BARBERS } from '@/lib/data';
import { useBooking } from './booking/BookingProvider';
import RevealWrapper from './RevealWrapper';

interface Props {
  limit?: number;
}

export default function TeamGrid({ limit }: Props) {
  const { openModal } = useBooking();
  const barbers = limit ? BARBERS.filter((b) => b.active).slice(0, limit) : BARBERS.filter((b) => b.active);

  return (
    <div className="team-grid">
      {barbers.map((b, idx) => (
        <RevealWrapper key={b.id} delay={(idx % 3) as 0 | 1 | 2 | 3}>
          <div className="tcard">
            <div
              style={{
                position: 'relative',
                height: 230,
                background:
                  'radial-gradient(120% 90% at 30% 10%, rgba(224,50,47,.16), transparent 60%), linear-gradient(150deg, #16263C, #0B121E)',
              }}
            >
              <Image
                src={b.photo}
                alt={b.name}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(7,12,20,.72))',
                }}
              />
            </div>
            <div style={{ padding: '18px 20px 22px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {b.name}
              </div>
              <div
                style={{
                  color: 'var(--red2)',
                  fontSize: 12.5,
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  marginTop: 2,
                  textTransform: 'uppercase',
                }}
              >
                {b.role}
              </div>
              <p
                style={{
                  color: 'var(--muted)',
                  fontSize: 13,
                  margin: '10px 0 16px',
                  lineHeight: 1.5,
                }}
              >
                {b.description}
              </p>
              <button
                onClick={() => openModal({ barberName: b.name })}
                className="tbook-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: 'var(--ink)',
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid var(--line2)',
                  borderRadius: 99,
                  padding: '10px 18px',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
              >
                Agendar com {b.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </RevealWrapper>
      ))}

      <style>{`
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .tbook-btn:hover { background: rgba(224,50,47,.14); border-color: rgba(224,50,47,.4); color: var(--red2); }
        @media (max-width: 820px) { .team-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .team-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
