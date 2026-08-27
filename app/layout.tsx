import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trattoria Napoli',
  description: 'Traditional family-owned Italian restaurant established in 1987, specializing in fresh handmade pasta and authentic Neapolitan pizza with a warm, welcoming atmosphere.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900" style={{ backgroundColor: '#C4704F' }}>
        {children}
      </body>
    </html>
  );
}
