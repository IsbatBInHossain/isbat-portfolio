'use client'

import { useRef, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  const gridRef = useRef(null)

  useEffect(() => {
    const container = gridRef.current
    if (!container) return
    const handleMouseMove = e => {
      // Get the position of the mouse relative to the container element
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Use requestAnimationFrame for performance
      requestAnimationFrame(() => {
        container.style.setProperty('--mouse-x', `${x}px`)
        container.style.setProperty('--mouse-y', `${y}px`)
      })
    }
    container.addEventListener('mousemove', handleMouseMove)
    // Cleanup function
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <HeroSection />
      <div ref={gridRef} className='grid-background w-full flex justify-center'>
        <div className='interactive-grid-spotlight'></div>
        <div className='max-w-4xl w-full p-4 md:p-8 lg:p-12'>
          <ProjectShowcase />
          <Footer />
        </div>
      </div>
    </main>
  )
}
