'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { config } from '@/data/config'

const AVATAR_FONT_SIZE = '8px'
const bootTime = new Date()

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('bio')
  const [uptime, setUptime] = useState('')

  // Uptime Calculator Effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = now - bootTime // Difference in milliseconds

      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((diff % (1000 * 60)) / 1000)

      setUptime(`${d}d ${h}h ${m}m ${s}s`)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const tabs = ['bio', 'info', 'stack']

  return (
    <section id='about' className='py-24'>
      <h2 className='text-3xl font-bold text-center mb-16'>
        {config.about.title}
      </h2>

      <div className='flex flex-col md:flex-row gap-16 md:gap-12 items-start'>
        {/* Left Column: ASCII Avatar */}
        <motion.div
          className='w-full md:w-1/2 relative overflow-x-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <pre
            className='text-matrix-green-dark leading-tight font-mono'
            style={{ fontSize: AVATAR_FONT_SIZE }}
          >
            {config.about.avatar}
          </pre>
        </motion.div>

        {/* Right Column: Interactive Dossier */}
        <motion.div
          className='w-full md:w-1/2 border border-matrix-green-dark/30 p-6 bg-background rounded-lg'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Tab Headers */}
          <div className='flex items-center gap-4 mb-6 border-b border-matrix-green-dark/20 flex-wrap'>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-sm px-1 pb-2 transition-colors duration-200
                  ${
                    activeTab === tab
                      ? 'text-matrix-green border-b-2 border-matrix-green'
                      : 'text-text-secondary hover:text-matrix-green'
                  }`}
              >
                [ {tab.toUpperCase()} ]
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='min-h-[250px] text-sm'>
            {activeTab === 'info' && (
              <div className='space-y-3 font-mono'>
                {Object.entries(config.about.info).map(([key, value]) => (
                  <p key={key}>
                    <span className='text-text-secondary'>{key}:</span>
                    <span className='ml-4 text-text-primary'>{value}</span>
                  </p>
                ))}
                {/* Display the dynamic uptime */}
                <p>
                  <span className='text-text-secondary'>UPTIME:</span>
                  <span className='ml-4 text-text-primary'>{uptime}</span>
                </p>
              </div>
            )}
            {activeTab === 'stack' && (
              <div className='space-y-4 font-mono'>
                {Object.entries(config.about.stack).map(([category, items]) => (
                  <div key={category}>
                    <p className='text-text-secondary mb-2'>{category}:</p>
                    <div className='flex flex-wrap gap-2'>
                      {items.map(item => (
                        <span
                          key={item}
                          className='bg-matrix-green/10 text-matrix-green text-xs px-3 py-1 rounded-full'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'bio' && (
              <p className='text-text-secondary leading-relaxed'>
                {config.about.bio}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
