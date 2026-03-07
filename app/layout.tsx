import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
export const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Artigold | Entreprise BTP Tous Corps d\'État',
  description:
    'Artigold accompagne particuliers et professionnels dans leurs projets de construction et de rénovation. Entreprise tous corps d\'état, de la conception à la réception.',

  icons: {
    icon: "/favicon.svg",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={playfair.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
