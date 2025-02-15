import Navbar from "../../components/NavBar";

export default function NestedPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />
      <section className="px-6 py-10">
        <h1 className="text-4xl font-extrabold text-center mb-6">My Education</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          I am currently pursuing a <strong>Generative AI Engineering</strong> program. In addition to formal education, I am actively engaged in self-learning and continuously enhancing my skills through various online courses and personal projects.
        </p>
      </section>
    </div>
  );
}
