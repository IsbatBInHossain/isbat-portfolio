import { Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Isbat | Portfolio',
  description: 'The portfolio of Isbat, a Backend Engineer and System Builder.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={firaCode.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
