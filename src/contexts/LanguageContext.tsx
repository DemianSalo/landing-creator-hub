import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "uk" | "pl" | "en";

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
    "hero.role": "Full-Stack Web Developer",
    "hero.description": "Від ідеї до готового веб продукту. Перетворюю концепції в елегантні цифрові рішення.",
    "hero.cta.projects": "Мої проєкти",
    "hero.cta.contact": "Зв'язатися",
    "hero.scroll": "Прокрутіть вниз",
    
    // About
    "about.tag": "// Про мене",
    "about.title.1": "Розробник з",
    "about.title.2": "фокусом",
    "about.title.3": "на якість і результат",
    "about.p1": "Я Full-Stack веб-розробник з глибоким знанням повного циклу розробки різноманітних веб-додатків.",
    "about.p2": "Моя компетенція охоплює широкий спектр мов програмування та технологій, що гарантує надійні та інноваційні рішення для ваших проєктів.",
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
    "projects.skydive.description": "Повний редизайн веб-сайту для скайдайвінг-компанії з 40 000+ відвідувачів на місяць. Оптимізація процесу бронювання для підвищення конверсії та збільшення кількості бронювань тандемних стрибків.",
    "projects.silverclip.title": "Silver Clip - Сайт салону краси",
    "projects.silverclip.description": "Сучасний та візуально привабливий веб-сайт для індустрії краси та салонів. Платформа для бронювання візитів та демонстрації послуг з чистим дизайном, описами послуг та зручною системою запису.",
    "projects.oksana.title": "Oksana Samkova – Ніжний грумінг",
    "projects.oksana.description": "Елегантний сайт для мобільного грумінг-експерта з ветеринарною освітою. Адаптивний WordPress сайт презентує послуги в теплому та професійному тоні, поєднуючи медичну експертизу з ніжним доглядом.",
    
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
    "contact.form.error": "Помилка відправки",
    "contact.form.errorDesc": "Спробуйте ще раз або напишіть мені напряму.",
    
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
    "hero.role": "Full-Stack Web Developer",
    "hero.description": "Od pomysłu do gotowego produktu webowego. Przekształcam koncepcje w eleganckie rozwiązania cyfrowe.",
    "hero.cta.projects": "Moje projekty",
    "hero.cta.contact": "Kontakt",
    "hero.scroll": "Przewiń w dół",
    
    // About
    "about.tag": "// O mnie",
    "about.title.1": "Programista z",
    "about.title.2": "naciskiem",
    "about.title.3": "na jakość i wynik",
    "about.p1": "Jestem Full-Stack Web Developerem z rozległą wiedzą o całym cyklu tworzenia różnorodnych aplikacji webowych.",
    "about.p2": "Moje kompetencje obejmują szeroki zakres języków programowania i technologii, gwarantując niezawodne i innowacyjne rozwiązania dla Twoich projektów.",
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
    "projects.skydive.description": "Pełny redesign strony dla firmy skydivingowej z 40 000+ odwiedzin miesięcznie. Optymalizacja procesu rezerwacji w celu zwiększenia konwersji i liczby rezerwacji skoków tandemowych.",
    "projects.silverclip.title": "Silver Clip - Strona salonu piękności",
    "projects.silverclip.description": "Nowoczesna i wizualnie atrakcyjna strona dla branży beauty. Platforma do rezerwacji wizyt z czystym designem, opisami usług i wygodnym systemem umawiania spotkań.",
    "projects.oksana.title": "Oksana Samkova – Delikatny grooming",
    "projects.oksana.description": "Elegancka strona dla mobilnego eksperta groomingu z wykształceniem weterynaryjnym. Responsywna strona WordPress prezentuje usługi w ciepłym i profesjonalnym tonie.",
    
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
    "contact.form.error": "Błąd wysyłania",
    "contact.form.errorDesc": "Spróbuj ponownie lub napisz do mnie bezpośrednio.",
    
    // Footer
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.built": "Stworzone z",
  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full-Stack Web Developer",
    "hero.description": "From idea to finished web product. Transforming concepts into elegant digital solutions.",
    "hero.cta.projects": "My Projects",
    "hero.cta.contact": "Get in Touch",
    "hero.scroll": "Scroll down",
    
    // About
    "about.tag": "// About me",
    "about.title.1": "Developer with",
    "about.title.2": "focus",
    "about.title.3": "on quality and results",
    "about.p1": "I'm a Full-Stack Web Developer with extensive knowledge of the entire development cycle across various web application technologies.",
    "about.p2": "My proficiency spans a wide range of programming languages and technologies, ensuring robust and innovative solutions for your projects.",
    "about.stats.experience": "Years of Experience",
    "about.stats.projects": "Projects",
    "about.stats.clients": "Clients",
    
    // Skills
    "skills.tag": "// Skills",
    "skills.title.1": "Technologies I",
    "skills.title.2": "master",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    
    // Projects
    "projects.tag": "// Portfolio",
    "projects.title.1": "Featured",
    "projects.title.2": "projects",
    "projects.description": "Here are some of my recent works. Each project is a unique challenge and opportunity for growth.",
    "projects.viewProject": "View",
    "projects.viewCode": "Code",
    "projects.soon": "Coming soon...",
    "projects.soonDesc": "New projects are in development. Stay tuned!",
    "projects.skydive.title": "Skydive Baltimore Website Redesign",
    "projects.skydive.description": "Complete website redesign for a skydiving company with 40,000+ monthly visitors. Optimized booking process to increase conversions and tandem jump bookings.",
    "projects.silverclip.title": "Silver Clip - Beauty Salon Website",
    "projects.silverclip.description": "Modern and visually stunning website for the beauty and salon industry. Platform for booking appointments with clean design, service descriptions, and convenient scheduling system.",
    "projects.oksana.title": "Oksana Samkova – Gentle Pet Grooming",
    "projects.oksana.description": "Elegant website for a mobile grooming expert with veterinary background. Responsive WordPress site presents services in a warm and professional tone, combining medical expertise with gentle care.",
    
    // Contact
    "contact.tag": "// Contact",
    "contact.title.1": "Let's",
    "contact.title.2": "work",
    "contact.title.3": "together",
    "contact.description": "Have an interesting project? I'm always open to discussing new opportunities.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project...",
    "contact.form.submit": "Send",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent!",
    "contact.form.successDesc": "I'll get back to you soon.",
    "contact.form.error": "Sending failed",
    "contact.form.errorDesc": "Please try again or contact me directly.",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with",
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
