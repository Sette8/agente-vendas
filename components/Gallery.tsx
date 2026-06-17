'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY } from '@/lib/data';
import RevealWrapper from './RevealWrapper';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <RevealWrapper>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <button
              key={item.id}
              className={`gtile${item.span ? ` gt-${item.span}` : ''}`}
              onClick={() => setLightbox(item.src)}
              aria-label={`Ver imagem: ${item.alt}`}
              style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
            >
              <div
                style={{
                  borderRadius: 18,
                  overflow: 'hidden',
                  position: 'relative',
                  height: '100%',
                  background:
                    'radial-gradient(120% 90% at 30% 10%, rgba(224,50,47,.16), transparent 60%), linear-gradient(150deg, #16263C, #0B121E)',
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 680px) 50vw, 25vw"
                  style={{ objectFit: 'cover', transition: '0.6s' }}
                  loading="lazy"
                  className="gal-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 55%, rgba(7,12,20,.7))',
                    zIndex: 1,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: 16,
                    bottom: 14,
                    zIndex: 2,
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#fff',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </RevealWrapper>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <button
            aria-label="Fechar imagem"
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,.1)',
              border: '1px solid rgba(255,255,255,.2)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 22,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            &times;
          </button>
          <div style={{ position: 'relative', maxWidth: 900, maxHeight: '80vh', width: '100%', aspectRatio: '4/3' }}>
            <Image
              src={lightbox}
              alt="Imagem ampliada"
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 150px;
          gap: 14px;
        }
        .gtile { display: block; }
        .gt-a { grid-column: span 2; grid-row: span 2; }
        .gt-b { grid-column: span 2; }
        .gtile:hover .gal-img { transform: scale(1.06); }
        @media (max-width: 680px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 128px; }
        }
      `}</style>
    </>
  );
}
