import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import StyledComponentsRegistry from '@/app/registry'
import Footer from '@/app/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Saúde inclusiva para todos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}