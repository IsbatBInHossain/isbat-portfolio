import HeroSection from './components/HeroSection'
import ProjectShowcase from './components/ProjectShowcase'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12'>
      <div className='max-w-4xl w-full'>
        <HeroSection />
        <ProjectShowcase />
        <Footer />
      </div>
    </main>
  )
}
