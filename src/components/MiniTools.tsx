import ToolCard from './ToolCard'
import { Zap, Ruler, Clock, Activity, Globe, Palette } from 'lucide-react'

export default function MiniTools() {
  const tools = [
    {
      title: "Internet Speed Test",
      description: "Check your download and upload speeds quickly.",
      icon: Zap,
      link: "/speed-test",
    },
    {
      title: "Unit Converter",
      description: "Convert between various units of measurement.",
      icon: Ruler,
      link: "/unit-converter",
    },
    {
      title: "Download Time Calculator",
      description: "Estimate download times based on file size and speed.",
      icon: Clock,
      link: "/download-calculator",
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index easily.",
      icon: Activity,
      link: "/bmi-calculator",
    },
    {
      title: "Time Zone Converter",
      description: "Convert times between different time zones.",
      icon: Globe,
      link: "/timezone-converter",
    },
    {
      title: "Color Converter",
      description: "Convert between different color formats.",
      icon: Palette,
      link: "/color-converter",
    },
  ]

  return (
    <section id="tools" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Mini Tools</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our collection of powerful, easy-to-use tools designed to simplify your daily tasks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  )
}