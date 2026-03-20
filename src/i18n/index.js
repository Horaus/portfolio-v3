import vi from './messages/vi';
import en from './messages/en';
import { DEFAULT_LANG, SUPPORTED_LANGS } from './routing';

export const messages = { vi, en };

const getByPath = (obj, path) =>
  path.split('.').reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, obj);

export const translate = (lang, key) => {
  const fromLang = messages[lang] || messages[DEFAULT_LANG];
  const primary = getByPath(fromLang, key);

  if (primary !== undefined) return primary;

  const fallback = getByPath(messages[DEFAULT_LANG], key);
  if (fallback !== undefined && lang !== DEFAULT_LANG && import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] Missing key "${key}" in lang "${lang}", fallback to "${DEFAULT_LANG}".`);
  }

  return fallback;
};

export { DEFAULT_LANG, SUPPORTED_LANGS };
