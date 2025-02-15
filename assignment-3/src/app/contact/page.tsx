import Navbar from "../components/Header/Header";

import Footer from "../components/Footer/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 text-black">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-center max-w-md">Feel free to reach out if you want to collaborate on a project or just want to connect!<a href='mailto:parivian6@gmail.com' className='text-[#295F98] underline'>parivian6@gmail.com</a></p>
    </div>
    <Footer />
    </>
  )
};