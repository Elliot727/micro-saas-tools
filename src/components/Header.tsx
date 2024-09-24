"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Micro SaaS Tools
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="#tools" className="text-gray-600 hover:text-gray-800">
            Tools
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-800">
            Testimonials
          </Link>
        </nav>
        <Button asChild>
          <Link href="#tools">
            Start Now
          </Link>
        </Button>
        <button className="md:hidden text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </header>
  )
}