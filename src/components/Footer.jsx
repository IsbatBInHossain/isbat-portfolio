import { config } from '@/data/config'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  // Map keys from our config file to the imported icons
  const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    email: <FaEnvelope />,
  }

  return (
    <footer className='w-full mt-24 py-16 border-t border-matrix-green-dark/20 text-center'>
      <div className='max-w-3xl mx-auto px-4'>
        {/* About Section */}
        <div id='about' className='mb-20'>
          <h2 className='text-3xl font-bold text-center mb-8 text-text-secondary'>
            <span className='text-matrix-green'>//</span> 02. About
          </h2>
          <p className='text-text-secondary max-w-2xl mx-auto leading-relaxed'>
            {config.about.bio}
          </p>
        </div>

        {/* Contact Section */}
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

        {/* Built by Section */}
        <div className='text-xs text-text-secondary/60 font-mono'>
          <p> Designed & Built by {config.name}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
