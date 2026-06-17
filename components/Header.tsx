'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useBooking } from './booking/BookingProvider';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '/servicos', label: 'Servicos' },
    { href: '/equipe', label: 'Equipe' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/fidelidade', label: 'Fidelidade' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 13,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: '0.35s',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 22px' }}>
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            background: scrolled ? 'rgba(11,18,30,.92)' : 'var(--glass)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--line)',
            borderRadius: 99,
            padding: '10px 12px 10px 17px',
            boxShadow: scrolled ? '0 14px 40px -16px rgba(0,0,0,.7)' : 'none',
            transition: '0.35s',
          }}
        >
          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--red2), var(--red))',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--font-outfit)',
                fontWeight: 900,
                color: '#fff',
                fontSize: 18,
              }}
            >
              N
            </div>
            <span
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 800,
                letterSpacing: '0.18em',
                fontSize: 16,
              }}
            >
              NAVALHA
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: 'flex',
              gap: 26,
              fontFamily: 'var(--font-outfit)',
              fontWeight: 600,
              fontSize: 14,
              color: '#C9D1DB',
            }}
            className="hidden-mobile"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ transition: '0.25s' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--red2)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#C9D1DB')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              className="btn btn-red"
              onClick={() => openModal()}
              style={{ padding: '11px 22px', fontSize: 14 }}
            >
              Agendar
            </button>

            {/* Hamburger */}
            <button
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((p) => !p)}
              className="show-mobile"
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid var(--line2)',
                color: 'var(--ink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 5,
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 16,
                  height: 2,
                  background: 'currentColor',
                  borderRadius: 2,
                  transition: '0.3s',
                  transform: menuOpen ? 'translateY(3.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 16,
                  height: 2,
                  background: 'currentColor',
                  borderRadius: 2,
                  transition: '0.3s',
                  transform: menuOpen ? 'translateY(-3.5px) rotate(-45deg)' : 'none',
                  marginTop: menuOpen ? -7 : 0,
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              marginTop: 8,
              background: 'rgba(11,18,30,.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--line)',
              borderRadius: 18,
              padding: '12px 0',
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 22px',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: 15,
                  color: '#C9D1DB',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 880px) { .show-mobile { display: none !important; } }
        @media (max-width: 879px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
