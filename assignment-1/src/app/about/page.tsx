import Navbar from "../components/NavBar";

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Navbar />
      <h1 className="text-center items-center font-extrabold justify-center flex">About Me</h1>
      <p className="text-center  flex justify-center items-center">Hi, I am Parizah Shaikh! I have a strong interest in web development and have been working on various projects using technologies like HTML, CSS, JavaScript, and React. I am always learning and experimenting with new technologies, especially with Next.js and TypeScript. Outside of coding, I enjoy graphic designing and content creation.</p>
      <p className="text-center  flex justify-center items-center">Key Skills: React, JavaScript, TypeScript, Next.js, HTML, CSS, TailwindCSS.
      </p>
      <p className="text-center  flex justify-center items-center">
      Want to know more about my education?{' '}<br />
        <Link href="/about/education" className="underline text-blue-500 text-center flex justify-center items-center">Click here to view my education background.
        </Link>
      </p>
    </div>
  )
};