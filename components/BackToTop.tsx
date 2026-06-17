'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 520);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <button
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        left: 18,
        bottom: 18,
        zIndex: 55,
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'var(--glass)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--line2)',
        color: 'var(--ink)',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible ? 'none' : 'translateY(10px)',
        transition: '0.35s',
      }}
      className="btt-btn"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <style>{`
        .btt-btn:hover { background: rgba(224,50,47,.16); border-color: rgba(224,50,47,.4); color: var(--red2); }
      `}</style>
    </button>
  );
}
