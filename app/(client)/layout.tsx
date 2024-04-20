import {Footer} from '@/components/Layout/footer'
import {Header} from '@/components/Layout/header'
import {ScrollToTopButton} from '@/components/ScrollToTop/ScrollToTop'
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
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow container mx-auto">{children}</main>
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  )
}
