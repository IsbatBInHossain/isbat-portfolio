'use client'

import { useState, useEffect, useRef } from 'react'
import WakeUpSequence from './WakeUpSequence'
import HackingSequence from './HackingSequence'

const Loader = ({ isFirstVisit, onLoadingComplete }) => {
  const [step, setStep] = useState(0)
  const scrollAnchorRef = useRef(null)

  const handleSequenceComplete = () => {
    setStep(prev => prev + 1)
  }

  useEffect(() => {
    if (step === 0) {
      if (!isFirstVisit) setStep(1)
    } else if (step === 2) {
      onLoadingComplete()
    }
  }, [step, isFirstVisit, onLoadingComplete])

  // Scroll logic
  useEffect(() => {
    // Use mutation observer for observing DOM changes
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

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-background z-[9999] overflow-y-auto'>
      <div className='crt-text p-4 text-lg'>
        {step === 0 && isFirstVisit && (
          <WakeUpSequence onComplete={handleSequenceComplete} />
        )}

        {step === 1 && <HackingSequence onComplete={handleSequenceComplete} />}

        <div ref={scrollAnchorRef}></div>
      </div>
    </div>
  )
}

export default Loader
