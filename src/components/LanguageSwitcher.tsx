import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      <motion.button
        onClick={() => setLanguage("uk")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          language === "uk"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🇺🇦 UK
      </motion.button>
      <motion.button
        onClick={() => setLanguage("pl")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          language === "pl"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🇵🇱 PL
      </motion.button>
    </div>
  );
};
