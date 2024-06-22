/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BLC63Cxt9n3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a] dark:from-[#0f172a] dark:to-[#1e293b]">
      <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg dark:bg-gray-900/10">
        <h1 className="mb-6 text-2xl font-bold text-center text-white">Register</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="bg-white/10 backdrop-blur-md text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <Label htmlFor="surname" className="text-white">
                Surname
              </Label>
              <Input
                id="surname"
                type="text"
                placeholder="Enter your surname"
                className="bg-white/10 backdrop-blur-md text-white placeholder:text-white/50"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 backdrop-blur-md text-white placeholder:text-white/50"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-white/10 backdrop-blur-md text-white placeholder:text-white/50"
            />
          </div>
          <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white">Register</Button>
        </form>
      </div>
    </div>
  )
}