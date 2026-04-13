import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const stats = [
  { value: "8+",  label: "Years Experience" },
  { value: "14+", label: "Enterprise SFA Systems" },
  { value: "3",   label: "ERP Platforms Integrated" },
  { value: "50+", label: "Engineers Collaborated With" },
];

const techStack = [
  ".NET 8", "C#", "ASP.NET Core", "Angular", "TypeScript",
  "SQL Server", "Azure", "Docker", "CQRS", "Clean Architecture",
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 px-8 lg:px-14">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Photo frame */}
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(34,211,238,0.4), rgba(139,92,246,0.3), rgba(59,130,246,0.4))",
                  filter: "blur(16px)",
                  transform: "scale(1.05)",
                  zIndex: 0,
                }}
              />
              {/* Border gradient frame */}
              <div
                className="relative rounded-2xl p-[2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(34,211,238,0.6), rgba(139,92,246,0.4), rgba(59,130,246,0.6))",
                  zIndex: 1,
                }}
              >
                <div className="rounded-2xl overflow-hidden" style={{ width: "340px", height: "420px" }}>
                  <img
                    src={heroImg}
                    alt="Naveendra Wattegedara"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name tag overlay at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl px-4 py-3"
                style={{ zIndex: 2 }}
              >
                <p className="text-white font-bold text-base leading-tight">Naveendra Wattegedara</p>
                <p className="text-cyan-400 text-xs mt-0.5">.NET Architect · Senior Software Engineer</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-gray-400">Available for opportunities</span>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-4 -right-4 glass-panel rounded-xl px-3 py-2 text-center"
                style={{ zIndex: 2 }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">8+</p>
                <p className="text-[9px] text-gray-500 leading-tight">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: About content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-3">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Naveendra
                </span>
              </h1>
              <p className="mt-2 text-lg text-gray-400 font-light">
                Senior Software Engineer &amp; .NET Architect
              </p>
            </div>

            {/* Bio glass panel */}
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <p className="text-gray-300 leading-relaxed text-[14px]">
                I design and build{" "}
                <span className="text-cyan-400 font-medium">scalable enterprise systems</span> — from
                multi-region POS platforms and offline-first SFA products to deep ERP integrations
                with SAP and M3. I specialize in{" "}
                <span className="text-cyan-400 font-medium">Clean Architecture, CQRS, and domain-driven design</span>.
              </p>
              <p className="text-gray-400 leading-relaxed text-[14px]">
                I think in systems. Every design decision I make is shaped by constraints — latency,
                scale, team structure, and long-term maintainability. I write about these decisions
                here, linking real architecture templates and code.
              </p>

              {/* CTA buttons */}
              <div className="flex gap-3 pt-2 flex-wrap">
                <motion.a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="glass-panel rounded-xl p-3 text-center"
                >
                  <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-panel p-4 rounded-xl"
            >
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-2">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
