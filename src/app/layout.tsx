import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJarkartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: 'variable',
})

export const metadata: Metadata = {
  title: 'React Hook Form + Zod',
  description: 'Formulário simples com React Hook Form e Zod',
  authors: { name: 'Aridan Pantoja', url: 'https://aridan.dev' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={plusJarkartaSans.className}>{children}</body>
    </html>
  )
}
