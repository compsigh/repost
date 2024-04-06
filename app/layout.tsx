import type { Metadata, Viewport } from 'next'
import { Inter, Work_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' })

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL('https://repost.compsigh.club')
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: 're/post',
  description: 'Quickly identify compostability and/or recyclability with AI',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Repost',
    capable: true,
    statusBarStyle: 'default'
  }
}

export const viewport: Viewport = {
  themeColor: '#F5F5F5'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${workSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
