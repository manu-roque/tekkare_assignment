// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      hospitalizations: "Hospitalizations by Hospital",
      select: "Select a hospital",
      medications: "Medication Price History",
      select_medication: "Select a medication"
    }
  },
  fr: {
    translation: {
      hospitalizations: "Hospitalisations par hôpital",
      select: "Sélectionnez un hôpital",
      medications: "Historique des prix des médicaments",
      select_medication: "Sélectionnez un médicament"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Fallback to 'en' if detection fails
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
