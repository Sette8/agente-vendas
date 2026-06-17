'use client';

import Image from 'next/image';
import { useBooking } from './booking/BookingProvider';
import RevealWrapper from './RevealWrapper';

export default function FinalCta() {
  const { openModal } = useBooking();

  return (
    <RevealWrapper>
      <div
        style={{
          position: 'relative',
          borderRadius: 34,
          overflow: 'hidden',
          padding: '70px 30px',
          textAlign: 'center',
          border: '1px solid var(--line)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            background:
              'radial-gradient(100% 130% at 50% 0, rgba(224,50,47,.22), transparent 55%), linear-gradient(160deg, #16263C, #0B121E)',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.26, mixBlendMode: 'luminosity' }}
            loading="lazy"
          />
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              fontSize: 'clamp(30px, 6.5vw, 58px)',
              lineHeight: 1,
            }}
          >
            Sua proxima
            <br />
            visita comeca aqui
          </h2>
          <p style={{ color: '#CFD6DF', margin: '16px auto 28px', maxWidth: 440, fontSize: 16 }}>
            Cadeira reservada, horario garantido. Escolha servico, profissional e horario em segundos.
          </p>
          <button
            className="btn btn-red"
            onClick={() => openModal()}
            style={{ fontSize: 16, padding: '17px 38px' }}
          >
            Agendar agora
          </button>
        </div>
      </div>
    </RevealWrapper>
  );
}
