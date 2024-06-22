/**
 * v0 by Vercel.
 * @see https://v0.dev/t/axfDqEl9Sy2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a] text-white">
      <header className="bg-[#2b2b2b] py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search users..."
            className="bg-[#2b2b2b] border-[#4caf50] focus:border-[#43a047] focus:ring-[#43a047]"
          />
          <Button className="bg-[#4caf50] hover:bg-[#43a047]">
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="bg-[#2b2b2b] rounded-lg shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Mentor</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>john@example.com</TableCell>
                <TableCell>
                  <Badge className="bg-[#4caf50] text-white px-2 py-1 rounded-full">Mentor</Badge>
                </TableCell>
                <TableCell>
                  <Button className="bg-[#f44336] hover:bg-[#e53935]">
                    Remove Mentor
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>jane@example.com</TableCell>
                <TableCell>
                  <Badge className="bg-[#4caf50] text-white px-2 py-1 rounded-full">Mentor</Badge>
                </TableCell>
                <TableCell>
                  <Button className="bg-[#f44336] hover:bg-[#e53935]">
                    Remove Mentor
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>bob@example.com</TableCell>
                <TableCell>
                  <Badge className="bg-transparent border border-[#4caf50] text-[#4caf50] px-2 py-1 rounded-full">
                    Not a Mentor
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button className="bg-[#4caf50] hover:bg-[#43a047]">Add Mentor</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}