import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  TbDeviceGamepad2, TbCode, TbBug, TbGauge, TbBrush, TbBolt, TbCpu,
} from "react-icons/tb";

const SERVICES = [
  { t: "Unity Game Development", d: "End-to-end Unity development: gameplay, systems, polish, and Android builds.", icon: <TbCpu /> },
  { t: "Prototype to APK", d: "Turn a rough idea into a playable Android prototype clients can test.", icon: <TbBolt /> },
  { t: "2D Game Development", d: "Crisp 2D action, platformers, arcade games, and shooters with great feel.", icon: <TbDeviceGamepad2 /> },
  { t: "Gameplay Programming", d: "Tight controls, AI behaviours, physics, weapons, and combat systems.", icon: <TbCode /> },
  { t: "Bug Fixing", d: "Fix crashes, logic bugs, input issues, UI problems, and build errors.", icon: <TbBug /> },
  { t: "Performance Optimization", d: "Profile, pool, and batch so games stay smooth on real devices.", icon: <TbGauge /> },
  { t: "UI / HUD Development", d: "Responsive Unity HUDs, menus, pause screens, settings, and game flow.", icon: <TbBrush /> },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="// 05"
          tag="LOADOUT"
          title={<>SERVICE <span className="text-glow-purple">MODULES</span></>}
          subtitle="Pick a module — or stack them. Each one comes battle-tested."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group glass-card hud-corners relative overflow-hidden rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
              data-cursor="hover"
            >
              <div
                className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--neon-cyan) 35%, transparent), transparent 70%)" }}
              />
              <div className="flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl text-[var(--neon-cyan)]"
                  style={{
                    background: "color-mix(in oklab, var(--neon-cyan) 10%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--neon-cyan) 35%, transparent)",
                    boxShadow: "0 0 14px color-mix(in oklab, var(--neon-cyan) 40%, transparent)",
                  }}
                >
                  {s.icon}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  MOD_{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{s.d}</p>

              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--neon-cyan)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
                READY TO DEPLOY
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
