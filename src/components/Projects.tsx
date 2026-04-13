import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { projects } from "../data/projects";

const statusConfig = {
  template: { label: "Template", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
  production: { label: "Production", color: "text-green-400 bg-green-500/10 border-green-500/30" },
  "open-source": { label: "Open Source", color: "text-orange-400 bg-orange-500/10 border-orange-500/30" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 lg:px-16">
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
            GitHub Repositories
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Projects</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl">
            Enterprise systems, architecture templates, and open-source tools — each linked to its GitHub repository.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-xl p-6 group hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="mt-1 w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-colors group/link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span className="group-hover/link:underline underline-offset-2">
                      View on GitHub
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
