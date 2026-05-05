import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import StyledComponentsRegistry from '@/app/registry'
import Header from '@/app/header'
import Footer from '@/app/footer'

const nunito = Nunito({ subsets: ['latin'] })

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
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}