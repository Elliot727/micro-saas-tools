import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LucideIcon } from 'lucide-react'

interface ToolCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
}

export default function ToolCard({ title, description, icon: Icon, link }: ToolCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Button asChild variant="outline">
          <Link href={link}>
            Use Tool
          </Link>
        </Button>
      </div>
    </div>
  )
}