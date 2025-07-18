import { config } from '@/data/config'
const Footer = () => {
  return (
    <footer className='w-full pb-12 border-t border-matrix-green-dark/20 text-center'>
      <div className='max-w-3xl mx-auto px-4'>
        {/* Built by Section */}
        <div className='text-xs text-text-secondary/60 font-mono'>
          <p> Designed & Built by {config.name}</p>
           <p>
             ASCII art generated via {" "}
            <a 
              href="https://www.asciiart.eu/image-to-ascii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix-green-dark hover:text-matrix-green transition-colors"
            >
               asciiart.eu
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
