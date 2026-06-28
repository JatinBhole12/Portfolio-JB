import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { AmbientParticles } from "@/components/portfolio/AmbientParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jatin Bhole — Freelance Unity Game Developer" },
      { name: "description", content: "Award-worthy portfolio of Jatin Bhole — freelance Unity game developer crafting immersive 2D games and interactive sci-fi experiences." },
      { property: "og:title", content: "Jatin Bhole — Freelance Unity Game Developer" },
      { property: "og:description", content: "Immersive AAA-styled portfolio: Unity, C#, 2D games, gameplay programming." },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <SmoothScroll />
          <CustomCursor />
          <AmbientParticles />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
