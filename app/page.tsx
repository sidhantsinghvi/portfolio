import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Outside from "@/components/Outside";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Outside />
        <Contact />
      </main>
    </>
  );
}
