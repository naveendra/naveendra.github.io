import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Enterprise Systems Division",
    period: "2020 — Present",
    location: "Remote / On-site",
    current: true,
    description:
      "Lead architect and engineer for enterprise POS, SFA, and ERP integration platforms. Responsible for technical direction, team mentorship, and cross-regional deployment strategies.",
    achievements: [
      "Designed multi-region architecture for enterprise POS handling 100k+ daily transactions",
      "Delivered 14 SFA systems with offline-first architecture across regional deployments",
      "Reduced integration errors by 60% by building a robust ERP middleware platform",
      "Led a team of 6 engineers and established code review and CI/CD standards",
    ],
    tags: [".NET", "Clean Architecture", "Angular", "Azure", "SQL Server"],
  },
  {
    title: "Software Engineer",
    company: "Product & Platform Team",
    period: "2016 — 2020",
    location: "On-site",
    description:
      "Full-stack engineer working across multiple product lines. Focused on API development, database design, and building scalable backend systems for SaaS products.",
    achievements: [
      "Built and maintained REST APIs serving 50k+ daily active users",
      "Redesigned database schema improving query performance by 40%",
      "Implemented JWT-based authentication and role-based access control",
      "Contributed to adoption of Clean Architecture practices across the team",
    ],
    tags: [".NET", "SQL Server", "Angular", "REST API"],
  },
  {
    title: "Junior Software Developer",
    company: "Digital Solutions Agency",
    period: "2014 — 2016",
    location: "On-site",
    description:
      "Started professional development career building web applications and internal tools. Developed strong foundations in C#, SQL, and front-end development.",
    achievements: [
      "Developed 10+ client-facing web applications end-to-end",
      "Automated internal reporting saving 8 hours/week in manual work",
      "Collaborated closely with UX designers and product managers",
    ],
    tags: ["C#", "ASP.NET", "JavaScript", "SQL Server"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 lg:px-16">
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
            Career Timeline
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-blue-500/50 to-transparent" />

          <div className="space-y-8">
            {roles.map((role, i) => (
              <motion.div
                key={role.title + role.period}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    role.current
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-[#050510] border-gray-600"
                  }`}
                />

                <div className="glass-panel rounded-xl p-6 group hover:border-cyan-500/20 transition-all duration-300">
                  {/* Role header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white">{role.title}</h3>
                        {role.current && (
                          <span className="text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 text-sm mt-0.5">{role.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-mono">{role.period}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{role.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {role.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="mt-1 w-1 h-1 rounded-full bg-cyan-500/60 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
