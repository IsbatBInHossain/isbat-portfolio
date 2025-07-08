'use client' // Use client-side hooks for the animation

import { TypeAnimation } from 'react-type-animation'
import { config } from '@/data/config'
import MatrixRain from './MatrixRain'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className='relative flex flex-col items-center justify-center text-center h-[100vh] min-h-[400px] md:min-h-[500px] mb-16 overflow-hidden w-full'>
      {/* The Matrix Rain background effect. */}
      <MatrixRain />

      {/* The content, layered on top. No extra overlay needed. */}
      <div className='relative z-10 p-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]'>
          Hi, I'm {config.name}.
        </h1>
        <div className='text-lg md:text-xl lg:text-2xl text-matrix-green drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]'>
          <span className='font-semibold'>I am a </span>
          <TypeAnimation
            sequence={config.heroSequence}
            wrapper='span'
            speed={50}
            cursor={true}
            repeat={Infinity}
            className='font-mono'
          />
        </div>
      </div>
      {/* Scroll down indicator */}
      <a
        href='#projects'
        className='absolute bottom-4 left-1/2 -translate-x-1/2 z-10 '
        aria-label='Scroll to projects'
      >
        <motion.div
          // This container orchestrates the animation of its children
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Animates children 0.3s after one another
                repeat: Infinity,
                repeatType: 'loop',
                duration: 1.5,
                ease: 'linear',
              },
            },
          }}
          initial='hidden'
          animate='visible'
        >
          {/* These are the three chevrons that will be animated */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FiChevronDown className='text-text-secondary text-3xl' />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FiChevronDown className='text-text-secondary text-3xl -mt-4' />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FiChevronDown className='text-text-secondary text-3xl -mt-4' />
          </motion.div>
        </motion.div>
      </a>
    </section>
  )
}

export default HeroSection
