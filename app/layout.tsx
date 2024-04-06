import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL('https://repost.compsigh.club')
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: 're/post',
  description: 'Quickly identify compostability and/or recyclability with AI'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
