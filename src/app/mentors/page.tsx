/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AHL3kwvzA12
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-[#1a1a1a] text-white py-16 px-6 md:px-12 lg:px-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Experienced Mentors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center py-8 bg-[#3a3a3a]">
            <Avatar className="w-24 h-24 border-4 border-[#4a4a4a]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">John Doe</h3>
            <p className="text-base text-[#8a8a8a] mb-6">
              Senior Software Engineer with 10+ years of experience. Specializes in full-stack development, cloud
              architecture, and agile methodologies.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#4a4a4a] rounded-md text-base font-medium hover:bg-[#5a5a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a6a6a]"
              prefetch={false}
            >
              Book a Mentor Session
            </Link>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center py-8 bg-[#3a3a3a]">
            <Avatar className="w-24 h-24 border-4 border-[#4a4a4a]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">Jane Doe</h3>
            <p className="text-base text-[#8a8a8a] mb-6">
              Product Manager with 5+ years of experience. Skilled in user research, product strategy, and
              cross-functional collaboration.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#4a4a4a] rounded-md text-base font-medium hover:bg-[#5a5a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a6a6a]"
              prefetch={false}
            >
              Book a Mentor Session
            </Link>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center py-8 bg-[#3a3a3a]">
            <Avatar className="w-24 h-24 border-4 border-[#4a4a4a]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">Bob Smith</h3>
            <p className="text-base text-[#8a8a8a] mb-6">
              UX Designer with 7+ years of experience. Specializes in user-centered design, prototyping, and design
              systems.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#4a4a4a] rounded-md text-base font-medium hover:bg-[#5a5a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a6a6a]"
              prefetch={false}
            >
              Book a Mentor Session
            </Link>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center py-8 bg-[#3a3a3a]">
            <Avatar className="w-24 h-24 border-4 border-[#4a4a4a]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">Alice Johnson</h3>
            <p className="text-base text-[#8a8a8a] mb-6">
              Frontend Developer with 3+ years of experience. Skilled in React, TypeScript, and modern web development
              practices.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#4a4a4a] rounded-md text-base font-medium hover:bg-[#5a5a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a6a6a]"
              prefetch={false}
            >
              Book a Mentor Session
            </Link>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center py-8 bg-[#3a3a3a]">
            <Avatar className="w-24 h-24 border-4 border-[#4a4a4a]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">Sarah Lee</h3>
            <p className="text-base text-[#8a8a8a] mb-6">
              Data Scientist with 6+ years of experience. Specializes in machine learning, data visualization, and
              predictive analytics.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#4a4a4a] rounded-md text-base font-medium hover:bg-[#5a5a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a6a6a]"
              prefetch={false}
            >
              Book a Mentor Session
            </Link>
          </div>
        </div>
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center py-8 bg-[#3a3a3a]">
            <Avatar className="w-24 h-24 border-4 border-[#4a4a4a]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">Michael Chen</h3>
            <p className="text-base text-[#8a8a8a] mb-6">
              DevOps Engineer with 8+ years of experience. Skilled in cloud infrastructure, CI/CD, and automation.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#4a4a4a] rounded-md text-base font-medium hover:bg-[#5a5a5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a6a6a]"
              prefetch={false}
            >
              Book a Mentor Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}