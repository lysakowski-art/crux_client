import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
 import translationEN from './en/translations.json';
 import translationPL from './pl/translations.json';


i18n
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: translationEN
            },
            pl: {
                translations: translationPL
            }
        },
        // we init with resources
        //  fallbackLng: "en",
        debug: false,
        lng: "pl",

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;