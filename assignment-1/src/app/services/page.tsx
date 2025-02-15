import Navbar from "../components/NavBar";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">My Services</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Web Development</h2>
            <p className="text-gray-600">
              I specialize in developing responsive and user-centric websites using cutting-edge technologies like 
              React, Next.js, and TypeScript. My focus is on performance, scalability, and delivering seamless user 
              experiences across devices.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">UI/UX Design</h2>
            <p className="text-gray-600">
              I am passionate about designing intuitive and visually appealing interfaces. My design philosophy 
              emphasizes simplicity, functionality, and creating meaningful interactions that enhance user engagement.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Graphic Design</h2>
            <p className="text-gray-600">
              With expertise in Figma and Adobe Photoshop, I create impactful visual assets such as logos, social 
              media graphics, and marketing materials. My designs are tailored to reinforce brand identity and 
              communication goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
