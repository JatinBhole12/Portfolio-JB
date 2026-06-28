import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { NeonButton } from "./NeonButton";
import { FiSmartphone, FiX } from "react-icons/fi";

const FEATURES = [
  "Fluid 2D shooting mechanics with weapon variety",
  "Tight collision & physics-driven enemy AI",
  "Particle FX, screen shake, hit feedback",
  "Custom HUD with health, ammo & combo meters",
  "Wave-based progression & boss encounter",
  "Optimized for low/mid-range hardware",
];

const TECH = ["Unity", "C#", "URP", "Animator", "TextMeshPro", "Cinemachine", "Git"];
const DEMO_APK_HREF = "https://drive.google.com/file/d/1HuZ9I13RBFY3dEMFC2uxozhKanW12as6/view?usp=sharing";

const METRICS = [
  { k: "TARGET", v: "60 FPS" },
  { k: "BUILD", v: "Android APK" },
  { k: "SYSTEMS", v: "Waves + Boss" },
  { k: "OPTIMIZED", v: "Object Pooling" },
];

const SCREENSHOTS = [
  { label: "FRAME_01", src: "/game-screenshots/screenshot-1.jpeg", color: "var(--neon-cyan)" },
  { label: "FRAME_02", src: "/game-screenshots/screenshot-2.jpeg", color: "var(--neon-pink)" },
  { label: "FRAME_03", src: "/game-screenshots/screenshot-3.jpeg", color: "var(--neon-purple)" },
  { label: "FRAME_04", src: "/game-screenshots/screenshot-4.jpeg", color: "var(--neon-cyan)" },
  { label: "FRAME_05", src: "/game-screenshots/screenshot-5.jpeg", color: "var(--neon-pink)" },
  { label: "FRAME_06", src: "/game-screenshots/screenshot-6.jpeg", color: "var(--neon-purple)" },
];

const PROCESS = [
  { t: "Concept", d: "Defined the loop: dodge, aim, blast, upgrade." },
  { t: "Prototype", d: "Greybox levels & core shooting in 1 week." },
  { t: "Iterate", d: "Tuned weapons, enemy patterns & feedback." },
  { t: "Polish", d: "VFX, audio, UI flow, performance pass." },
  { t: "Launch", d: "Build pipeline, signing, store-ready package." },
];

