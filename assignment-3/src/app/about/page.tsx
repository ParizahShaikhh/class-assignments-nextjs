import Navbar from "../components/Header/Header";

import Footer from "../components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2  text-black">
      <h1 className="text-4xl font-bold mb-4 ">About Me</h1>
      <p className="text-lg text-center max-w-md">Hi, I am Parizah Shaikh! I have a strong interest in web development and have been working on various projects using technologies like HTML, CSS, JavaScript, and React. I am always learning and experimenting with new technologies, especially with Next.js and TypeScript. Outside of coding, I enjoy graphic designing and content creation.</p>
      <p className="text-lg text-center max-w-md">Key Skills: React, JavaScript, TypeScript, Next.js, HTML, CSS, TailwindCSS.
      </p>
    </div>
    <Footer />
    </>
  )
};