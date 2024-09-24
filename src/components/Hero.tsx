import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, BarChart } from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Boost Your Productivity with Micro Tools
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Access a suite of powerful, easy-to-use tools designed to simplify your daily tasks and supercharge your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="#tools" className="group">
                  Explore Tools
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#testimonials">
                  See Testimonials
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl"></div>
              <div className="relative grid grid-cols-2 gap-6 p-8">
                {[
                  { icon: Zap, title: "Speed Test", description: "Check your internet speed instantly" },
                  { icon: Clock, title: "Time Converter", description: "Convert time zones effortlessly" },
                  { icon: BarChart, title: "BMI Calculator", description: "Calculate your Body Mass Index" },
                  { icon: ArrowRight, title: "And More", description: "Explore our full suite of tools" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl">
                    <item.icon className="h-12 w-12 mb-4 text-blue-300" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-blue-100">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  )
}