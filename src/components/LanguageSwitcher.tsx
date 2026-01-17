import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "uk" as const, label: "🇺🇦 UK" },
    { code: "en" as const, label: "🇬🇧 EN" },
    { code: "pl" as const, label: "🇵🇱 PL" },
  ];

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
};
