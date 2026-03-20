import { ensureLangPath } from '../i18n/routing';

// Note:
// We intentionally use hard navigation for route changes because SPA transitions
// in this project can preserve scroll position on some deep pages.
// Keeping this helper centralized makes the behavior easy to maintain.
export const hardNavigate = (to) => {
  if (!to) return;

  const target = ensureLangPath(to);
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (target === current) return;

  window.location.assign(target);
};
