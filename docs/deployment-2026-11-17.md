# Production deployment — 2026-11-17

- Approved by owner in chat; deployed application commit `cbddbf2164cc05648cc6dba78eeef27781864a9f`.
- Domain: `https://studio.pdl.io.vn`; Compose service `web`, container `web-portfolio-v3`.
- Build: Node 24 Alpine, pnpm 11.5.2, `pnpm install --frozen-lockfile`, `pnpm run build`. No PM2.
- Image: `sha256:182eeda4f003bf00df57a7b5f8e82a2bbf4b561058fb068533e36b92418c9284`.
- Existing source Git log permissions prevented fetch. A clean clone of the exact approved commit replaced `source`; original checkout retained as `source-pre-20261117`.
- Server Dockerfile now uses pnpm. Nginx has `absolute_redirect off` so directory redirects retain public HTTPS behind the proxy.
- Backup: `/home/pdl1host/webs/backups/portfolio-v3-20261117-cbddbf2/source-config.tar.gz` (source and Compose/Dockerfile/nginx configuration).
- Backup SHA256: `62069bc1c09492ea6227f388c55550173b4ec0a1ddd0b820da84b7fbc856bc9b`.
- Rollback image retained: `portfolio-v3-web:rollback-20261117`; retag as `portfolio-v3-web` and recreate only Compose service `web` to restore the previous application. Restore saved configuration if needed.
- Nginx configuration test passed. Public HTTPS returned 200 for VI/EN home, team, marketing systems, Prix and AI CV routes; CV English data asset also returned 200. Redirects remain HTTPS.
- No database migrations, DNS changes or other service restarts.
