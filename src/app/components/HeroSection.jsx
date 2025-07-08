'use client' // Use client-side hooks for the animation

import { TypeAnimation } from 'react-type-animation'
import { config } from '@/data/config'
import MatrixRain from './MatrixRain'

const HeroSection = () => {
  return (
    <section className='relative flex flex-col items-center justify-center text-center h-[80vh] min-h-[400px] md:min-h-[500px] mb-16 overflow-hidden'>
      {/* The Matrix Rain background effect. */}
      <MatrixRain />

      {/* The content, layered on top. No extra overlay needed. */}
      <div className='relative z-10 p-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
          Hi, I'm {config.name}.
        </h1>
        <div className='text-lg md:text-xl lg:text-2xl text-matrix-green'>
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
    </section>
  )
}

export default HeroSection
