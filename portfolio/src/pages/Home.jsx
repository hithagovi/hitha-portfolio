import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AmbientDoodles from "../components/AmbientDoodles";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#F5EEDF] font-['Inter'] text-[#1A1A1A]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1300px_650px_at_10%_10%,rgba(201,162,39,0.16),transparent_58%),radial-gradient(1000px_620px_at_86%_44%,rgba(201,162,39,0.13),transparent_64%),radial-gradient(850px_520px_at_52%_86%,rgba(201,162,39,0.08),transparent_68%)]" />
      <Navbar />
      <AmbientDoodles />
      <div className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-[1.5fr_0.9fr] lg:gap-10">
          <Skills inSplit />
          <Contact inSplit />
        </div>
        <Footer />
      </div>
    </main>
  );
}
