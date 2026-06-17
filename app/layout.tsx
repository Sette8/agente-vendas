import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import '../styles/globals.css';
import { CONFIG } from '@/lib/config';
import { getHairSalonSchema } from '@/lib/schema';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import BackToTop from '@/components/BackToTop';
import { BookingProvider } from '@/components/booking/BookingProvider';
import BookingModal from '@/components/booking/BookingModal';
import BarberPole from '@/components/BarberPole';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.siteUrl),
  title: {
    default: 'Navalha · Barbearia masculina | Corte, barba e agendamento',
    template: '%s | Navalha Barbearia',
  },
  description:
    'Barbearia masculina classica. Cortes, barba na navalha e atendimento por hora marcada. Agende em segundos pelo WhatsApp.',
  keywords: [
    'barbearia',
    'barbearia masculina',
    'corte de cabelo masculino',
    'barba',
    'navalha',
    'agendar barbeiro',
    'barbearia perto de mim',
  ],
  authors: [{ name: 'Agencia L7' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: CONFIG.nome,
    title: 'Navalha · Barbearia masculina',
    description:
      'Cortes classicos, barba na navalha e atendimento por hora marcada. Agende pelo WhatsApp.',
    url: CONFIG.siteUrl,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Navalha Barbearia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navalha · Barbearia masculina',
    description: 'Cortes classicos, barba na navalha e agendamento pelo WhatsApp.',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  alternates: { canonical: CONFIG.siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = getHairSalonSchema();

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <BookingProvider>
          <BarberPole />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
          <BackToTop />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
