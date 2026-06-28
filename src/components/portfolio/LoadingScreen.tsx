import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STEPS = [
  "Loading Assets",
  "Loading Shaders",
  "Loading Environment",
  "Loading Portfolio",
  "Initializing Player",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [granted, setGranted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 6 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => setGranted(true), 350);
        setTimeout(() => setDone(true), 1500);
        setTimeout(() => onDone(), 2100);
        return;
      }
      setProgress(p);
      setStepIdx(Math.min(STEPS.length - 1, Math.floor((p / 100) * STEPS.length)));
    }, 130);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg-deep)] grid-bg scanline"
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--bg-deep)_80%)]" />

          <div className="relative z-10 w-[88%] max-w-xl">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-[var(--neon-cyan)]" />
              SYSTEM BOOT — v0.6.28
            </div>

            <h1 className="font-display text-4xl font-black uppercase leading-none text-foreground md:text-6xl">
              <span className="text-glow-cyan">JATIN</span>{" "}
              <span className="text-glow-purple">BHOLE</span>
            </h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              UNITY • GAME DEV • PORTFOLIO
            </p>

            <div className="mt-10 space-y-2 font-mono text-sm">
              {STEPS.map((s, i) => {
                const state = i < stepIdx ? "done" : i === stepIdx ? "loading" : "pending";
                return (
                  <div key={s} className="flex items-center justify-between gap-4">
                    <span className={state === "pending" ? "text-muted-foreground/40" : "text-foreground"}>
                      {">"} {s}
                      {state === "loading" && <span className="ml-1 animate-pulse text-[var(--neon-cyan)]">_</span>}
                    </span>
                    <span
                      className={
                        state === "done"
                          ? "text-[var(--neon-cyan)]"
                          : state === "loading"
                            ? "text-[var(--neon-pink)] animate-pulse"
                            : "text-muted-foreground/40"
                      }
                    >
                      {state === "done" ? "[OK]" : state === "loading" ? "[…]" : "[--]"}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>PROGRESS</span>
                <span className="text-[var(--neon-cyan)]">{Math.floor(progress)}%</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--bg-elev)] neon-border-cyan">
                <div
                  className="h-full bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-cyan)] to-[var(--neon-pink)] transition-[width] duration-150"
                  style={{ width: `${progress}%`, boxShadow: "0 0 18px var(--neon-cyan)" }}
                />
              </div>
            </div>

            <AnimatePresence>
              {granted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 text-center font-display text-2xl font-black uppercase tracking-[0.4em] text-[var(--neon-cyan)] text-glow-cyan animate-flicker md:text-4xl"
                >
                  &gt;&gt; ACCESS GRANTED &lt;&lt;
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
