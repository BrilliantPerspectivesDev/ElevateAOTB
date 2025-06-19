import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { StructuredData } from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elevate-aotb.vercel.app'),
  title: {
    template: '%s - The Art of Thinking Brilliantly',
    default: 'The Art of Thinking Brilliantly - 18 Sessions with Graham Cooke | Brilliant Perspectives',
  },
  description:
    "Discover the Kingdom mindset that's already yours in Christ with Graham Cooke's transformative 18-session series 'The Art of Thinking Brilliantly'. Stream anytime, anywhere with lifetime access for just $47 (50% off).",
  keywords: [
    'Graham Cooke',
    'Kingdom thinking',
    'Christian teaching',
    'Brilliant Perspectives',
    'spiritual growth',
    'mind of Christ',
    'Kingdom mindset',
    'Christian streaming',
    'transformative teaching'
  ],
  authors: [{ name: 'Graham Cooke' }, { name: 'Brilliant Perspectives' }],
  creator: 'Brilliant Perspectives',
  publisher: 'Brilliant Perspectives',
  openGraph: {
    title: 'The Art of Thinking Brilliantly - 18 Sessions with Graham Cooke',
    description: "Discover the Kingdom mindset that's already yours in Christ with Graham Cooke's transformative 18-session series. Stream anytime, anywhere with lifetime access for just $47 (50% off).",
    url: 'https://elevate-aotb.vercel.app',
    siteName: 'The Art of Thinking Brilliantly',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Art of Thinking Brilliantly - Graham Cooke Teaching Series',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Art of Thinking Brilliantly - 18 Sessions with Graham Cooke',
    description: "Discover the Kingdom mindset that's already yours in Christ. Stream anytime, anywhere with lifetime access for just $47 (50% off).",
    images: ['/og-image.jpg'],
    site: '@brilliantperspectives',
    creator: '@grahamcooke',
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <head />
      <body className="flex min-h-full">
        <StructuredData />
        <Script
          id="brilliant-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var head = document.head;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = "https://t.mybrilliant.app/v1/lst/universal-script?ph=2e5b64900a084ea4a2c585fdd71057b618ff67818720df62e56696dee06253f0&tag=!clicked&ref_url=" + encodeURI(document.URL);
              head.appendChild(script);
            `,
          }}
        />
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
