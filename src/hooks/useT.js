import { useCallback } from 'react';
import { translate } from '../i18n';
import { useLang } from './useLang';

export const useT = () => {
  const { lang } = useLang();

  return useCallback(
    (key, fallback) => {
      const value = translate(lang, key);
      if (value === undefined || value === null) return fallback ?? key;
      return value;
    },
    [lang]
  );
};

export default useT;
