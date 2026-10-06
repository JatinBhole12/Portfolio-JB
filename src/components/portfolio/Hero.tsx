import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiSend } from "react-icons/fi";
import { HeroScene } from "./HeroScene";
import { NeonButton } from "./NeonButton";
import { useIndustryExperience } from "../../hooks/useIndustryExperience";

export function Hero() {
  const industryExperience = useIndustryExperience();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Grid + scanline overlay */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--bg-deep)_85%)]" />

      {/* HUD frame */}
      <div className="pointer-events-none absolute inset-4 hidden border border-[color-mix(in_oklab,var(--neon-cyan)_25%,transparent)] md:block">
        <div className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[var(--neon-cyan)]" />
        <div className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-[var(--neon-cyan)]" />
        <div className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[var(--neon-cyan)]" />
        <div className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[var(--neon-cyan)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--neon-cyan)] md:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-cyan)]" />
          PLAYER ONLINE — STATUS: AVAILABLE FOR HIRE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="font-display text-5xl font-black uppercase leading-[0.95] md:text-8xl lg:text-9xl"
        >
          <span className="text-glow-cyan">JATIN</span>
          <br />
          <span className="bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent animate-gradient">
            BHOLE
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground md:text-sm"
        >
          &lt;/&gt; Freelance · Unity · Game Developer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          Crafting immersive games and interactive experiences with{" "}
          <span className="text-[var(--neon-cyan)]">Unity</span>. Built for performance,
          designed for delight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <NeonButton onClick={() => scrollTo("projects")} icon={<FiArrowRight />}>
            Explore Portfolio
          </NeonButton>
          <NeonButton variant="purple" onClick={() => scrollTo("projects")}>
            View Projects
          </NeonButton>
          <NeonButton variant="pink" onClick={() => scrollTo("contact")} icon={<FiSend />}>
            Hire Me
          </NeonButton>
          <NeonButton
            variant="ghost"
            icon={<FiDownload />}
            as="a"
            href="/resume.pdf"
            download="Jatin-Bhole-Resume.pdf"
          >
            Download Resume
          </NeonButton>
        </motion.div>

        {/* Stats / HUD readout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {[
            { k: "ENGINE", v: "Unity" },
            { k: "LANG", v: "C#" },
            { k: "PROJECTS", v: "01 / READY" },
            { k: "XP", v: industryExperience },
          ].map((s) => (
            <div key={s.k} className="glass-card hud-corners rounded-md px-4 py-3 text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-display text-sm font-bold text-[var(--neon-cyan)] md:text-base">{s.v}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          <div className="flex flex-col items-center gap-2">
            <span>SCROLL</span>
            <div className="h-8 w-px bg-gradient-to-b from-[var(--neon-cyan)] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
