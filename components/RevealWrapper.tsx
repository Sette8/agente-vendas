'use client';

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  style?: React.CSSProperties;
}

export default function RevealWrapper({ children, delay = 0, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` d${delay}` : '';

  return (
    <div ref={ref} className={`rv${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
