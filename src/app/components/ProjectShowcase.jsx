import { config } from '@/data/config'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectShowcase = () => {
  return (
    // The `id` here is the target for the scroll-down indicator
    <section id='projects' className='py-24'>
      <h2 className='text-3xl font-bold text-center mb-16 text-text-secondary'>
        <span className='text-matrix-green'>//</span> 01. Project_Showcase
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {config.projects.map((project, index) => (
          <div
            key={index}
            className='bg-background/50 border border-matrix-green-dark/30 p-6 rounded-lg group 
                       hover:border-matrix-green hover:-translate-y-2 transition-all duration-300'
          >
            {/* Card Header */}
            <div className='flex justify-between items-center mb-4'>
              <div className='text-2xl text-matrix-green'>
                {/* A simple folder or file icon could go here if desired */}
              </div>
              <div className='flex items-center gap-4 text-text-secondary text-xl'>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub repository'
                    className='hover:text-matrix-green transition-colors'
                  >
                    <FiGithub />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Live demo'
                    className='hover:text-matrix-green transition-colors'
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className=' cursor-default'>
              <h3 className='text-xl font-bold text-text-primary mb-2 group-hover:text-matrix-green transition-colors'>
                {project.title}
              </h3>
              <p className='text-text-secondary mb-6 text-sm leading-relaxed'>
                {project.description}
              </p>
            </div>

            {/* Card Footer (Tech Stack) */}
            <div className='flex flex-wrap gap-2'>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className='bg-matrix-green/10 text-matrix-green text-xs font-mono px-3 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase
