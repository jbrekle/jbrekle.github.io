import React, { createContext, useContext, useState } from 'react';

// A simple i18n context that supplies translations for common UI texts.
const LanguageContext = createContext();

const translations = {
  de: {
    back: "Zurück",
    next: "Weiter",
    submit: "Abschicken",
    thankYou: "Danke!",
    loading: "Konfiguration wird geladen..."
  },
  en: {
    back: "Back",
    next: "Next",
    submit: "Submit",
    thankYou: "Thank You!",
    loading: "Loading configuration..."
  },
  zh: {
    back: "返回",
    next: "下一步",
    submit: "提交",
    thankYou: "谢谢！",
    loading: "加载配置中..."
  },
  hi: {
    back: "वापस",
    next: "अगला",
    submit: "जमा करें",
    thankYou: "धन्यवाद!",
    loading: "कॉन्फ़िगरेशन लोड हो रहा है..."
  },
  es: {
    back: "Atrás",
    next: "Siguiente",
    submit: "Enviar",
    thankYou: "¡Gracias!",
    loading: "Cargando configuración..."
  },
  fr: {
    back: "Retour",
    next: "Suivant",
    submit: "Soumettre",
    thankYou: "Merci!",
    loading: "Chargement de la configuration..."
  },
  ar: {
    back: "عودة",
    next: "التالي",
    submit: "إرسال",
    thankYou: "شكراً!",
    loading: "جاري تحميل الإعدادات..."
  },
  bn: {
    back: "পেছনে",
    next: "পরবর্তী",
    submit: "জমা দিন",
    thankYou: "ধন্যবাদ!",
    loading: "কনফিগারেশন লোড হচ্ছে..."
  },
  ru: {
    back: "Назад",
    next: "Вперёд",
    submit: "Отправить",
    thankYou: "Спасибо!",
    loading: "Загрузка конфигурации..."
  },
  pt: {
    back: "Voltar",
    next: "Próximo",
    submit: "Enviar",
    thankYou: "Obrigado!",
    loading: "Carregando configuração..."
  },
  id: {
    back: "Kembali",
    next: "Berikutnya",
    submit: "Kirim",
    thankYou: "Terima kasih!",
    loading: "Memuat konfigurasi..."
  }
};

export const availableLanguages = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "hi", label: "हिन्दी" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "bn", label: "বাংলা" },
  { code: "ru", label: "Русский" },
  { code: "pt", label: "Português" },
  { code: "id", label: "Bahasa Indonesia" }
];

export const LanguageProvider = ({ defaultLanguage, children }) => {
  const [language, setLanguage] = useState(
    translations[defaultLanguage] ? defaultLanguage : "en"
  );

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
