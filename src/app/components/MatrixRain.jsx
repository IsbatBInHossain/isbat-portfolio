'use client'

import { useEffect, useRef } from 'react'

const MatrixRain = () => {
  const canvasRef = useRef(null)
  const animationFrameIdRef = useRef(null) // Use a ref to hold the animation frame ID

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    const characters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789'
    const fontSize = 16
    let columns = 0
    let rainDrops = []

    // This function sets up and resets the canvas
    const initialize = () => {
      // Set canvas dimensions to match the size of the window.
      // The parent container in HeroSection will clip it to the correct 80vh size.
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      columns = Math.floor(canvas.width / fontSize)
      rainDrops = Array(columns).fill(1)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 2, 8, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00FF41' // Matrix green
      ctx.font = `${fontSize}px Fira Code`

      for (let i = 0; i < rainDrops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
        const x = i * fontSize
        const y = rainDrops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0 // Reset drop to the top
        }
        rainDrops[i]++
      }
    }

    const animate = () => {
      draw()
      animationFrameIdRef.current = window.requestAnimationFrame(animate)
    }

    // Set it up once initially
    initialize()

    // And start the animation
    animate()

    // Add a resize listener to re-initialize on window size change
    window.addEventListener('resize', initialize)

    // CRUCIAL: Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('resize', initialize)
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, []) // Empty dependency array ensures this effect runs only once

  // The z-index is lowered to -1 to ensure it is BEHIND all other content.
  return (
    <canvas
      ref={canvasRef}
      className='absolute top-0 left-0 w-full h-full z-[-1]'
    />
  )
}

export default MatrixRain
