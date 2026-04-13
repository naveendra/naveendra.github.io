import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const contactMethods = [
  {
    label: "Email",
    value: "naveendrawattegedara@gmail.com",
    href: "mailto:naveendrawattegedara@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/naveendra",
    href: "https://github.com/naveendra",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/naveendra",
    href: "https://linkedin.com/in/naveendra",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 lg:px-16 pb-32">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl"
      >
        {/* Section header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">
            Let's Talk
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: message */}
          <div className="glass-panel rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Open to the right opportunities
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              I'm selectively open to senior engineering and architecture roles, consulting engagements,
              and technical collaborations. If you're building something that requires deep backend
              expertise and a systems-level thinker, I'd like to hear about it.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              You can also reach me about architecture discussions, template contributions, or if
              something I wrote sparked a question.
            </p>

            <div className="mt-8 space-y-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-3 rounded-xl border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-200 group"
                >
                  <span className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                    {method.icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-600">{method.label}</p>
                    <p className="text-sm text-gray-300 group-hover:text-cyan-300 transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4 text-gray-700 group-hover:text-cyan-500 ml-auto transition-colors"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: availability */}
          <div className="space-y-5">
            <div className="glass-panel rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">Available for opportunities</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Full-time roles", value: "Senior / Lead Engineer" },
                  { label: "Consulting", value: "Architecture & Technical Direction" },
                  { label: "Location", value: "Remote / Hybrid" },
                  { label: "Response time", value: "Within 48 hours" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-xs text-gray-600">{item.label}</span>
                    <span className="text-xs text-gray-300 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">What I bring</p>
              {[
                "8+ years of enterprise .NET experience",
                "Clean Architecture & DDD practitioner",
                "Proven track record in multi-region systems",
                "Team leadership and architectural guidance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 py-2 border-b border-white/5 last:border-0">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400/60 shrink-0" />
                  <span className="text-xs text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
