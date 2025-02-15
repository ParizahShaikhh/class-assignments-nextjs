import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
      </main>
     
      <Footer />
    </div>
  );
}