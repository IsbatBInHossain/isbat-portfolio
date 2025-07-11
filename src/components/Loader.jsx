'use client'

import { useState, useEffect } from 'react'
import WakeUpSequence from './WakeUpSequence'

const Loader = ({ isFirstVisit, onLoadingComplete }) => {
  const [sequence, setSequence] = useState(isFirstVisit ? 'wakeUp' : 'hacking')

  // This is a placeholder for our HackingSequence component.
  const HackingSequencePlaceholder = ({ onComplete }) => {
    useEffect(() => {
      const timer = setTimeout(onComplete, 1000)
      return () => clearTimeout(timer)
    }, [onComplete])
    return <div></div>
  }

  const handleWakeUpComplete = () => {
    setSequence('hacking')
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-background z-[9999] overflow-hidden'>
      <div className='crt-text p-4'>
        {sequence === 'wakeUp' && (
          <WakeUpSequence onComplete={handleWakeUpComplete} />
        )}

        {sequence === 'hacking' && (
          <HackingSequencePlaceholder onComplete={onLoadingComplete} />
        )}
      </div>
    </div>
  )
}

export default Loader
