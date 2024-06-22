/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aGRD5LzkOeV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create a Course</h1>
        <Button variant="ghost" size="icon">
          <XIcon className="w-6 h-6" />
          <span className="sr-only">Exit</span>
        </Button>
      </header>
      <div className="flex-1 grid grid-cols-1 gap-6 p-6">
        <div className="bg-muted rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Course Details</h2>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter course title" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter course description" rows={3} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Course Content</h2>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="video">Video Link</Label>
                <Textarea id="video" placeholder="Enter YouTube video link" rows={3} />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="text">Text</Label>
              <Textarea id="text" placeholder="Enter course text" rows={3} />
            </div>
            <div className="flex justify-end">
              <Button>Save Course</Button>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  )
}

function XIcon(props) {
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