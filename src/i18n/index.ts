import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';

const i18n = createI18n({
  locale: 'zh',
  messages: {
    en,
    zh,
  },
  legacy: false,
  globalInjection: true,
});
export default i18n;
