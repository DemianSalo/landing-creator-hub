import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, FolderOpen, Sparkles, X, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import skydiveBaltimoreImg from "@/assets/skydive-baltimore.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey?: string;
  tags: string[];
  image: string | null;
  github: string | null;
  live: string | null;
  date: string | null;
}

const projects: Project[] = [
  {
    titleKey: "projects.skydive.title",
    descriptionKey: "projects.skydive.description",
    fullDescriptionKey: "projects.skydive.fullDescription",
    tags: ["WordPress", "PHP", "UX/UI", "Conversion Optimization"],
    image: skydiveBaltimoreImg,
    github: null,
    live: "https://skydivebaltimore.com",
    date: "2024",
  },
  {
    titleKey: "projects.coming1.title",
    descriptionKey: "projects.coming1.description",
    tags: ["React", "TypeScript", "Tailwind"],
    image: null,
    github: "#",
    live: "#",
    date: null,
  },
  {
    titleKey: "projects.coming2.title",
    descriptionKey: "projects.coming2.description",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: null,
    github: "#",
    live: "#",
    date: null,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <p className="text-primary font-mono text-sm mb-4">{t("projects.tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title.1")} <span className="text-gradient">{t("projects.title.2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => project.image && setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <FolderOpen className="text-muted-foreground/30" size={48} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.date && (
                  <span className="absolute top-3 right-3 text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">
                    {project.date}
                  </span>
                )}
                {project.image && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">{t("projects.clickToView")}</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {t(project.descriptionKey)}
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
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                      {t("projects.viewCode")}
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                      {t("projects.viewProject")}
                    </a>
                  )}
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
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <Sparkles size={16} className="text-primary" />
            <p className="text-muted-foreground font-mono text-sm">
              {t("projects.soon")} {t("projects.soonDesc")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  {t(selectedProject.titleKey)}
                  {selectedProject.date && (
                    <span className="text-sm font-mono px-2 py-1 bg-primary/20 text-primary rounded flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedProject.date}
                    </span>
                  )}
                </DialogTitle>
              </DialogHeader>
              
              {/* Project Image */}
              {selectedProject.image && (
                <div className="rounded-xl overflow-hidden border border-border">
                  <img 
                    src={selectedProject.image} 
                    alt={t(selectedProject.titleKey)}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Description */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t(selectedProject.fullDescriptionKey || selectedProject.descriptionKey)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-mono px-3 py-1.5 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.live && selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-all"
                    >
                      <ExternalLink size={18} />
                      {t("projects.viewProject")}
                    </a>
                  )}
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:border-primary hover:text-primary transition-all"
                    >
                      <Github size={18} />
                      {t("projects.viewCode")}
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
