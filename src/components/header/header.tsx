import Link from 'next/link'
import React, { SVGProps } from 'react'
import { Button } from 'react-bootstrap'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <BookOpenIcon className="h-6 w-6" />
                <span className="sr-only">Impact Admission</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Courses
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Mentors
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    AI Assistant
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
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