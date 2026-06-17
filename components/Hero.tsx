'use client';

import Image from 'next/image';
import { useBooking } from './booking/BookingProvider';
import Link from 'next/link';

export default function Hero() {
  const { openModal } = useBooking();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '120px 0 70px',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(120% 80% at 85% 10%, rgba(224,50,47,.2), transparent 50%), radial-gradient(100% 90% at 10% 90%, rgba(22,38,60,.85), transparent 60%), linear-gradient(160deg, #101B2B, #0B121E)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.6,
            background:
              'repeating-linear-gradient(125deg, rgba(255,255,255,.022) 0 2px, transparent 2px 13px)',
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.34, mixBlendMode: 'luminosity' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(11,18,30,.4), rgba(11,18,30,.78))',
          }}
        />
      </div>

      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-4%',
          top: '46%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          fontFamily: 'var(--font-outfit)',
          fontWeight: 900,
          fontSize: '46vw',
          lineHeight: 0.7,
          color: 'rgba(255,255,255,.025)',
          letterSpacing: '-0.04em',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        N
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 22px',
          position: 'relative',
          zIndex: 3,
          width: '100%',
        }}
      >
        <span className="eyebrow rv in" style={{ marginBottom: 22 }}>
          Barbearia classica · Desde 2019
        </span>

        <h1
          className="rv in"
          style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            textTransform: 'uppercase',
            fontSize: 'clamp(52px, 15vw, 128px)',
            marginBottom: 20,
          }}
        >
          O corte
          <br />
          vira <em style={{ fontStyle: 'normal', color: 'var(--red2)' }}>ritual</em>
        </h1>

        <p
          className="rv in d1"
          style={{
            color: '#CFD6DF',
            fontSize: 'clamp(15px, 2.4vw, 19px)',
            maxWidth: 520,
            marginBottom: 30,
          }}
        >
          Cortes classicos, barba na navalha e o cuidado de quem trata cada cliente como o unico.
          Reserve seu horario em segundos.
        </p>

        <div
          className="rv in d2"
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 30 }}
        >
          <button className="btn btn-red" onClick={() => openModal()}>
            Agendar horario
          </button>
          <Link href="/servicos" className="btn btn-ghost">
            Ver servicos
          </Link>
        </div>

        <div className="rv in d3" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[
            ['5.0', '★ no Google'],
            ['+2 mil', 'cortes feitos'],
            ['Reserva', 'pelo WhatsApp'],
          ].map(([b, rest]) => (
            <span
              key={b}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--glass)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--line)',
                borderRadius: 99,
                padding: '9px 16px',
                fontSize: 13,
                fontWeight: 500,
                color: '#E3E7EC',
              }}
            >
              <strong style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, color: 'var(--red2)' }}>
                {b}
              </strong>{' '}
              {rest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
