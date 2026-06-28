import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const SECTIONS = ["home", "about", "skills", "projects", "experience", "services", "contact"];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2.5;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(id);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="glass-panel hud-corners flex items-center gap-1 rounded-full px-2 py-2">
          <div className="px-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
            JB<span className="text-muted-foreground">/</span>DEV
          </div>
          <div className="mx-1 h-5 w-px bg-border" />
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                active === s ? "text-[var(--neon-cyan)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === s && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-[color-mix(in_oklab,var(--neon-cyan)_15%,transparent)]"
                  style={{ boxShadow: "inset 0 0 14px color-mix(in oklab, var(--neon-cyan) 50%, transparent)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{s}</span>
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:hidden">
        <div className="glass-panel rounded-full px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
          JB<span className="text-muted-foreground">/</span>DEV
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-[var(--neon-cyan)]"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-16 z-50 md:hidden"
        >
          <div className="glass-panel rounded-2xl p-3">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                className={`block w-full rounded-lg px-4 py-3 text-left font-mono text-sm uppercase tracking-widest ${
                  active === s ? "text-[var(--neon-cyan)]" : "text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
