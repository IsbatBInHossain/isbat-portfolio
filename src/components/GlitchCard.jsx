'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

// Helper function to generate a random string
const generateRandomString = (length, characterSet) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    )
  }
  return result
}

const anomolyCharacters =
  'アィカサタナハマヤャラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユュルグズブヅプエケセテネヘメレゲゼデベペオコソトノホモヨョロゴゾドボポヴッンАВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789#?&%$*<>'

const GlitchCard = ({ children }) => {
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [isDecrypted, setIsDecrypted] = useState(false)
  const [randomString, setRandomString] = useState('')

  const controls = useAnimation()
  const intervalRef = useRef(null)

  // Effect to generate the ever-changing random string
  useEffect(() => {
    // Start generating random strings only when not decrypted
    if (!isDecrypted) {
      intervalRef.current = setInterval(() => {
        setRandomString(generateRandomString(1500, anomolyCharacters))
      }, 100)
    }

    // Cleanup function to clear the interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isDecrypted])

  const startDecryption = () => {
    if (!isDecrypting) {
      setIsDecrypting(true)

      // Start both animations simultaneously
      controls.start('visible').then(() => {
        // Once animations are complete...
        setIsDecrypted(true)
        setIsDecrypting(false)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      })
    }
  }

  return (
    <motion.div
      className='relative w-full h-[350px] rounded-lg overflow-hidden border border-matrix-green-dark/30'
      onViewportEnter={startDecryption}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Layer 1: The Revealed Content (initially hidden by the clip-path) */}
      <motion.div
        className='absolute inset-0 w-full h-full'
        variants={{
          hidden: { clipPath: 'inset(0 0 100% 0)' },
          visible: { clipPath: 'inset(0 0 0% 0)' },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>

      {/* Layer 2: The "Encrypted" Noise (visible until decrypted) */}
      {!isDecrypted && (
        <div className='absolute inset-0 bg-background p-4'>
          <p className='text-xs text-matrix-green/60 h-full break-words whitespace-pre-wrap font-mono leading-tight'>
            {randomString}
          </p>
        </div>
      )}

      {/* Layer 3: The Scan Line (visible only during decryption) */}
      {isDecrypting && (
        <motion.div
          className="absolute left-0 w-full h-1 bg-matrix-green/90 shadow-[0_0_15px_2px_theme('colors.matrix-green')]"
          variants={{
            hidden: { top: '0%' },
            visible: { top: '100%' },
          }}
          initial='hidden'
          animate={controls}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      )}
    </motion.div>
  )
}

export default GlitchCard
