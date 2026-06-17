'use client';

import { SERVICES, formatPrice } from '@/lib/data';
import { useBooking } from './booking/BookingProvider';
import RevealWrapper from './RevealWrapper';

const ICONS = [
  // scissor-like
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 9V3h12v6M4 21h16M7 13h10M9 9v8M15 9v8"/></svg>,
  // beard
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3c4 4 4 9 0 13M12 3c-4 4-4 9 0 13M9 19h6"/></svg>,
  // scissors
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><path d="M9.5 9 20 18M9.5 15 20 6"/></svg>,
  // line
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 12h16M4 12c0-4 3-7 8-7s8 3 8 7M4 12c0 4 3 7 8 7s8-3 8-7"/></svg>,
  // brow
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 13c3-4 15-4 18 0M5 13c2 2 12 2 14 0"/></svg>,
  // pigment
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M5 8l14 8M19 8 5 16"/></svg>,
];

interface Props {
  limit?: number;
  showBookButton?: boolean;
}

export default function ServiceGrid({ limit, showBookButton = false }: Props) {
  const { openModal } = useBooking();
  const services = limit ? SERVICES.filter((s) => s.active).slice(0, limit) : SERVICES.filter((s) => s.active);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
      }}
      className="service-grid"
    >
      {services.map((s, idx) => (
        <RevealWrapper key={s.id} delay={(idx % 3) as 0 | 1 | 2 | 3}>
          <div className="scard" style={{ height: '100%' }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: 'rgba(224,50,47,.12)',
                border: '1px solid rgba(224,50,47,.24)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: 18,
                color: 'var(--red2)',
              }}
            >
              {ICONS[idx % ICONS.length]}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 6,
              }}
            >
              {s.name}
            </h3>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: 13.5,
                lineHeight: 1.5,
                marginBottom: 16,
              }}
            >
              {s.description} &middot; {s.durationMin} min
            </p>
            <div
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 800,
                fontSize: 24,
                color: 'var(--red2)',
              }}
            >
              <small style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>R$</small>{' '}
              {s.priceCents / 100}
            </div>
            {showBookButton && (
              <button
                className="btn btn-red"
                onClick={() => openModal({ service: s })}
                style={{ marginTop: 16, padding: '10px 20px', fontSize: 13 }}
              >
                Agendar este servico
              </button>
            )}
          </div>
        </RevealWrapper>
      ))}

      <style>{`
        @media (max-width: 520px) { .service-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
