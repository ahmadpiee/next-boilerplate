import './globals.css'
import { AppProvider } from '@utils/providers/AppProvider'
import type { Metadata } from 'next'
import Header from '@components/global/Header'
import { poppins } from '@styles/fonts/poppins'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
