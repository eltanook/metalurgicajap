import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e0e5ec' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'MJAP | Fábrica de Carrozados, Trailers y Estructuras Metálicas - Villa María, Córdoba',
  description: 'MJAP - Fabricación profesional de trailers, carrocerías, acoplados y estructuras metálicas. Más de 36 años de experiencia en Villa María, Córdoba. Homologaciones, servicios para camiones, restauraciones y repuestos. Cotizá sin compromiso.',
  keywords: 'trailers, carrocerías, metalúrgica, fabricación, homologaciones, Villa María, Córdoba, MJAP, acoplados, semirremolques, estructuras metálicas, reparación camiones',
  authors: [{ name: 'MJAP' }],
  creator: 'MJAP',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'MJAP | Fábrica de Carrozados y Trailers',
    description: 'Fabricación de trailers, carrocerías y estructuras metálicas de alta calidad en Villa María, Córdoba.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'MJAP Carrozados',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MJAP | Fábrica de Carrozados y Trailers',
    description: 'Fabricación de trailers, carrocerías y estructuras metálicas de alta calidad.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} bg-background`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-contacto.png" type="image/png" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Villa María, Córdoba" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
