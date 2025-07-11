import { config } from '@/data/config'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ContactSection = () => {
  const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    email: <FaEnvelope />,
  }
  return (
    <div id='contact' className='mb-20'>
      <h2 className='text-3xl font-bold text-center mb-8 text-text-secondary'>
        <span className='text-matrix-green'>//</span> 03. Contact
      </h2>
      <div className='flex justify-center items-center gap-8 text-4xl'>
        {/* Loop through the links in the config file and render them */}
        {Object.entries(config.contact.links).map(([key, value]) => (
          <a
            key={key}
            href={value}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={key}
            className='text-text-secondary hover:text-matrix-green hover:-translate-y-1 transition-all duration-200'
          >
            {socialIcons[key]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ContactSection
