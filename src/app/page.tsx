import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MiniTools from '../components/MiniTools'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     
        <title>Micro SaaS Tools - Boost Your Productivity</title>
        <meta name="description" content="Access a suite of powerful, easy-to-use tools to simplify your daily tasks." />
        <link rel="icon" href="/favicon.ico" />


      <Header />

      <main className="flex-grow">
        <Hero />
        <MiniTools />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}