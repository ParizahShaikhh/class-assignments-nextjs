import Navbar from "../components/NavBar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />
      <section className="px-6 py-10">
        <h1 className="text-4xl font-extrabold text-center mb-6">About Me</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
          Hi, I’m <strong>Parizah Shaikh!</strong> I have a strong interest in web development and have been working on various projects using technologies like HTML, CSS, JavaScript, and React. I’m continuously learning and experimenting with new technologies, especially Next.js and TypeScript. Outside of coding, I enjoy graphic designing and content creation.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
          <strong>Key Skills:</strong> React, JavaScript, TypeScript, Next.js, HTML, CSS, Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Want to know more about my education?{" "}
          <Link
            href="/about/education"
            className="underline text-blue-600 hover:text-blue-800 transition-colors"
          >
            Click here to view my education background.
          </Link>
        </p>
      </section>
    </div>
  );
}
