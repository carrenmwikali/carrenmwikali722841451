import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/GraphikRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GraphikMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GraphikSemibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/GraphikBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Usawa Collective | Equal Footing Podcast',
  description: 'Usawa Collective illuminates, supports, and scales proven gender equality solutions by amplifying what works through our Equal Footing podcast and thought-provoking articles.',
  generator: 'v0.app',
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
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${graphik.variable} ${dmSerif.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
