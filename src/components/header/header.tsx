import Link from 'next/link'
import React, { SVGProps } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="bg-black text-primary-foreground py-4 px-6 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <BookOpenIcon className="h-6 w-6" />
                <span className="text-xl font-bold">Impact Admission</span>
            </Link>
            <nav className="flex items-center gap-4">
                <Link href="#" className="hover:underline" prefetch={false}>
                    Courses
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Mentorship
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Community
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Resources
                </Link>
                <Button variant="secondary">Sign Up</Button>
                <Button>Log In</Button>
            </nav>
        </header>
    )
}


function BookOpenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}

export default Header