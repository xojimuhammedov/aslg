import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { resorce } from "./locales";

const supportedLngs = ["ru", "kz", "en", "chn"];
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ru",
    lng: "ru", // doimiy rus tili
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    resources: resorce
  });

export default i18n;
