import Navbar from "./components/NavBar";
import styles from "./styles/Home.module.css";

export default function HomePage() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <section className="px-6 py-10">
        <h1 className={`${styles.heading} text-4xl font-bold text-center mb-6`}>
          Welcome to My Portfolio!
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Hi, I&apos;m <strong>Parizah Shaikh</strong>, a passionate frontend developer dedicated to creating responsive, 
          user-friendly web applications. Feel free to explore my projects, skills, and experiences, and don&apos;t hesitate to 
          get in touch for collaboration!
        </p>
      </section>
    </div>
  );
}
