import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Architecture",
    icon: "⚙️",
    skills: [
      { name: ".NET / C#", level: 97 },
      { name: "ASP.NET Core", level: 95 },
      { name: "Clean Architecture", level: 95 },
      { name: "CQRS / MediatR", level: 90 },
      { name: "Domain-Driven Design", level: 88 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    category: "Data & Integration",
    icon: "🗄️",
    skills: [
      { name: "SQL Server", level: 92 },
      { name: "Entity Framework Core", level: 90 },
      { name: "SAP / M3 ERP Integration", level: 82 },
      { name: "Azure Service Bus", level: 80 },
      { name: "REST API Design", level: 93 },
      { name: "Sync Framework", level: 78 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Azure", level: 82 },
      { name: "Docker", level: 80 },
      { name: "CI/CD (GitHub Actions / Azure DevOps)", level: 83 },
      { name: "Git", level: 92 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 lg:px-16">
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
            Technical Expertise
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass-panel rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{group.icon}</span>
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-gray-400">{skill.name}</span>
                      <span className="text-[10px] text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
