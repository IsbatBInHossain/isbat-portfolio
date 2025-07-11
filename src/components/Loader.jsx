'use client'

import { useState, useEffect, useRef } from 'react'
import WakeUpSequence from './WakeUpSequence'
import HackingSequence from './HackingSequence'
import PasswordModal from './PasswordModal'

const Loader = ({ isFirstVisit, onLoadingComplete }) => {
  const [step, setStep] = useState(isFirstVisit ? 0 : 1)
  const [showModal, setShowModal] = useState(false)

  const scrollAnchorRef = useRef(null)

  const handleHackingComplete = () => {
    setShowModal(true)
  }

  const handleModalComplete = () => {
    onLoadingComplete()
  }

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

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-background z-[9999] overflow-y-auto'>
      <div className='crt-text p-4 text-lg'>
        {step === 0 ? (
          <WakeUpSequence onComplete={() => setStep(1)} />
        ) : (
          <HackingSequence onComplete={handleHackingComplete} />
        )}

        {showModal && <PasswordModal onComplete={handleModalComplete} />}

        <div ref={scrollAnchorRef}></div>
      </div>
    </div>
  )
}

export default Loader
