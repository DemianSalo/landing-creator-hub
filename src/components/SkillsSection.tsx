import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "cyan" },
  { name: "TypeScript", level: 90, color: "cyan" },
  { name: "JavaScript", level: 95, color: "pink" },
  { name: "Node.js", level: 80, color: "green" },
  { name: "CSS/Tailwind", level: 90, color: "pink" },
  { name: "PostgreSQL", level: 75, color: "green" },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "Tailwind CSS", "Framer Motion", "Git", "REST API", "GraphQL",
  "Docker", "AWS", "Figma", "Vite", "Redux"
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">// Навыки</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Мой <span className="text-gradient">стек</span> технологий
          </h2>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-full rounded-full ${
                    skill.color === "cyan"
                      ? "bg-neon-cyan"
                      : skill.color === "pink"
                      ? "bg-neon-pink"
                      : "bg-neon-green"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
              className="px-4 py-2 glass rounded-full text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
