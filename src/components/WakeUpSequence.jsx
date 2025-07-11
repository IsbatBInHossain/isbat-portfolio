'use client'

import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const WakeUpSequence = ({ onComplete }) => {
  // We now have more steps in our sequence
  const [step, setStep] = useState(0)

  // Animation seqences
  const sequences = [
    ['> Wake up, Neo...', 1000, () => setStep(1)],
    ['> The Matrix has you...', 1500, () => setStep(2)],
    ['> Follow the white rabbit.', 1500, () => setStep(3)],
    ['> Knock, knock, Neo.', 1500, () => onComplete()], // Final step calls onComplete
  ]

  return (
    <div className='font-mono text-lg'>
      <TypeAnimation
        key={step}
        sequence={sequences[step]}
        wrapper='span'
        cursor={false}
        speed={40}
      />
    </div>
  )
}

export default WakeUpSequence
