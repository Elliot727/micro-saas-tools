import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    photo: "/placeholder.svg?height=100&width=100",
    text: "These tools have saved me so much time in my daily work. The interface is intuitive, and the results are always accurate. Highly recommended!",
    rating: 5,
    role: "Software Developer"
  },
  {
    name: "Jane Smith",
    photo: "/placeholder.svg?height=100&width=100",
    text: "I use the unit converter and time zone tools almost every day. They're simple, effective, and have become an essential part of my workflow.",
    rating: 4,
    role: "Project Manager"
  },
  {
    name: "Mike Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    text: "The internet speed test is my go-to tool for quick connectivity checks. It's fast, reliable, and doesn't require any downloads. Love it!",
    rating: 5,
    role: "IT Consultant"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals using our tools have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}