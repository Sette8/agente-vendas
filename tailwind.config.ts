import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B121E',
        bg2: '#0F1A29',
        navy: '#16263C',
        ink: '#F3F2ED',
        muted: '#94A2B4',
        red: '#E0322F',
        red2: '#FF514C',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '26px',
        sm: '18px',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(120% 80% at 85% 10%, rgba(224,50,47,.2), transparent 50%), radial-gradient(100% 90% at 10% 90%, rgba(22,38,60,.85), transparent 60%), linear-gradient(160deg, #101B2B, #0B121E)',
        'card-gradient':
          'radial-gradient(120% 90% at 30% 10%, rgba(224,50,47,.16), transparent 60%), linear-gradient(150deg, #16263C, #0B121E)',
      },
    },
  },
  plugins: [],
};

export default config;
