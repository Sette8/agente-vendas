'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/data';
import RevealWrapper from './RevealWrapper';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 780 }}>
      {FAQ.map((item) => {
        const isOpen = openId === item.id;
        return (
          <RevealWrapper key={item.id}>
            <div className={`fitem${isOpen ? ' open' : ''}`}>
              <button
                className="fq-btn"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: '20px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                }}
              >
                {item.question}
                <span
                  style={{
                    flexShrink: 0,
                    color: 'var(--red2)',
                    fontSize: 20,
                    lineHeight: 1,
                    transition: '0.35s',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="fa"
                style={{ maxHeight: isOpen ? 200 : 0 }}
              >
                <div style={{ padding: '0 22px 20px', color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.6 }}>
                  {item.answer}
                </div>
              </div>
            </div>
          </RevealWrapper>
        );
      })}

      <style>{`
        .fq-btn:focus-visible { outline: 2px solid var(--red2); outline-offset: -2px; border-radius: 4px; }
      `}</style>
    </div>
  );
}
