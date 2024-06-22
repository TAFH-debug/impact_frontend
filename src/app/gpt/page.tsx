/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lRwIyByqgpJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#1a1a1a] text-white">
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 bg-[#3b3b3b] border-[#4b4b4b]">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-[#2b2b2b] px-4 py-3 rounded-lg max-w-[70%] relative">
            <p>Hey there! How's it going?</p>
            <div className="absolute top-full left-4 -translate-y-1/2 text-xs text-[#8b8b8b]">10:30 AM</div>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-[#2b2b2b] px-4 py-3 rounded-lg max-w-[70%] relative">
            <p>Doing great, thanks for asking!</p>
            <div className="absolute top-full right-4 -translate-y-1/2 text-xs text-[#8b8b8b]">10:31 AM</div>
          </div>
          <Avatar className="w-10 h-10 bg-[#3b3b3b] border-[#4b4b4b]">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 bg-[#3b3b3b] border-[#4b4b4b]">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-[#2b2b2b] px-4 py-3 rounded-lg max-w-[70%] relative">
            <p>That's great to hear! I'm glad you're doing well.</p>
            <div className="absolute top-full left-4 -translate-y-1/2 text-xs text-[#8b8b8b]">10:32 AM</div>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-[#2b2b2b] px-4 py-3 rounded-lg max-w-[70%] relative">
            <p>Yeah, it's been a good day so far. How about you?</p>
            <div className="absolute top-full right-4 -translate-y-1/2 text-xs text-[#8b8b8b]">10:33 AM</div>
          </div>
          <Avatar className="w-10 h-10 bg-[#3b3b3b] border-[#4b4b4b]">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="bg-[#2b2b2b] px-6 py-4 flex items-center gap-4">
        <Textarea
          placeholder="Type your message..."
          className="bg-[#3b3b3b] border-[#4b4b4b] rounded-lg flex-1 resize-none"
        />
        <Button variant="ghost" size="icon" className="hover:bg-[#3b3b3b]">
          <SendIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}