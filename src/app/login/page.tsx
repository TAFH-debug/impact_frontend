/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C2gtyP9bHR7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#1a1b1e] dark:bg-[#1a1b1e]">
        <div className="w-full max-w-md rounded-lg bg-[#2c2d31] p-8 shadow-2xl dark:bg-[#2c2d31]">
          <h1 className="mb-6 text-center text-2xl font-bold text-white">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border-[1px] border-[#3f4046] bg-[#2c2d31] px-4 py-3 text-white focus:border-[#5865f2] focus:ring-[#5865f2]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border-[1px] border-[#3f4046] bg-[#2c2d31] px-4 py-3 text-white focus:border-[#5865f2] focus:ring-[#5865f2]"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#5865f2] px-4 py-3 text-center text-white hover:bg-[#4752c4] focus:ring-4 focus:ring-[#5865f2]/50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }