import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useIndustryExperience } from "../../hooks/useIndustryExperience";

const TIMELINE = [
  { t: "QUEST_01", title: "Started Learning Unity", d: "Picked up the engine, C#, and the fundamentals of gameplay programming." },
  { t: "QUEST_02", title: "Unity Gameplay Development", d: "Built prototypes, mastered scripts, animator, physics, and UI workflows." },
  { t: "QUEST_03", title: "Industry Experience", d: "Shipped features in a team setting — code reviews, version control, deadlines." },
  { t: "QUEST_04", title: "Completed Launch-Ready Game", d: "Designed, coded, polished and packaged TRIGRAX FURY, a complete 2D action shooter." },
  { t: "QUEST_05", title: "Available for Freelance Work", d: "Open to Unity gigs — prototypes, gameplay, 2D, optimization, polish." },
];

export function Experience() {
  const industryExperience = useIndustryExperience();
  return (
    <section id="experience" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="// 04"
          tag="MISSION LOG"
          title={<><span className="text-glow-cyan">XP</span> TIMELINE</>}
          subtitle="A short journey so far — but every quest completed, on time."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] opacity-50" />
          </div>

          <div className="space-y-10">
            {TIMELINE.map((q, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={q.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  {/* Node */}
                  <div className="relative flex items-start justify-start md:justify-end">
                    <div className={`absolute left-2 top-2 h-4 w-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 ${i % 2 === 0 ? "" : "md:-translate-x-1/2 md:left-0 md:right-auto"}`}>
                      <div className="absolute inset-0 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow" style={{ boxShadow: "0 0 18px var(--neon-cyan)" }} />
                      <div className="absolute inset-1 rounded-full bg-[var(--bg-deep)]" />
                    </div>
                  </div>

                  <div className={`glass-card hud-corners rounded-lg p-5 ${left ? "md:text-right" : "md:text-left"}`}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-pink)]">{q.t}</div>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase text-foreground">
                      {q.t === "QUEST_03" ? `${industryExperience} Industry Experience` : q.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/75">{q.d}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
