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
        className='absolute bottom-4 left-1/2 -translate-x-1/2 z-10'
        aria-label='Scroll to projects'
      >
        <div className='flex flex-col items-center'>
          {/* Render three chevrons, each with its own motion.div and a unique delay */}
          {[0, 0.2, 0.4].map(delay => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, y: -5 }}
              animate={{
                opacity: [0, 1, 0], // Fades in, then fades out
                y: 5,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1, // The gap between each full loop
                delay: delay, // The initial delay that creates the cascade
                ease: 'linear',
              }}
              className='-mt-2' // Negative margin to stack them closely
            >
              <FiChevronDown className='text-text-secondary text-3xl' />
            </motion.div>
          ))}
        </div>
      </a>
    </section>
  )
}

export default HeroSection
