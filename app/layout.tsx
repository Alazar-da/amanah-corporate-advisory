import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amanah Corporate Advisory | Strategic Business Setup in UAE',
  description: 'Your trusted partner for business setup, corporate advisory, and expansion across the UAE and international markets.',
  keywords: 'business setup, corporate advisory, UAE company formation, banking solutions, visa services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}