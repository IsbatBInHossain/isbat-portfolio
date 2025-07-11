import { config } from '@/data/config'
import GlitchCard from './GlitchCard'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectShowcase = () => {
  return (
    <section id='projects' className='py-24'>
      <h2 className='text-3xl font-bold text-center mb-16 text-text-secondary'>
        <span className='text-matrix-green'>//</span> 01. Project_Showcase
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {config.projects.map((project, index) => (
          <GlitchCard key={index}>
            {/* 
              This is the "children" prop.
              It's the actual content that will be revealed after decryption.
            */}
            <div className='w-full h-full bg-background/80 p-6 flex flex-col justify-between'>
              <div>
                <div className='flex justify-end items-center mb-4'>
                  <div className='flex items-center gap-4 text-text-secondary text-xl'>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
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
                        className='hover:text-matrix-green transition-colors'
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className='text-xl font-bold text-text-primary mb-2 group-hover:text-matrix-green transition-colors'>
                  {project.title}
                </h3>
                <p className='text-text-secondary text-sm leading-relaxed'>
                  {project.description}
                </p>
              </div>
              <div className='flex flex-wrap gap-2 pt-4'>
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
          </GlitchCard>
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase
