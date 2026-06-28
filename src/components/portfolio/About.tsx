import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const STATS = [
  { k: "Player Name", v: "Jatin Bhole", color: "cyan" },
  { k: "Role", v: "Unity Game Dev", color: "purple" },
  { k: "Level", v: "Lv. 06 — Rookie+", color: "cyan" },
  { k: "Experience", v: "6 mo · 3 mo industry", color: "pink" },
  { k: "Status", v: "● Available", color: "cyan" },
  { k: "Mission", v: "Ship great games", color: "purple" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="// 01"
          tag="PLAYER PROFILE"
          title={<><span className="text-glow-cyan">PLAYER</span> CARD</>}
          subtitle="Loaded. Calibrated. Ready to deploy on your next Unity project."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel hud-corners scanline relative overflow-hidden rounded-xl p-6 md:p-8"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    ID — JB-001
                  </div>
                  <h3 className="mt-2 font-display text-3xl font-black uppercase text-foreground md:text-4xl">
                    Jatin <span className="text-[var(--neon-cyan)]">Bhole</span>
                  </h3>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--neon-purple)]">
                    Class: Unity Game Developer
                  </div>
                </div>
                <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-[var(--neon-cyan)]/40 bg-[var(--bg-elev)] font-display text-3xl font-black text-[var(--neon-cyan)] text-glow-cyan md:flex">
                  JB
                </div>
              </div>

              <p className="mt-6 text-foreground/80">
                I'm a freelance Unity developer building polished, performant gameplay
                experiences. Hands-on with C#, physics, animation, and shipping —
                I just finished a launch-ready 2D shooter and I'm ready to bring
                that same focus to your project.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  { k: "HP", v: "Focus" },
                  { k: "MP", v: "Creativity" },
                  { k: "ATK", v: "Code" },
                  { k: "DEF", v: "Testing" },
                  { k: "SPD", v: "Iteration" },
                  { k: "LUK", v: "Polish" },
                ].map((s) => (
                  <div key={s.k} className="rounded-md border border-border bg-[color-mix(in_oklab,var(--bg-elev)_50%,transparent)] px-3 py-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--neon-cyan)]">{s.k}</div>
                    <div className="font-display text-sm font-bold">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* HUD stats grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className={`glass-card relative overflow-hidden rounded-lg p-4 ${
                  s.color === "cyan" ? "neon-border-cyan" : s.color === "purple" ? "neon-border-purple" : "neon-border-pink"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
