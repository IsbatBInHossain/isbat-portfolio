import HeroSection from './components/HeroSection'
import ProjectShowcase from './components/ProjectShowcase'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <HeroSection />
      <div className='max-w-4xl w-full p-4 md:p-8 lg:p-12'>
        <ProjectShowcase />
        <Footer />
      </div>
    </main>
  )
}
