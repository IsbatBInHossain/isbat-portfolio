'use client'

import { useState, useEffect, useRef } from 'react'
import WakeUpSequence from './WakeUpSequence'
import HackingSequence from './HackingSequence'
import PasswordModal from './PasswordModal'
import { TypeAnimation } from 'react-type-animation'

// Short starting sequence for returning visitors
const FastBootSequence = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000) // End after 2 seconds
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <TypeAnimation
      sequence={[
        '> SYSTEM CHECK ... OK\n> USER AUTHENTICATED...\n> LAUNCHING...',
      ]}
      wrapper='pre'
      cursor={false}
      speed={60}
    />
  )
}

const Loader = ({ isFirstVisit, onLoadingComplete }) => {
  const [longSequenceStep, setLongSequenceStep] = useState(0)

  const scrollAnchorRef = useRef(null)

  // Auto-scrolling logic
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (scrollAnchorRef.current) {
        scrollAnchorRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    })
    if (scrollAnchorRef.current) {
      observer.observe(scrollAnchorRef.current.parentNode, {
        childList: true,
        subtree: true,
      })
    }
    return () => observer.disconnect()
  }, [])

  if (!isFirstVisit) {
    // Fast sequence for returning visitors
    return (
      <div className='fixed top-0 left-0 w-full h-full bg-background z-[9999] p-4'>
        <div className='crt-text text-lg'>
          <FastBootSequence onComplete={onLoadingComplete} />
        </div>
      </div>
    )
  }

  // Render the full, multi-step sequence for first-time visitors
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-background z-[9999] overflow-y-auto'>
      <div className='crt-text p-4 text-lg'>
        {longSequenceStep === 0 && (
          <WakeUpSequence onComplete={() => setLongSequenceStep(1)} />
        )}
        {longSequenceStep >= 1 && (
          <HackingSequence onComplete={() => setLongSequenceStep(2)} />
        )}

        {longSequenceStep === 2 && (
          <PasswordModal onComplete={onLoadingComplete} />
        )}

        <div ref={scrollAnchorRef}></div>
      </div>
    </div>
  )
}

export default Loader
