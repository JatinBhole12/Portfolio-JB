import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Variant = "cyan" | "purple" | "pink" | "ghost";

type Props = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  icon?: ReactNode;
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  className?: string;
};

const variantStyles: Record<Variant, string> = {
  cyan: "neon-border-cyan text-[var(--neon-cyan)] hover:bg-[color-mix(in_oklab,var(--neon-cyan)_18%,transparent)]",
  purple: "neon-border-purple text-[var(--neon-purple)] hover:bg-[color-mix(in_oklab,var(--neon-purple)_18%,transparent)]",
  pink: "neon-border-pink text-[var(--neon-pink)] hover:bg-[color-mix(in_oklab,var(--neon-pink)_18%,transparent)]",
  ghost: "border border-border text-foreground hover:bg-[var(--bg-elev)]",
};

export function NeonButton({
  children, onClick, icon, variant = "cyan", as = "button", href, download, target, rel, className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const Inner = (
    <motion.span
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative inline-flex items-center gap-2 rounded-md bg-[color-mix(in_oklab,var(--bg-elev)_60%,transparent)] px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-200 ${variantStyles[variant]} ${className}`}
      whileTap={{ scale: 0.96 }}
      style={{ transition: "transform 0.18s cubic-bezier(.2,.8,.2,1), background-color .2s" }}
    >
      <span className="absolute inset-0 -z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(120deg, transparent 30%, color-mix(in oklab, currentColor 18%, transparent) 50%, transparent 70%)" }}
      />
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </motion.span>
  );

  if (as === "a") {
    return (
      <a href={href} download={download} target={target} rel={rel} onClick={onClick as never} data-cursor="hover" className="inline-block">
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} data-cursor="hover" className="inline-block">
      {Inner}
    </button>
  );
}
