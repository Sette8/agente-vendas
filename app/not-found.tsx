import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center text-center px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div
        style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--red2), var(--red))',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-outfit)',
          fontWeight: 900,
          color: '#fff',
          fontSize: 32,
          marginBottom: 28,
        }}
      >
        N
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 900,
          fontSize: 'clamp(52px, 12vw, 100px)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: 'var(--red2)',
          marginBottom: 12,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 700,
          fontSize: 22,
          marginBottom: 10,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
        }}
      >
        Pagina nao encontrada
      </p>
      <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, maxWidth: 380 }}>
        Essa pagina nao existe ou foi movida. Volte para a home e continue explorando.
      </p>
      <Link
        href="/"
        className="btn btn-red"
        style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700 }}
      >
        Voltar para a home
      </Link>
    </section>
  );
}
