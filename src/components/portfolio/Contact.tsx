import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { NeonButton } from "./NeonButton";
import {
  FiMail, FiGithub, FiLinkedin, FiInstagram, FiDownload, FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const EMAIL = "bholejatin4@gmail.com";
const WHATSAPP_NUMBER = "919359016899";
const HIRE_SUBJECT = "Game Development Project Inquiry";
const HIRE_MESSAGE = "Hi Jatin, I want to hire you for a game development project.";
const EMAIL_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(HIRE_SUBJECT)}&body=${encodeURIComponent(HIRE_MESSAGE)}`;
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(HIRE_MESSAGE)}`;

const LINKS = [
  { label: "Email",     value: EMAIL,                     href: EMAIL_HREF,        icon: <FiMail />,     color: "cyan" },
  { label: "GitHub",    value: "github.com/JatinBhole12",   href: "https://github.com/JatinBhole12",              icon: <FiGithub />,   color: "purple" },
  { label: "LinkedIn",  value: "linkedin.com/in/jatin-bhole", href: "https://www.linkedin.com/in/jatin-bhole",    icon: <FiLinkedin />, color: "cyan" },
  { label: "Instagram", value: "@jatin_bhole_156",          href: "https://www.instagram.com/jatin_bhole_156",    icon: <FiInstagram />,color: "pink" },
  { label: "WhatsApp",  value: "+91 93590 16899",           href: WHATSAPP_HREF,    icon: <FaWhatsapp />, color: "cyan" },
];

const TRUST_POINTS = [
  "Available for freelance Unity work",
  "Fast response on email and WhatsApp",
  "Clear project updates during development",
  "Android APK delivery and build support",
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="// 06"
          tag="OPEN COMMS CHANNEL"
          title={<><span className="text-glow-pink">LET'S</span> BUILD</>}
          subtitle="One project at a time. Send the brief — I'll send the plan."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel hud-corners scanline relative overflow-hidden rounded-2xl p-6 md:p-10"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--neon-cyan)]">
                STATUS: <span className="text-[var(--neon-pink)]">● OPEN FOR PROJECTS</span>
              </div>
              <h3 className="mt-4 font-display text-4xl font-black uppercase leading-none md:text-6xl">
                Press
                <br />
                <span className="bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent animate-gradient">START</span>
              </h3>
              <p className="mt-4 max-w-md text-foreground/80">
                Got a Unity project, a stuck prototype, or an idea you want to ship?
                Let's talk — I respond fast and build faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <NeonButton variant="pink" icon={<FiSend />} as="a" href={EMAIL_HREF}>
                  Hire Me
                </NeonButton>
                <NeonButton
                  variant="ghost"
                  icon={<FiDownload />}
                  as="a"
                  href="/resume.pdf"
                  download="Jatin-Bhole-Resume.pdf"
                >
                  Download Resume
                </NeonButton>
              </div>

              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="glass-card rounded-md px-3 py-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-foreground/75">
                    {point}
                  </div>
                ))}
              </div>

              {/* Large HUD ring */}
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full border border-[var(--neon-cyan)]/40 md:-right-8" style={{ boxShadow: "0 0 60px color-mix(in oklab, var(--neon-cyan) 30%, transparent) inset" }} />
              <div className="pointer-events-none absolute -bottom-12 -right-2 h-40 w-40 rounded-full border border-[var(--neon-pink)]/40 md:right-12" />
            </div>
          </motion.div>

          {/* Links list */}
          <div className="grid gap-3">
            {LINKS.map((l, i) => {
              const c = l.color === "cyan" ? "var(--neon-cyan)" : l.color === "purple" ? "var(--neon-purple)" : "var(--neon-pink)";
              return (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.05 }}
                  data-cursor="hover"
                  className="group glass-card flex items-center justify-between gap-4 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: `color-mix(in oklab, ${c} 30%, transparent)` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-xl"
                      style={{
                        color: c,
                        background: `color-mix(in oklab, ${c} 12%, transparent)`,
                        border: `1px solid color-mix(in oklab, ${c} 40%, transparent)`,
                        boxShadow: `0 0 14px color-mix(in oklab, ${c} 40%, transparent)`,
                      }}
                    >
                      {l.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {l.label}
                      </div>
                      <div className="font-display font-bold">{l.value}</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest transition-transform duration-200 group-hover:translate-x-1" style={{ color: c }}>
                    →
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-border pt-8 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          <div className="mb-5 flex flex-wrap justify-center gap-3">
            <NeonButton variant="pink" icon={<FiSend />} as="a" href={EMAIL_HREF}>
              Start a Game Project
            </NeonButton>
            <NeonButton variant="ghost" icon={<FaWhatsapp />} as="a" href={WHATSAPP_HREF}>
              Chat on WhatsApp
            </NeonButton>
          </div>
          <div>// END_OF_TRANSMISSION</div>
          <div>© {new Date().getFullYear()} JATIN BHOLE · BUILT WITH UNITY-LEVEL CARE</div>
        </div>
      </div>
    </section>
  );
}
