import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "uk" | "pl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Navbar
    "nav.about": "Про мене",
    "nav.skills": "Навички",
    "nav.projects": "Проєкти",
    "nav.contact": "Контакт",
    
    // Hero
    "hero.greeting": "Привіт, я",
    "hero.role": "Web Developer",
    "hero.description": "Створюю сучасні веб-додатки з фокусом на продуктивність, UX та чистий код. Перетворюю ідеї в елегантні цифрові рішення.",
    "hero.cta.projects": "Мої проєкти",
    "hero.cta.contact": "Зв'язатися",
    "hero.scroll": "Прокрутіть вниз",
    
    // About
    "about.tag": "// Про мене",
    "about.title.1": "Розробник з",
    "about.title.2": "пристрастю",
    "about.title.3": "до коду",
    "about.p1": "Я веб-розробник із Варшави, який спеціалізується на створенні сучасних, адаптивних та продуктивних веб-додатків.",
    "about.p2": "Мій підхід поєднує технічну експертизу з увагою до деталей, щоб створювати рішення, які не тільки працюють бездоганно, але й виглядають приголомшливо.",
    "about.stats.experience": "Років досвіду",
    "about.stats.projects": "Проєктів",
    "about.stats.clients": "Клієнтів",
    
    // Skills
    "skills.tag": "// Навички",
    "skills.title.1": "Технології, якими я",
    "skills.title.2": "володію",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Інструменти",
    
    // Projects
    "projects.tag": "// Портфоліо",
    "projects.title.1": "Вибрані",
    "projects.title.2": "проєкти",
    "projects.description": "Ось деякі з моїх останніх робіт. Кожен проєкт — це унікальне завдання та можливість для росту.",
    "projects.viewProject": "Переглянути",
    "projects.viewCode": "Код",
    "projects.soon": "Скоро буде...",
    "projects.soonDesc": "Нові проєкти вже в розробці. Слідкуйте за оновленнями!",
    "projects.skydive.title": "Редизайн сайту Skydive Baltimore",
    "projects.skydive.description": "Повний редизайн веб-сайту для скайдайвінг-компанії з 40 000+ відвідувачів на місяць.",
    "projects.skydive.fullDescription": "Повний редизайн веб-сайту для скайдайвінг-компанії Skydive Baltimore з 40 000+ відвідувачів на місяць. Старий сайт виглядав застарілим і мав низьку конверсію. Моя задача полягала в оптимізації процесу бронювання для підвищення конверсії та збільшення кількості бронювань тандемних стрибків. Результат: сучасний дизайн, покращений UX та спрощений процес бронювання.",
    "projects.coming1.title": "Проєкт 2",
    "projects.coming1.description": "Скоро буде...",
    "projects.coming2.title": "Проєкт 3",
    "projects.coming2.description": "Скоро буде...",
    "projects.clickToView": "Натисніть для перегляду",
    
    // Contact
    "contact.tag": "// Контакти",
    "contact.title.1": "Давайте",
    "contact.title.2": "працювати",
    "contact.title.3": "разом",
    "contact.description": "Є цікавий проєкт? Я завжди відкритий для обговорення нових можливостей.",
    "contact.email": "Email",
    "contact.location": "Локація",
    "contact.phone": "Телефон",
    "contact.form.name": "Ім'я",
    "contact.form.namePlaceholder": "Ваше ім'я",
    "contact.form.email": "Email",
    "contact.form.message": "Повідомлення",
    "contact.form.messagePlaceholder": "Розкажіть про ваш проєкт...",
    "contact.form.submit": "Надіслати",
    "contact.form.sending": "Надсилання...",
    "contact.form.success": "Повідомлення надіслано!",
    "contact.form.successDesc": "Я зв'яжуся з вами найближчим часом.",
    
    // Footer
    "footer.rights": "Всі права захищено.",
    "footer.built": "Створено з",
  },
  pl: {
    // Navbar
    "nav.about": "O mnie",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.greeting": "Cześć, jestem",
    "hero.role": "Web Developer",
    "hero.description": "Tworzę nowoczesne aplikacje webowe z naciskiem na wydajność, UX i czysty kod. Przekształcam pomysły w eleganckie rozwiązania cyfrowe.",
    "hero.cta.projects": "Moje projekty",
    "hero.cta.contact": "Kontakt",
    "hero.scroll": "Przewiń w dół",
    
    // About
    "about.tag": "// O mnie",
    "about.title.1": "Programista z",
    "about.title.2": "pasją",
    "about.title.3": "do kodu",
    "about.p1": "Jestem web developerem z Warszawy, specjalizującym się w tworzeniu nowoczesnych, responsywnych i wydajnych aplikacji webowych.",
    "about.p2": "Moje podejście łączy ekspertyzę techniczną z dbałością o szczegóły, tworząc rozwiązania, które nie tylko działają bezbłędnie, ale też wyglądają oszałamiająco.",
    "about.stats.experience": "Lat doświadczenia",
    "about.stats.projects": "Projektów",
    "about.stats.clients": "Klientów",
    
    // Skills
    "skills.tag": "// Umiejętności",
    "skills.title.1": "Technologie, które",
    "skills.title.2": "znam",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Narzędzia",
    
    // Projects
    "projects.tag": "// Portfolio",
    "projects.title.1": "Wybrane",
    "projects.title.2": "projekty",
    "projects.description": "Oto niektóre z moich ostatnich prac. Każdy projekt to unikalne wyzwanie i możliwość rozwoju.",
    "projects.viewProject": "Zobacz",
    "projects.viewCode": "Kod",
    "projects.soon": "Wkrótce...",
    "projects.soonDesc": "Nowe projekty są w trakcie realizacji. Bądź na bieżąco!",
    "projects.skydive.title": "Redesign strony Skydive Baltimore",
    "projects.skydive.description": "Pełny redesign strony dla firmy skydivingowej z 40 000+ odwiedzin miesięcznie.",
    "projects.skydive.fullDescription": "Pełny redesign strony internetowej dla firmy skydivingowej Skydive Baltimore z 40 000+ odwiedzin miesięcznie. Stara strona wyglądała przestarzale i miała niską konwersję. Moim zadaniem była optymalizacja procesu rezerwacji w celu zwiększenia konwersji i liczby rezerwacji skoków tandemowych. Rezultat: nowoczesny design, ulepszone UX i uproszczony proces rezerwacji.",
    "projects.coming1.title": "Projekt 2",
    "projects.coming1.description": "Wkrótce...",
    "projects.coming2.title": "Projekt 3",
    "projects.coming2.description": "Wkrótce...",
    "projects.clickToView": "Kliknij, aby zobaczyć",
    
    // Contact
    "contact.tag": "// Kontakt",
    "contact.title.1": "Pracujmy",
    "contact.title.2": "razem",
    "contact.title.3": "",
    "contact.description": "Masz ciekawy projekt? Zawsze jestem otwarty na dyskusję o nowych możliwościach.",
    "contact.email": "Email",
    "contact.location": "Lokalizacja",
    "contact.phone": "Telefon",
    "contact.form.name": "Imię",
    "contact.form.namePlaceholder": "Twoje imię",
    "contact.form.email": "Email",
    "contact.form.message": "Wiadomość",
    "contact.form.messagePlaceholder": "Opowiedz o swoim projekcie...",
    "contact.form.submit": "Wyślij",
    "contact.form.sending": "Wysyłanie...",
    "contact.form.success": "Wiadomość wysłana!",
    "contact.form.successDesc": "Skontaktuję się z Tobą wkrótce.",
    
    // Footer
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.built": "Stworzone z",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("uk");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["uk"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
