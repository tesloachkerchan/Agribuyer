// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en/translation.json';
import amTranslation from '../locales/am/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  am: {
    translation: amTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
