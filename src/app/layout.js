'use client'

import { useState, useEffect } from 'react'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

// We can't export metadata from a Client Component so use useEffect

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  // Set document title and metadata
  useEffect(() => {
    document.title = 'Isbat | Portfolio'
    document.description =
      'The portfolio of Isbat, a Backend Engineer and System Builder.'
  }, [])

  return (
    <html lang='en'>
      <body className={`${firaCode.className} bg-background`}>
        <div className=' crt-effect'>
          {isLoading ? (
            <Loader onLoadingComplete={() => setIsLoading(false)} />
          ) : (
            <>
              <main className='crt-text'>
                <Navbar />
                {children}
              </main>
            </>
          )}
        </div>
      </body>
    </html>
  )
}
