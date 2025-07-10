'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Loader = ({ onLoadingComplete }) => {
  const [sequenceStep, setSequenceStep] = useState(0)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  // This effect will advance the animation sequence based on timers
  useEffect(() => {
    const timeouts = [
      setTimeout(() => setSequenceStep(1), 1000),
      setTimeout(() => setSequenceStep(2), 2500),
      setTimeout(() => setSequenceStep(3), 4000),
      setTimeout(() => setShowFinalMessage(true), 5500),
    ]

    // Cleanup function to clear all timeouts if the component unmounts
    return () => timeouts.forEach(clearTimeout)
  }, [onLoadingComplete])

  return (
    <div className='crt-container'>
      <div className='crt-text p-4 text-lg'>
        {sequenceStep >= 0 && (
          <TypeAnimation
            sequence={['', 500, '_']} // Initial blinking cursor
            wrapper='span'
            cursor={false}
            repeat={0}
          />
        )}

        {sequenceStep >= 1 && (
          <div>
            <TypeAnimation
              sequence={['> FORCING KERNEL_INIT...']}
              wrapper='span'
              cursor={false}
              speed={40}
            />
          </div>
        )}

        {sequenceStep >= 2 && (
          <div className='mt-2'>
            <p>[AUTH_OVERRIDE]:       ...OK</p>
            <p>[FIREWALL_DISABLED]:  ...OK</p>
            <p>[ROOT_ACCESS]:         ...GRANTED</p>
          </div>
        )}

        {sequenceStep >= 3 && (
          <div className='mt-2'>
            <p> CONNECTING TO 127.0.0.1...</p>
            <p> CONNECTION ESTABLISHED.</p>
          </div>
        )}

        {showFinalMessage && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
            <TypeAnimation
              sequence={[
                'Wake up, Neo...',
                1500,
                'The Matrix has you...',
                1500,
                'Follow the white rabbit.',
                1000,
                // After the final message, call onLoadingComplete
                () => {
                  onLoadingComplete()
                },
              ]}
              wrapper='p'
              cursor={true}
              speed={30}
              className='text-2xl'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Loader
