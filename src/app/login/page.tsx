'use client'

import { useUser } from "@/context/AuthContext"
import { FormEvent } from "react";


export default function Component() {
  const { loginUser } = useUser();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(e.currentTarget.email.value, e.currentTarget.password.value)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a] dark:from-[#0f172a] dark:to-[#1e293b]">
      <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg dark:bg-gray-900/10">
        <h1 className="mb-6 text-2xl font-bold text-center text-white">Login</h1>
        <form className="space-y-4" onSubmit={(e) => { handleSubmit(e) }}>
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
    </div >
  )
}