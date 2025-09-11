// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import hiTranslation from "./locales/hi.json"; // Hindi translations

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // English translations
      },
      hi: {
        translation: hiTranslation, // Hindi translations
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // In case the selected language is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
