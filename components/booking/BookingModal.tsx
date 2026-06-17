'use client';

import { useEffect, useRef, useState } from 'react';
import { useBooking } from './BookingProvider';
import { SERVICES, BARBERS, HOURS, getWorkingDays, formatPrice } from '@/lib/data';
import { CONFIG } from '@/lib/config';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const TITLES = [
  'Escolha o servico',
  'Escolha o profissional',
  'Escolha o dia',
  'Escolha o horario',
];
const MAX = 4;

export default function BookingModal() {
  const { isOpen, state, closeModal, setService, setBarber, setDay, setTime } = useBooking();
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const workingDays = getWorkingDays(6);

  useEffect(() => {
    if (isOpen) setStep(state.service ? 2 : 1);
  }, [isOpen, state.service]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, closeModal]);

  const canContinue =
    (step === 1 && !!state.service) ||
    (step === 2 && !!state.barberName) ||
    (step === 3 && !!state.day) ||
    (step === 4 && !!state.time);

  async function handleNext() {
    if (step < MAX) {
      setStep((s) => s + 1);
      return;
    }
    // Final step — confirm
    if (!state.service || !state.barberName || !state.day || !state.time) return;

    if (CONFIG.bookingMode === 'whatsapp') {
      const url = buildWhatsAppLink({
        service: { name: state.service.name, price: formatPrice(state.service.priceCents) },
        barber: state.barberName,
        day: state.dayLabel ?? state.day,
        time: state.time,
      });
      window.open(url, '_blank');
      closeModal();
      return;
    }

    // Supabase mode
    setConfirming(true);
    setError(null);
    try {
      const { createBooking } = await import('@/lib/supabase');
      const barberObj = BARBERS.find((b) => b.name === state.barberName);
      const { error: bookErr } = await createBooking({
        barber_id: barberObj?.id ?? 'any',
        service_id: state.service.id,
        customer_name: '',
        customer_phone: '',
        date: state.day,
        time: state.time,
        status: 'confirmed',
      });
      if (bookErr) {
        setError(bookErr);
      } else {
        closeModal();
      }
    } catch {
      setError('Erro ao confirmar agendamento. Tente novamente.');
    } finally {
      setConfirming(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bkTitle"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        background: 'rgba(6,11,19,.74)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 0,
      }}
      className="bk-overlay-wrap"
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
    >
      <div
        ref={modalRef}
        style={{
          width: '100%',
          maxWidth: 560,
          background: 'linear-gradient(170deg, #101B2B, #0B121E)',
          border: '1px solid var(--line)',
          borderBottom: 'none',
          borderRadius: '28px 28px 0 0',
          maxHeight: '92svh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        className="bk-modal-inner"
      >
        {/* Close */}
        <button
          aria-label="Fechar agendamento"
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: 'rgba(255,255,255,.06)',
            border: '1px solid var(--line2)',
            color: 'var(--ink)',
            cursor: 'pointer',
            fontSize: 20,
            display: 'grid',
            placeItems: 'center',
            zIndex: 3,
            transition: '0.25s',
          }}
          className="bk-close-btn"
        >
          &times;
        </button>

        {/* Header */}
        <div style={{ padding: '26px 26px 18px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', gap: 7, marginBottom: 16 }}>
            {Array.from({ length: MAX }).map((_, i) => (
              <span
                key={i}
                style={{
                  height: 4,
                  flex: 1,
                  borderRadius: 99,
                  background:
                    i < step
                      ? 'linear-gradient(90deg, var(--red2), var(--red))'
                      : 'rgba(255,255,255,.1)',
                  transition: '0.35s',
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontSize: 10.5,
              color: 'var(--red2)',
            }}
          >
            Passo {step} de {MAX}
          </div>
          <h2
            id="bkTitle"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: 21,
              marginTop: 5,
            }}
          >
            {TITLES[step - 1]}
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding: '22px 26px', overflowY: 'auto', flex: 1 }}>
          {/* Step 1 — services */}
          {step === 1 && (
            <div style={{ display: 'grid', gap: 10 }}>
              {SERVICES.filter((s) => s.active).map((s) => (
                <button
                  key={s.id}
                  className={`opt${state.service?.id === s.id ? ' sel' : ''}`}
                  onClick={() => setService(s)}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 15 }}>
                      {s.name}
                    </div>
                    <div style={{ color: 'var(--muted)', fontSize: 12.5, marginTop: 2 }}>
                      {s.durationMin} min
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 800,
                      fontSize: 16,
                      color: 'var(--red2)',
                      flexShrink: 0,
                    }}
                  >
                    {formatPrice(s.priceCents)}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — barbers */}
          {step === 2 && (
            <div style={{ display: 'grid', gap: 10 }}>
              {['Sem preferencia', ...BARBERS.filter((b) => b.active).map((b) => b.name)].map(
                (name) => (
                  <button
                    key={name}
                    className={`opt${state.barberName === name ? ' sel' : ''}`}
                    onClick={() => setBarber(name)}
                  >
                    <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 15 }}>
                      {name}
                    </div>
                  </button>
                )
              )}
            </div>
          )}

          {/* Step 3 — days */}
          {step === 3 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
                gap: 10,
              }}
            >
              {workingDays.map((d) => (
                <button
                  key={d.iso}
                  className={`opt center${state.day === d.iso ? ' sel' : ''}`}
                  onClick={() => setDay(d.iso, d.label)}
                >
                  <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 14 }}>
                    {d.label}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 4 — times + summary */}
          {step === 4 && (
            <>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                  gap: 10,
                }}
              >
                {HOURS.map((t) => (
                  <button
                    key={t}
                    className={`opt center${state.time === t ? ' sel' : ''}`}
                    onClick={() => setTime(t)}
                  >
                    <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 15 }}>
                      {t}
                    </div>
                  </button>
                ))}
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 18,
                  marginTop: 18,
                }}
              >
                {[
                  ['Servico', state.service ? `${state.service.name} · ${formatPrice(state.service.priceCents)}` : '—'],
                  ['Profissional', state.barberName ?? '—'],
                  ['Dia', state.dayLabel ?? '—'],
                  ['Horario', state.time ?? '—'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: '7px 0',
                      fontSize: 14,
                      borderBottom: k !== 'Horario' ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    <span style={{ color: 'var(--muted)' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, textAlign: 'right' }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {error && (
                <p
                  style={{
                    marginTop: 14,
                    padding: '12px 16px',
                    background: 'rgba(224,50,47,.12)',
                    border: '1px solid rgba(224,50,47,.3)',
                    borderRadius: 12,
                    color: 'var(--red2)',
                    fontSize: 14,
                  }}
                >
                  {error}
                </p>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '16px 26px 22px',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            gap: 12,
          }}
        >
          {step > 1 && (
            <button
              className="btn btn-ghost"
              onClick={() => setStep((s) => s - 1)}
              style={{ flex: 1 }}
            >
              Voltar
            </button>
          )}
          <button
            className="btn btn-red"
            onClick={handleNext}
            disabled={!canContinue || confirming}
            style={{ flex: 1 }}
          >
            {confirming ? 'Aguarde...' : step === MAX ? 'Confirmar no WhatsApp' : 'Continuar'}
          </button>
        </div>
      </div>

      <style>{`
        .bk-close-btn:hover { background: rgba(224,50,47,.18); color: var(--red2); }
        @media (min-width: 620px) {
          .bk-overlay-wrap { align-items: center; padding: 24px; }
          .bk-modal-inner { border-bottom: 1px solid var(--line); border-radius: 26px; max-height: 88svh; }
        }
      `}</style>
    </div>
  );
}
