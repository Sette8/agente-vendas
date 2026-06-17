export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'var(--bg)' }}
      aria-label="Carregando"
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--red2), var(--red))',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-outfit)',
          fontWeight: 900,
          color: '#fff',
          fontSize: 28,
          animation: 'pulse 1.2s ease-in-out infinite',
        }}
      >
        N
      </div>
      <style>{`
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: .85; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
