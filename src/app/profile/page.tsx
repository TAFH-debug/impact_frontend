/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gn81IHapDJy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Card className="bg-black text-white">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="text-xl font-bold">Jared Palmer</div>
                  <div className="text-sm text-white/80">jared@example.com</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white/80">
                  Name
                </Label>
                <Input id="name" defaultValue="Jared" className="bg-black text-white" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="surname" className="text-white/80">
                  Surname
                </Label>
                <Input id="surname" defaultValue="Palmer" className="bg-black text-white" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white/80">
                  Email
                </Label>
                <Input id="email" type="email" defaultValue="jared@example.com" className="bg-black text-white" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="photo" className="text-white/80">
                  Photo
                </Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="bg-black text-white hover:bg-white/20">
                    Change Photo
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-white text-black hover:bg-white/90">Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Card className="bg-black text-white">
            <CardHeader>
              <CardTitle className="text-white/80">Enrolled Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-black text-white">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      alt="Course Image"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-lg font-bold">Introduction to React</div>
                    <div className="text-sm text-white/80">
                      Learn the fundamentals of React.js and build your first web application.
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 text-white/80" />
                      <div className="text-sm text-white/80">Started on June 1, 2023</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-white/80" />
                      <div className="text-sm text-white/80">12 hours</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-black text-white">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      alt="Course Image"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-lg font-bold">Advanced JavaScript</div>
                    <div className="text-sm text-white/80">
                      Dive deep into the advanced features and concepts of JavaScript.
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 text-white/80" />
                      <div className="text-sm text-white/80">Started on April 15, 2023</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-white/80" />
                      <div className="text-sm text-white/80">18 hours</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-black text-white">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      alt="Course Image"
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-lg font-bold">Mastering CSS</div>
                    <div className="text-sm text-white/80">Become a CSS expert and create stunning web designs.</div>
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 text-white/80" />
                      <div className="text-sm text-white/80">Started on September 1, 2022</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-white/80" />
                      <div className="text-sm text-white/80">24 hours</div>
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