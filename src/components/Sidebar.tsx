import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const navItems = [
  { id: "about",      label: "About" },
  { id: "projects",   label: "My Work" },
  { id: "blog",       label: "Blog" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/naveendra",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/naveendra",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/naveendra",
    label: "Twitter / X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "mailto:naveendrawattegedara@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: "https://dev.to/naveendra",
    label: "Dev.to",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.74v-5.55h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.15.02 1.35 0 1.93-.5 1.73zm4.43-.75c0 .9-.03 1.1-.2 1.3-.2.2-.4.27-.87.27-.87 0-1.08-.37-1.08-1.35v-2.84h-1.1v2.9c0 1.66.4 2.23 1.87 2.23 1.7 0 2.46-.62 2.46-2.27v-2.86h-1.08v2.62zm7.44-3.15h-1.12v4.57h-1.1v-4.57h-1.12v-1h3.34v1z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <aside
      className="fixed left-0 top-0 h-screen z-50 flex"
      style={{ width: "100px" }}
    >
      {/* ── Left strip: social icons + copyright ── */}
      <div
        className="flex flex-col items-center py-5"
        style={{
          width: "36px",
          background: "rgba(5, 5, 20, 0.95)",
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Social icons */}
        <div className="flex flex-col items-center gap-4 flex-1 pt-3">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 + 0.3 }}
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright — rotated */}
        <span
          className="text-[9px] text-gray-700 tracking-widest select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          © {new Date().getFullYear()} Naveendra
        </span>
      </div>

      {/* ── Right nav panel: photo + vertical nav ── */}
      <div
        className="flex flex-col items-center py-5 flex-1"
        style={{
          background: "rgba(10, 10, 30, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: "44px",
              height: "44px",
              border: "1.5px solid rgba(34,211,238,0.4)",
            }}
          >
            <img
              src={heroImg}
              alt="Naveendra"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Online dot */}
          <span
            className="absolute bottom-0 right-0 rounded-full bg-green-400"
            style={{
              width: "9px",
              height: "9px",
              border: "1.5px solid #050510",
            }}
          />
        </motion.div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{
            width: "1px",
            height: "24px",
            background: "linear-gradient(to bottom, rgba(34,211,238,0.4), transparent)",
          }}
        />

        {/* Nav items — vertical rotated text */}
        <nav className="flex flex-col items-center gap-7 flex-1">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.4 }}
                onClick={() => scrollTo(item.id)}
                className="relative flex items-center justify-center group"
                style={{ cursor: "pointer", background: "none", border: "none", padding: 0 }}
              >
                {/* Active indicator — horizontal dash that reads as a side-bar */}
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                      left: "-10px",
                      width: "3px",
                      height: "18px",
                    }}
                  />
                )}

                <span
                  className={`text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 select-none ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-500 group-hover:text-gray-300"
                  }`}
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* Bottom divider */}
        <div
          className="mt-6"
          style={{
            width: "1px",
            height: "24px",
            background: "linear-gradient(to top, rgba(34,211,238,0.2), transparent)",
          }}
        />
      </div>
    </aside>
  );
}
