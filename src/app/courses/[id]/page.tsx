/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NhHt782xmtc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Introduction to React</h1>
        <Button variant="ghost" size="icon">
          <XIcon className="w-6 h-6" />
          <span className="sr-only">Exit</span>
        </Button>
      </header>
      <div className="flex-1 grid grid-cols-[3fr_1fr] gap-6 p-6">
        <div className="bg-muted rounded-lg overflow-hidden">
          <video className="w-full aspect-video object-cover" controls src="/placeholder-video.mp4" />
        </div>
        <div className="bg-muted rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Course Description</h2>
            <p className="text-muted-foreground">
              In this course, you will learn the fundamentals of React, a popular JavaScript library for building user
              interfaces. We'll cover topics like components, props, state management, and routing, and you'll build a
              complete React application from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}