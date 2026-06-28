import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";
import {
  FaUnity, FaGitAlt, FaCode, FaGamepad,
} from "react-icons/fa";
import {
  SiSharp,
} from "react-icons/si";

import {
  TbBrush, TbBug, TbGauge, TbBuildingBridge2, TbMovie, TbAtom, TbDeviceGamepad2,
} from "react-icons/tb";

const SKILLS: { name: string; icon: ReactNode; level: number; color: "cyan" | "purple" | "pink" }[] = [
  { name: "Unity",                icon: <FaUnity />,           level: 88, color: "cyan" },
  { name: "C#",                   icon: <SiSharp />,          level: 85, color: "purple" },
  { name: "Game Development",     icon: <FaGamepad />,         level: 84, color: "cyan" },
  { name: "2D Games",             icon: <TbDeviceGamepad2 />,  level: 90, color: "pink" },
  { name: "Gameplay Programming", icon: <FaCode />,            level: 82, color: "cyan" },
  { name: "Game UI",              icon: <TbBrush />,           level: 78, color: "purple" },
  { name: "Physics",              icon: <TbAtom />,            level: 76, color: "cyan" },
  { name: "Animation",            icon: <TbMovie />,           level: 74, color: "pink" },
  { name: "Debugging",            icon: <TbBug />,             level: 82, color: "cyan" },
  { name: "Optimization",         icon: <TbGauge />,           level: 75, color: "purple" },
  { name: "Git",                  icon: <FaGitAlt />,          level: 80, color: "pink" },
  { name: "Pipeline & Build",     icon: <TbBuildingBridge2 />, level: 70, color: "cyan" },
];

function SkillCard({ s, i }: { s: typeof SKILLS[number]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-40, 40], [10, -10]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-40, 40], [-10, 10]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const colorVar = s.color === "cyan" ? "var(--neon-cyan)" : s.color === "purple" ? "var(--neon-purple)" : "var(--neon-pink)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.04, duration: 0.5 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative"
      data-cursor="hover"
    >
      <div
        className="glass-card hud-corners relative h-full overflow-hidden rounded-xl p-5 transition-shadow duration-300"
        style={{
          boxShadow: `0 0 0 1px color-mix(in oklab, ${colorVar} 30%, transparent), 0 8px 30px color-mix(in oklab, ${colorVar} 18%, transparent)`,
        }}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 50% 0%, ${colorVar}, transparent 60%)`, mixBlendMode: "screen" }}
        />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
              style={{
                color: colorVar,
                background: `color-mix(in oklab, ${colorVar} 12%, transparent)`,
                border: `1px solid color-mix(in oklab, ${colorVar} 40%, transparent)`,
                boxShadow: `0 0 18px color-mix(in oklab, ${colorVar} 40%, transparent)`,
              }}
            >
              {s.icon}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: colorVar }}>
              LV {Math.floor(s.level / 10)}
            </div>
          </div>
          <div className="mt-4 font-display text-lg font-bold uppercase">{s.name}</div>

          <div className="mt-3">
            <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>MASTERY</span>
              <span style={{ color: colorVar }}>{s.level}%</span>
            </div>
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-elev)]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 + i * 0.03 }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colorVar}, color-mix(in oklab, ${colorVar} 30%, white))`,
                  boxShadow: `0 0 10px ${colorVar}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="// 02"
          tag="ABILITIES UNLOCKED"
          title={<><span className="text-glow-purple">SKILL</span> TREE</>}
          subtitle="Hover a card. Each ability has been forged through projects, prototypes, and a lot of late-night builds."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
