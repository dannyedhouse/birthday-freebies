import {Footer} from '@/components/Layout/Footer'
import {Header} from '@/components/Layout/Header'
import {ScrollToTopButton} from '@/components/ScrollToTop/ScrollToTop'
import { ThemeProvider } from '@/components/ThemeProvider'
import type {Metadata, Viewport} from 'next'
import {Raleway} from 'next/font/google'
import '../globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
})

export const metadata: Metadata = {
  title: 'Birthday Freebie - freebies and discounts',
  description: 'Birthday freebies and birthday discounts',
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
      </body>
    </html>
  )
}
