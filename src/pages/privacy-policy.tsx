import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../app/globals.css';
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Privacy Policy - Micro SaaS Tools</title>
        <meta name="description" content="Privacy Policy for Micro SaaS Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          This is a placeholder for the privacy policy. In a real application, you would include detailed information about how you collect, use, and protect user data.
        </p>
      
      </main>

      <Footer />
    </div>
  )
}