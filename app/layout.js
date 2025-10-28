import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christian Coelho | Desenvolvedor Full Stack',
  description: 'Portfólio de Christian Rafael de Oliveira Coelho - Desenvolvedor Full Stack Júnior especializado em Python, Django, TypeScript, React, Java e Next.js',
  keywords: 'desenvolvedor full stack, python, django, react, typescript, next.js, java, spring boot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
