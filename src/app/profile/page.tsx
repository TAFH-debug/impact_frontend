'use client';


import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { useUser } from '../../context/AuthContext'
export default function Component() {
const { user } = useUser();
  return (

    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Card className="bg-white text-white">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-[1px] border-gray-300">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="text-xl font-bold text-black">{user.name} {user.surname}</div>
                  <div className="text-sm text-black">{user.email}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-black">
                  Name
                </Label>
                <Input id="name" defaultValue={user.name} className="bg-gray-100 text-black" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="surname" className="text-black">
                  Surname
                </Label>
                <Input id="surname" defaultValue={user.surname} className="bg-gray-100 text-black" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="surname" className="text-black">
                  Calendly Link
                </Label>
                <Input id="calendly" defaultValue={user.calendly_link} className="bg-gray-100 text-black" />
              </div>
            
              <div className="grid gap-2">
                <Label htmlFor="photo" className="text-white/80">
                  Photo
                </Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-[1px] border-gray-300">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="bg-gray-100 text-black hover:bg-gray-300 ">
                    Change Photo
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-rose-500 text-white hover:bg-red-300 hover:text-white">Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
          <Card className="bg-white text-black">
            <CardHeader>
              <CardTitle className="text-black">Enrolled Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                <Card className="bg-white text-black">
                  <CardContent className="space-y-2 mt-5">
                    <div className="text-lg font-bold">Introduction to React</div>
                    <div className="text-sm text-gray-500">
                      Learn the fundamentals of React.js and build your first web application.
                    </div>
                    
                  </CardContent>
                </Card>
               

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}