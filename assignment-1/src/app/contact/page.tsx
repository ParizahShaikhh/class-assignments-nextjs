import Navbar from "../components/NavBar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <section className="px-6 py-10 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-700 text-lg mb-6">
          Whether you&apos;re interested in collaborating on a project or just want to connect, I&apos;d love to hear from you!
        </p>
        <p className="text-center">
          <a 
            href="mailto:parivian6@gmail.com" 
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            parivian6@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
