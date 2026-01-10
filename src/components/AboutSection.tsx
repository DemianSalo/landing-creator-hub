import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Чистый код",
    description: "Пишу поддерживаемый и масштабируемый код",
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Создаю интуитивные интерфейсы",
  },
  {
    icon: Zap,
    title: "Производительность",
    description: "Оптимизирую скорость загрузки",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <p className="text-primary font-mono text-sm mb-4">// Обо мне</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Привет, я{" "}
              <span className="text-gradient">Demain</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Веб-разработчик с страстью к созданию красивых и функциональных 
              цифровых продуктов. Специализируюсь на React, TypeScript и 
              современных веб-технологиях.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Верю, что отличный код — это искусство, которое должно быть 
              не только эффективным, но и элегантным. Каждый проект — 
              это возможность создать что-то уникальное.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