export function Projects() {
  const [activeScreenshot, setActiveScreenshot] = useState<(typeof SCREENSHOTS)[number] | null>(null);

  useEffect(() => {
    if (!activeScreenshot) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveScreenshot(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeScreenshot]);

  return (
    <section id="projects" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="// 03"
          tag="FEATURED MISSIONS"
          title={<><span className="text-glow-pink">FEATURED</span> PROJECT</>}
          subtitle="Launch-ready. Engineered with care, ready to ship."
        />

        {/* Steam-style hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel hud-corners relative overflow-hidden rounded-2xl"
        >
          {/* Banner */}
          <div className="relative h-72 w-full overflow-hidden md:h-96">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,color-mix(in_oklab,var(--neon-pink)_45%,transparent),transparent_55%),radial-gradient(ellipse_at_70%_60%,color-mix(in_oklab,var(--neon-cyan)_45%,transparent),transparent_55%),linear-gradient(135deg,#0b1130,#1a0a2e)]" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 scanline" />

            {/* Synthetic crosshair / sprite */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="h-40 w-40 rounded-full border-2 border-[var(--neon-cyan)]/70 animate-pulse-glow" style={{ boxShadow: "0 0 40px var(--neon-cyan)" }} />
                <div className="absolute inset-0 m-auto h-24 w-24 rounded-full border border-[var(--neon-pink)]/70" />
                <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[var(--neon-pink)]" style={{ boxShadow: "0 0 20px var(--neon-pink)" }} />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--neon-cyan)]/50" />
                <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-[var(--neon-cyan)]/50" />
              </div>
            </div>

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-[var(--neon-pink)]/60 bg-[color-mix(in_oklab,var(--neon-pink)_15%,transparent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-pink)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-pink)]" />
              LAUNCH READY
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[var(--bg-deep)] via-[var(--bg-deep)]/70 to-transparent">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)]">
                MAIN PROJECT — ANDROID / 2D / ACTION / SHOOTER
              </div>
              <h3 className="mt-2 font-display text-3xl font-black uppercase md:text-5xl">
                2D <span className="text-glow-cyan">SHOOTING</span> GAME
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-8 p-6 md:grid-cols-3 md:p-10">
            <div className="md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)]">// OVERVIEW</div>
              <p className="mt-2 text-foreground/85">
                A complete, polished 2D shooter built solo in Unity. Snappy controls,
                escalating waves of enemies, satisfying feedback on every shot, and
                an Android build pipeline that's ready for launch. Designed to feel great
                on mobile in the first 10 seconds — and stay great.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <div key={f} className="flex gap-2 text-sm text-foreground/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-cyan)]" style={{ boxShadow: "0 0 8px var(--neon-cyan)" }} />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {METRICS.map((m) => (
                  <div key={m.k} className="glass-card rounded-md p-3">
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{m.k}</div>
                    <div className="mt-1 font-display text-sm font-bold uppercase text-[var(--neon-cyan)]">{m.v}</div>
                  </div>
                ))}
              </div>

              {/* Screenshots */}
              <div className="mt-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)]">// SCREENSHOTS</div>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {SCREENSHOTS.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setActiveScreenshot(s)}
                      className="group relative aspect-video overflow-hidden rounded-md border border-border bg-[var(--bg-elev)] text-left outline-none transition duration-200 hover:-translate-y-0.5 hover:border-[var(--neon-cyan)]/70 focus-visible:border-[var(--neon-cyan)] focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)]/40"
                      aria-label={`Open ${s.label}`}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(circle at ${20 + i * 20}% ${40 + i * 10}%, color-mix(in oklab, ${s.color} 50%, transparent), transparent 60%), linear-gradient(135deg,#0a0f24,#1a0a2e)`,
                        }}
                      />
                      <img
                        src={s.src}
                        alt={`2D shooting game screenshot ${i + 1}`}
                        className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/40 via-transparent to-transparent opacity-70" />
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <div className="absolute bottom-1 left-1.5 font-mono text-[9px] uppercase tracking-widest text-[var(--neon-cyan)]/80">
                        {s.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mt-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)]">// DEV PROCESS</div>
                <div className="mt-3 grid gap-2 md:grid-cols-5">
                  {PROCESS.map((p, i) => (
                    <div key={p.t} className="glass-card rounded-md p-3">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--neon-pink)]">0{i + 1}</div>
                      <div className="mt-1 font-display text-sm font-bold uppercase">{p.t}</div>
                      <div className="mt-1 text-[11px] text-muted-foreground">{p.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="glass-card rounded-md p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--neon-pink)]">// CHALLENGE</div>
                  <p className="mt-2 text-sm text-foreground/85">
                    Maintaining 60 FPS with dense enemy waves and particle-heavy combat
                    while keeping hit-feedback snappy.
                  </p>
                </div>
                <div className="glass-card rounded-md p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// SOLUTION</div>
                  <p className="mt-2 text-sm text-foreground/85">
                    Object pooling for bullets/enemies, batched sprites, and reduced
                    overdraw on FX. Profiler-driven optimization passes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right rail */}
            <div className="space-y-4">
              <div className="glass-card rounded-md p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">STATUS</div>
                <div className="mt-1 font-display text-lg font-bold text-[var(--neon-pink)]">Launch Ready</div>
              </div>
              <div className="glass-card rounded-md p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">GENRE</div>
                <div className="mt-1 font-display font-bold">2D · Action · Arcade</div>
              </div>
              <div className="glass-card rounded-md p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">PLATFORM</div>
                <div className="mt-1 font-display font-bold text-[var(--neon-cyan)]">Android Mobile</div>
              </div>
              <div className="glass-card rounded-md p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">ROLE</div>
                <div className="mt-1 font-display font-bold">Solo Developer</div>
              </div>
              <div className="glass-card rounded-md p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">TECH STACK</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {TECH.map((t) => (
                    <span key={t} className="rounded-full border border-[var(--neon-cyan)]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <NeonButton
                  icon={<FiSmartphone />}
                  as="a"
                  href={DEMO_APK_HREF}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Android Demo
                </NeonButton>
              </div>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-muted-foreground">
                APK size: 531 MB. Demo build available for Android devices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* More slots */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {["MORE COMING SOON", "OPEN TO COMMISSIONS"].map((t, i) => (
            <div key={t} className="glass-card hud-corners flex h-40 items-center justify-center rounded-xl">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">// SLOT_0{i + 2}</div>
                <div className="mt-1 font-display text-xl font-bold uppercase text-[var(--neon-cyan)]">{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeScreenshot && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-deep)]/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreenshot.label} preview`}
          onClick={() => setActiveScreenshot(null)}
        >
          <motion.div
            className="relative w-full max-w-6xl"
            initial={{ scale: 0.94, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveScreenshot(null)}
              className="absolute -right-2 -top-12 z-10 flex h-10 w-10 items-center justify-center rounded-md border border-[var(--neon-cyan)]/60 bg-[var(--bg-elev)] text-xl text-[var(--neon-cyan)] shadow-[0_0_20px_color-mix(in_oklab,var(--neon-cyan)_35%,transparent)] transition hover:bg-[color-mix(in_oklab,var(--neon-cyan)_14%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)]/50 sm:right-0"
              aria-label="Close screenshot preview"
            >
              <FiX />
            </button>

            <div className="hud-corners overflow-hidden rounded-xl border border-[var(--neon-cyan)]/40 bg-black shadow-[0_0_45px_color-mix(in_oklab,var(--neon-cyan)_25%,transparent)]">
              <img
                src={activeScreenshot.src}
                alt={`${activeScreenshot.label} enlarged`}
                className="max-h-[82vh] w-full object-contain"
              />
            </div>

            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)]">
              {activeScreenshot.label}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
