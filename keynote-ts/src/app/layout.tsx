import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'

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
  title: {
    template: '%s - Limitless Life with God',
    default: 'Limitless Life with God - Virtual Event with Graham Cooke & Dionne',
  },
  description:
    "Join us for Limitless Life with God, a 2-day virtual event with Graham Cooke & Dionne. Experience transformative teaching, interactive sessions, and practical application to live from your true identity in Christ. March 7-8, 2025.",
  openGraph: {
    title: 'Limitless Life with God - Virtual Event',
    description: "Join us for Limitless Life with God, a 2-day virtual event with Graham Cooke & Dionne. Experience transformative teaching, interactive sessions, and practical application to live from your true identity in Christ. March 7-8, 2025.",
    url: 'https://deals.brilliantperspectives.com/optin1750344852174',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Limitless Life with God Event Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limitless Life with God - Virtual Event',
    description: "Join us for Limitless Life with God, a 2-day virtual event with Graham Cooke & Dionne. Experience transformative teaching, interactive sessions, and practical application to live from your true identity in Christ. March 7-8, 2025.",
    images: ['/og-image.jpg'],
    site: '@brilliantperspectives',
    creator: '@brilliantperspectives',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
