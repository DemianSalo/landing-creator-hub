import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const frontendSkills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Next.js", level: 85 },
  { name: "CSS/Tailwind", level: 90 },
];

const backendSkills = [
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "REST API", level: 85 },
  { name: "GraphQL", level: 70 },
];

const tools = [
  "Git", "Docker", "Figma", "Vite", "Redux", "Framer Motion", 
  "Prisma", "Supabase", "Vercel", "AWS"
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const SkillBar = ({ name, level, index, color }: { name: string; level: number; index: number; color: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-muted-foreground font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );

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
          <p className="text-primary font-mono text-sm mb-4">{t("skills.tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("skills.title.1")} <span className="text-gradient">{t("skills.title.2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-6 text-neon-cyan">{t("skills.frontend")}</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} index={index} color="bg-neon-cyan" />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-6 text-neon-pink">{t("skills.backend")}</h3>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} index={index} color="bg-neon-pink" />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass p-6 rounded-2xl md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-neon-green">{t("skills.tools")}</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="px-3 py-1.5 bg-muted rounded-full text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
