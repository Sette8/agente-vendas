'use client';

import { useEffect } from 'react';
import { useBooking } from '@/components/booking/BookingProvider';
import RevealWrapper from '@/components/RevealWrapper';

export default function AgendarPage() {
  const { openModal } = useBooking();

  useEffect(() => {
    const timer = setTimeout(() => openModal(), 300);
    return () => clearTimeout(timer);
  }, [openModal]);

  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 22px 60px',
        textAlign: 'center',
      }}
    >
      <RevealWrapper style={{ maxWidth: 520, width: '100%' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--red2), var(--red))',
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 900,
            color: '#fff',
            fontSize: 28,
            margin: '0 auto 28px',
          }}
        >
          N
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(32px, 7vw, 56px)',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          Agendar horario
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 17, marginBottom: 32 }}>
          Escolha servico, profissional e horario em segundos. O agendamento abre automaticamente.
        </p>
        <button
          className="btn btn-red"
          onClick={() => openModal()}
          style={{ fontSize: 16, padding: '16px 36px' }}
        >
          Abrir agendamento
        </button>
      </RevealWrapper>
    </section>
  );
}
