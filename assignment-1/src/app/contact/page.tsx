import Navbar from "../components/NavBar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center grid ">Get in Touch</h1>
      <p className="text-center grid  ">Feel free to reach out if you want to collaborate on a project or just want to connect!<a href='mailto:parivian6@gmail.com' className='text-blue-500 underline'>parivian6@gmail.com</a></p>
    </div>
  )
};