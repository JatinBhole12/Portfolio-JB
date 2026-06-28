import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [data-cursor='hover']");
      setHover(!!interactive);
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[var(--neon-cyan)] md:block"
        style={{ boxShadow: "0 0 12px var(--neon-cyan), 0 0 24px var(--neon-cyan)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full transition-[width,height,border-color,opacity] duration-200 md:block"
        style={{
          border: `1.5px solid var(--neon-cyan)`,
          boxShadow: "0 0 18px color-mix(in oklab, var(--neon-cyan) 60%, transparent)",
          transform: "translate3d(-100px,-100px,0)",
          width: hover ? 64 : 40,
          height: hover ? 64 : 40,
          marginLeft: hover ? -12 : 0,
          marginTop: hover ? -12 : 0,
          opacity: hover ? 0.9 : 0.6,
        }}
      />
    </>
  );
}
