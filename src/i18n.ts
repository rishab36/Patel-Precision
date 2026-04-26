"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import es from "./locales/es/translation.json";
import ja from "./locales/japanese/translation.json";
import de from "./locales/de/translation.json";

const storedLang =
  typeof window !== "undefined" ? (localStorage.getItem("pp-lang") || "en") : "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      ja: { translation: ja },
      de: { translation: de },
    },
    lng: storedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("pp-lang", lng);
    document.documentElement.lang = lng;
  });
}

export default i18n;
