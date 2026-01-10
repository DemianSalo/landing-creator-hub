import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Проект 1",
    description: "Описание проекта будет добавлено позже. Здесь будет информация о технологиях и решениях.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    title: "Проект 2",
    description: "Описание проекта будет добавлено позже. Здесь будет информация о технологиях и решениях.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    title: "Проект 3",
    description: "Описание проекта будет добавлено позже. Здесь будет информация о технологиях и решениях.",
    tags: ["React", "Redux", "REST API"],
    image: null,
    github: "#",
    live: "#",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="neon-line mb-32" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">// Портфолио</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Избранные <span className="text-gradient">проекты</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-muted relative flex items-center justify-center">
                <FolderOpen className="text-muted-foreground/30" size={48} />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-mono text-sm">
            Больше проектов скоро появится...
          </p>
        </motion.div>
      </div>
    </section>
  );
};
