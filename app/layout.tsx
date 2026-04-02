import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metamorfosis — Diário Emocional com IA',
  description: 'Transforme seus sentimentos em autoconhecimento com o Metamorfosis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
