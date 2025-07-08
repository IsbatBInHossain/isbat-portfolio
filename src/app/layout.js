import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Isbat - Backend Engineer',
  description: 'The portfolio of Isbat, a Backend Engineer and System Builder.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={firaCode.className}>{children}</body>
    </html>
  )
}
