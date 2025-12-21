# My Profile Laract

A personal portfolio/profile application built with Laravel, Inertia.js, and React (TypeScript), bundled by Vite. It supports authentication (Laravel Fortify/Sanctum), modern UI tooling (Tailwind v4), and SEO resources (sitemap.xml, robots.txt).

## Tech Stack
- Laravel (framework 12.x)
- Inertia.js (server + `@inertiajs/react`)
- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Laravel Sanctum (API/auth tokens)
- Laravel Fortify (auth flows)
- Spatie Laravel Sitemap (SEO)

## Requirements
- PHP >= 8.2
- Composer >= 2.5
- Node.js >= 18 (recommended 20+)
- A database (MySQL/PostgreSQL/SQLite)

## Quick Start (Windows)
```bat
:: 1) Install PHP and Node dependencies and build once
composer run setup

:: 2) Configure environment
copy .env.example .env
php artisan key:generate

:: 3) Set DB credentials in .env then run migrations
php artisan migrate

:: 4) Start development (PHP server + queue + Vite)
composer run dev

:: Alternative: start with SSR enabled
composer run dev:ssr
```

## Common Scripts
- Build assets: `npm run build`
- Dev assets only: `npm run dev`
- Build client + SSR: `npm run build:ssr`
- Lint code: `npm run lint`
- Format code: `npm run format` or `npm run format:check`
- Types check: `npm run types`
- Run tests: `composer run test` or `php artisan test`

## Project Structure (highlights)
- Entry view: [resources/views/app.blade.php](resources/views/app.blade.php)
- Frontend root: [resources/js/app.tsx](resources/js/app.tsx)
- Routes (HTTP): [routes/web.php](routes/web.php), [routes/api.php](routes/api.php)
- Inertia config: [config/inertia.php](config/inertia.php)
- Auth provider: [app/Providers/FortifyServiceProvider.php](app/Providers/FortifyServiceProvider.php)
- User model: [app/Models/User.php](app/Models/User.php)
- SEO assets: [public/sitemap.xml](public/sitemap.xml), [public/robots.txt](public/robots.txt)
- Build config: [vite.config.ts](vite.config.ts), [eslint.config.js](eslint.config.js)

## Environment Variables
Set the basics in `.env`:
- `APP_NAME`, `APP_ENV`, `APP_URL`
- `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`
- `SANCTUM_STATEFUL_DOMAINS`, `SESSION_DOMAIN` (for SPA/session auth)

## Authentication
- Fortify and Sanctum are installed for modern auth flows.
- Two-factor fields exist via migrations; enable and configure as needed.

## Development Notes
- Document root is `public/`.
- Vite runs the frontend dev server; Laravel serves the backend (`composer run dev` starts both with Concurrently).
- Tailwind v4 is included; styles live under `resources/` and `resources/styles/`.

## Deployment
- Ensure `.env` is configured for production (`APP_ENV=production`, correct `APP_URL`).
- Run database migrations: `php artisan migrate --force`.
- Build assets: `npm run build` (or `composer run setup` for a full one-time build).
- Point your web server to the `public/` directory.

## License
MIT (see `composer.json`).
