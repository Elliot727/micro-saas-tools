import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Micro SaaS Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">Empowering your productivity with simple, effective tools.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Tools', 'Testimonials', 'About Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Stay Updated</h4>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} Micro SaaS Tools. All rights reserved.
            </p>
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
              {[Facebook, Twitter, Instagram, GitHub].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <span className="sr-only">Social Media</span>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}