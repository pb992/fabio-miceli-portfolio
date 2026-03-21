import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { FloatingWhatsApp } from '@/components/floating-elements'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabio Miceli | Full-Stack Developer Freelance',
  description: 'Il tuo problema è la mia soluzione. Dev + Design + metodologia agile = Impatto business in tempi da freelance.',
  keywords: ['full-stack developer', 'freelance', 'React', 'Next.js', 'TypeScript', 'web development', 'Italia'],
  authors: [{ name: 'Fabio Miceli' }],
  creator: 'Fabio Miceli',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: 'Fabio Miceli | Full-Stack Developer Freelance',
    description: 'Dev + Design + metodologia agile = Impatto business in tempi da freelance.',
    siteName: 'Fabio Miceli Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabio Miceli | Full-Stack Developer Freelance',
    description: 'Dev + Design + metodologia agile = Impatto business in tempi da freelance.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a1a] text-white overflow-x-hidden">
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
