import React, { createContext, useContext, useState } from 'react';

// A simple i18n context that supplies translations for common UI texts.
const LanguageContext = createContext();

const translations = {
  de: {
    back: "Zurück",
    next: "Weiter",
    submit: "Abschicken",
    thankYou: "Danke!",
    loading: "Konfiguration wird geladen...",
    submissionSuccess: "Ihre Antworten wurden übermittelt.",
    abortConditionMet: "Abbruchbedingung erfüllt",
    contactInformation: "Kontaktinformationen"
  },
  en: {
    back: "Back",
    next: "Next",
    submit: "Submit",
    thankYou: "Thank You!",
    loading: "Loading configuration...",
    submissionSuccess: "Your responses have been submitted.",
    abortConditionMet: "Abort Condition Met",
    contactInformation: "Contact Information"
  },
  zh: {
    back: "返回",
    next: "下一步",
    submit: "提交",
    thankYou: "谢谢！",
    loading: "加载配置中...",
    submissionSuccess: "您的回答已提交。",
    abortConditionMet: "中止条件已满足",
    contactInformation: "联系信息"
  },
  hi: {
    back: "वापस",
    next: "अगला",
    submit: "जमा करें",
    thankYou: "धन्यवाद!",
    loading: "कॉन्फ़िगरेशन लोड हो रहा है...",
    submissionSuccess: "आपके उत्तर जमा हो गए हैं।",
    abortConditionMet: "अग्निबीमारी शर्त पूरी हुई",
    contactInformation: "संपर्क जानकारी"
  },
  es: {
    back: "Atrás",
    next: "Siguiente",
    submit: "Enviar",
    thankYou: "¡Gracias!",
    loading: "Cargando configuración...",
    submissionSuccess: "Tus respuestas han sido enviadas.",
    abortConditionMet: "Condición de aborto cumplida",
    contactInformation: "Información de Contacto"
  },
  fr: {
    back: "Retour",
    next: "Suivant",
    submit: "Soumettre",
    thankYou: "Merci!",
    loading: "Chargement de la configuration...",
    submissionSuccess: "Vos réponses ont été soumises.",
    abortConditionMet: "Condition d'abandon satisfaite",
    contactInformation: "Informations de Contact"
  },
  ar: {
    back: "عودة",
    next: "التالي",
    submit: "إرسال",
    thankYou: "شكراً!",
    loading: "جاري تحميل الإعدادات...",
    submissionSuccess: "تم إرسال إجاباتك.",
    abortConditionMet: "تم استيفاء شرط الإنهاء",
    contactInformation: "معلومات الاتصال"
  },
  bn: {
    back: "পেছনে",
    next: "পরবর্তী",
    submit: "জমা দিন",
    thankYou: "ধন্যবাদ!",
    loading: "কনফিগারেশন লোড হচ্ছে...",
    submissionSuccess: "আপনার উত্তর জমা হয়েছে।",
    abortConditionMet: "প্রয়োজনীয় শর্ত পূরণ হয়েছে",
    contactInformation: "যোগাযোগের তথ্য"
  },
  ru: {
    back: "Назад",
    next: "Вперёд",
    submit: "Отправить",
    thankYou: "Спасибо!",
    loading: "Загрузка конфигурации...",
    submissionSuccess: "Ваши ответы были отправлены.",
    abortConditionMet: "Условие прерывания выполнено",
    contactInformation: "Контактная информация"
  },
  pt: {
    back: "Voltar",
    next: "Próximo",
    submit: "Enviar",
    thankYou: "Obrigado!",
    loading: "Carregando configuração...",
    submissionSuccess: "Suas respostas foram enviadas.",
    abortConditionMet: "Condição de aborto satisfeita",
    contactInformation: "Informações de Contato"
  },
  id: {
    back: "Kembali",
    next: "Berikutnya",
    submit: "Kirim",
    thankYou: "Terima kasih!",
    loading: "Memuat konfigurasi...",
    submissionSuccess: "Jawaban Anda telah dikirimkan.",
    abortConditionMet: "Kondisi pembatalan terpenuhi",
    contactInformation: "Informasi Kontak"
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
