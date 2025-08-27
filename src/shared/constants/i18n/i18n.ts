import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {ruTranslation} from "./ru/translation.ts";
import {kkTranslation} from "@/shared/constants/i18n/kk/translation.ts";

const resources = {
    ru: ruTranslation,
    kk: kkTranslation,
}

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
    }
}

i18n.use(initReactI18next).init({
    ns: ['homePage'],
    debug: true,
    fallbackLng: 'ru',
    lng: 'ru',
    resources,
})
export default i18n;