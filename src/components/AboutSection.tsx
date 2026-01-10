import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { value: "3+", label: t("about.stats.experience") },
    { value: "20+", label: t("about.stats.projects") },
    { value: "15+", label: t("about.stats.clients") },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="neon-line mb-32" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <p className="text-primary font-mono text-sm mb-4">{t("about.tag")}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.title.1")}{" "}
              <span className="text-gradient">{t("about.title.2")}</span>{" "}
              {t("about.title.3")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("about.p2")}
            </p>
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
              <MapPin size={16} className="text-primary" />
              <span className="text-muted-foreground">Warsaw, Poland</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
