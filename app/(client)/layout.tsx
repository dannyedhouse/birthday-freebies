import {Footer} from '@/components/Layout/Footer'
import {Header} from '@/components/Layout/Header'
import {ScrollToTopButton} from '@/components/ScrollToTop/ScrollToTop'
import {ThemeProvider} from '@/components/ThemeProvider'
import {Analytics} from '@vercel/analytics/next'
import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata, Viewport} from 'next'
import {Raleway} from 'next/font/google'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Birthday Freebies - Free Birthday Gifts & Discounts',
  description: 'Discover the best birthday freebies and discounts in the UK! Get free food, drinks, discounts and gifts on your birthday from top brands.',
  keywords: 'birthday freebies, birthday discounts, free birthday gifts, UK birthday offers, birthday deals',
  openGraph: {
    title: 'Birthday Freebies - Free Birthday Gifts & Discounts',
    description: 'Discover the best birthday freebies and discounts in the UK! Get free food, drinks, discounts and gifts on your birthday from top brands.',
    type: 'website',
    siteName: 'Birthday Freebie',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Freebies - Free Birthday Gifts & Discounts',
    description: 'Discover the best birthday freebies and discounts in the UK! Get free food, drinks, discounts and gifts on your birthday from top brands.',
  },
}

export const viewport: Viewport = {
  width: 300,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <ScrollToTopButton />
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
