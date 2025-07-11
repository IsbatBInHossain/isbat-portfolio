'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { anomalyCharcters } from '@/data/constants'

const generateRandomString = (length, characterSet) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    )
  }
  return result
}
const anomolyCharacters = anomalyCharcters

const GlitchCard = ({ children }) => {
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [randomString, setRandomString] = useState('')

  const intervalRef = useRef(null)
  const isInViewRef = useRef(false) // Ref to track viewport status

  // Effect to set readiness after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Effect to generate the random string noise
  useEffect(() => {
    if (!isDecrypting) {
      intervalRef.current = setInterval(() => {
        setRandomString(generateRandomString(1500, anomolyCharacters))
      }, 100)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isDecrypting])

  useEffect(() => {
    // Check if the component is ready AND in view, but not already decrypting.
    if (isReady && isInViewRef.current && !isDecrypting) {
      setIsDecrypting(true)
    }
  }, [isReady, isDecrypting]) // This effect runs whenever `isReady` changes.

  const animationDuration = 1.2

  return (
    <motion.div
      className='relative w-full h-[350px] rounded-lg overflow-hidden border border-matrix-green-dark/30'
      // onViewportEnter updates ref.
      onViewportEnter={() => {
        isInViewRef.current = true
        // If the component is already ready when it enters view, decrypt immediately.
        if (isReady) {
          setIsDecrypting(true)
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* The animation layers below this point are unchanged */}
      <motion.div
        className='absolute inset-0 w-full h-full'
        animate={isDecrypting ? 'visible' : 'hidden'}
        variants={{
          hidden: { clipPath: 'inset(0 0 100% 0)' },
          visible: { clipPath: 'inset(0 0 0% 0)' },
        }}
        transition={{ duration: animationDuration, ease: 'easeOut' }}
      >
        {children}
      </motion.div>

      <motion.div
        className='absolute inset-0 bg-background p-4'
        animate={
          isDecrypting
            ? { opacity: 0, pointerEvents: 'none' }
            : { opacity: 1, pointerEvents: 'auto' }
        }
        transition={{ duration: animationDuration * 0.8, delay: 0.1 }}
      >
        <p className='text-xs text-matrix-green/60 h-full break-words whitespace-pre-wrap font-mono leading-tight'>
          {randomString}
        </p>
      </motion.div>

      {isDecrypting && (
        <motion.div
          className="absolute left-0 w-full h-[2px] bg-matrix-green shadow-[0_0_15px_1px_theme('colors.matrix-green')]"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: animationDuration, ease: 'easeOut' }}
        />
      )}
    </motion.div>
  )
}

export default GlitchCard
