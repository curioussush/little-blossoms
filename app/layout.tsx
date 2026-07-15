import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Little Blossoms - Premium Baby Products',
  description: 'Premium baby essentials designed with love, comfort, and safety.',
  keywords: 'baby products, baby clothing, toys, feeding, diapers, premium',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
