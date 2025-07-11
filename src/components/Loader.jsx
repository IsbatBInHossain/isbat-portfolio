'use client'

import { useState, useEffect } from 'react'
import WakeUpSequence from './WakeUpSequence'
import HackingSequence from './HackingSequence' // 1. IMPORT THE REAL COMPONENT

const Loader = ({ isFirstVisit, onLoadingComplete }) => {
  const [sequence, setSequence] = useState(isFirstVisit ? 'wakeUp' : 'hacking')

  // This state will now control the whole loader's sequence
  const [step, setStep] = useState(0)

  const handleSequenceComplete = () => {
    setStep(prev => prev + 1)
  }

  useEffect(() => {
    if (step === 0) {
      // Initial state
      if (!isFirstVisit) {
        setStep(1) // Skip straight to hacking
      }
    } else if (step === 2) {
      onLoadingComplete()
    }
  }, [step, isFirstVisit, onLoadingComplete])

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-background z-[9999] overflow-hidden'>
      <div className='crt-text p-4'>
        {step === 0 && isFirstVisit && (
          <WakeUpSequence onComplete={handleSequenceComplete} />
        )}

        {step === 1 && <HackingSequence onComplete={handleSequenceComplete} />}
      </div>
    </div>
  )
}

export default Loader
