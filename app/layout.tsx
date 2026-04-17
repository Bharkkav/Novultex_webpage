import '../styles/globals.css'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novultex | Embedded Systems, IoT & Software',
  description: 'Novultex Technologies specializes in embedded systems, IoT solutions, PCB design, and custom software development.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
