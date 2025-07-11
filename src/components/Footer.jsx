import { config } from '@/data/config'
const Footer = () => {
  return (
    <footer className='w-full mt-24 py-16 border-t border-matrix-green-dark/20 text-center'>
      <div className='max-w-3xl mx-auto px-4'>
        {/* Built by Section */}
        <div className='text-xs text-text-secondary/60 font-mono'>
          <p> Designed & Built by {config.name}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
