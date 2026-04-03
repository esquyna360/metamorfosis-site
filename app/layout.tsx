import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metamorfosis — Diário Emocional com IA',
  description: 'Transforme seus sentimentos em autoconhecimento com o Metamorfosis.',
};

// Root layout is a pass-through; locale layout sets <html lang={locale}>.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
