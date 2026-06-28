import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  index, tag, title, subtitle,
}: { index: string; tag: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)] md:text-xs"
      >
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-12 bg-[var(--neon-cyan)]" />
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl font-black uppercase leading-[1] md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl text-foreground/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
