'use client'

import { useState, useEffect } from 'react'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'

const firaCode = Fira_Code({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(null)

  useEffect(() => {
    document.title = 'Isbat - Backend Engineer'
    const hasVisited = localStorage.getItem('hasVisited')
    setIsFirstVisit(!hasVisited)
  }, [])

  const handleLoadingComplete = () => {
    localStorage.setItem('hasVisited', 'true')
    setIsLoading(false)
  }

  return (
    <html lang='en'>
      <body className={`${firaCode.className} bg-background`}>
        <div className='crt-effect'>
          {isFirstVisit === null ? (
            <div className='w-full h-screen' />
          ) : isLoading ? (
            <Loader
              isFirstVisit={isFirstVisit}
              onLoadingComplete={handleLoadingComplete}
            />
          ) : (
            <main className='crt-text'>
              <Navbar />
              {children}
            </main>
          )}
        </div>
      </body>
    </html>
  )
}
