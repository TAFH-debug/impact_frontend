"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function CourseDetail() {
  const router = useParams();
  const { id } = router;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (id) {
        try {
          const response = await fetch(`http://157.230.239.9:3000/courses/${id}`);
          const data = await response.json();
          setCourse(data[0]);
        } catch (error) {
          console.error("Error fetching course:", error);
        }
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{course.name}</h1>
        <Link href="/">
          <Button variant="ghost" size="icon">
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Exit</span>
          </Button>
        </Link>
      </header>
      <div className="flex-1 grid grid-cols-[3fr_1fr] gap-6 p-6">
        <div className="bg-muted rounded-lg overflow-hidden">
          <video className="w-full aspect-video object-cover" controls src={course.video || "/placeholder-video.mp4"} />
        </div>
        <div className="bg-muted rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Course Description</h2>
            <p className="text-muted-foreground">{course.descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
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
  );
}
