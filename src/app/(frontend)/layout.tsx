import React from 'react'
import { Inter } from 'next/font/google'

import './globals.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}
const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
