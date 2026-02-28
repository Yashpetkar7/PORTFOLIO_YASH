import type { Metadata, Viewport } from 'next'
import { Inter, Syncopate, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Yash Petkar — AI & Big Data Engineer',
  description:
    'Portfolio of Yash Petkar — AI Engineer, Data Scientist, and ML Practitioner.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syncopate.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="fixed inset-0 z-0" id="three-canvas-container" />
        <main className="relative z-10">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
