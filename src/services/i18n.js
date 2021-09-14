import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from './locale/en/common.json';
import commonZh from './locale/zh/common.json';

import aboutUsEn from './locale/en/aboutUs.json';
import aboutUsZh from './locale/zh/aboutUs.json';

import headerEn from './locale/en/headerCom.json';
import headerZh from './locale/zh/headerCom.json';

import footerEn from './locale/en/footer.json';
import footerZh from './locale/zh/footer.json';

import contactUsEn from './locale/en/contactUs.json';
import contactUsZh from './locale/zh/contactUs.json';

import mortgageEn from './locale/en/mortgage.json';
import mortgageZh from './locale/zh/mortgage.json';

import rentalEn from './locale/en/rental.json';
import rentalZh from './locale/zh/rental.json';

import jumboEn from './locale/en/jumbo.json';
import jumboZh from './locale/zh/jumbo.json';

import alternativeMortgageEn from './locale/en/alternativeMortgage.json';
import alternativeMortgageZh from './locale/zh/alternativeMortgage.json';

import bridgeEn from './locale/en/bridge.json';
import bridgeZh from './locale/zh/bridge.json';

import homepageEn from './locale/en/homepage.json';
import homepageZh from './locale/zh/homepage.json';

import agentEn from './locale/en/agent.json';
import agentZh from './locale/zh/agent.json';

import brokerEn from './locale/en/broker.json';
import brokerZh from './locale/zh/broker.json';

import faqEn from './locale/en/faq.json';
import faqZh from './locale/zh/faq.json';

import disclosuresAndLicensesEn from './locale/en/disclosuresAndLicenses.json';
import disclosuresAndLicensesZh from './locale/zh/disclosuresAndLicenses.json';

import resourcesEn from './locale/en/resources.json';
import resourcesZh from './locale/zh/resources.json';

const resourceEnDefault = {
  common: commonEn,
  homepage: homepageEn,
  aboutUs: aboutUsEn,
  header: headerEn,
  footer: footerEn,
  contactUs: contactUsEn,
  mortgage: mortgageEn,
  rental: rentalEn,
  jumbo: jumboEn,
  alternativeMortgage: alternativeMortgageEn,
  bridge: bridgeEn,
  agent: agentEn,
  broker: brokerEn,
  faq: faqEn,
  disclosuresAndLicenses: disclosuresAndLicensesEn,
  resources: resourcesEn,
};

const resourceZhDefault = {
  common: commonZh,
  homepage: homepageZh,
  aboutUs: aboutUsZh,
  header: headerZh,
  footer: footerZh,
  contactUs: contactUsZh,
  mortgage: mortgageZh,
  rental: rentalZh,
  jumbo: jumboZh,
  alternativeMortgage: alternativeMortgageZh,
  bridge: bridgeZh,
  agent: agentZh,
  broker: brokerZh,
  faq: faqZh,
  disclosuresAndLicenses: disclosuresAndLicensesZh,
  resources: resourcesZh,
};

const options = {
  order: ['localStorage', 'htmlTag', 'querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

//WARN ltang: Be super carefull with language selection. Any error here will result in "An unexpected error has occured"
const resources = {
  en: resourceEnDefault,
  'en-US': resourceEnDefault,
  zh: resourceZhDefault,
  'zh-CN': resourceZhDefault,
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(
    {
      //lng: 'en-US', // <--- turn off for LanguageDetector to work
      detection: options,
      resources,
      fallbackLng: 'en-US',
      //WARN ltang: Be super carefull with language selection. Any error here will result in "An unexpected error has occured"
      supportedLngs: ['en-US', 'zh-CN'],
      interpolation: {
        escapeValue: false,
      },
      //debug: true, //ltang: Disable for production
    },
    (error) => {
      if (error) console.error(error);
    },
  );

export default i18next;
