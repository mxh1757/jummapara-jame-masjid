import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("jcm-lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("jcm-lang", lang);
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  const t = (key) => {
    const parts = key.split(".");
    let val = translations[lang];
    for (const p of parts) {
      val = val?.[p];
      if (val === undefined) break;
    }
    return val ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { lang: "en", setLang: () => {}, t: (k) => k };
  }
  return ctx;
};