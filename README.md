# Seventeen Recruitment

Education recruitment website for schools, trusts, nurseries and candidates. It uses the same features as the events site: job board, applications with CV upload, talent network, school staffing requests, contact form, and a Sanity studio for live jobs.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without a Sanity project id, the site shows the sample education vacancies in `src/data/jobs.ts`. Forms need their own database, CV storage, Turnstile keys and mail settings. Those are listed in `.env.example`. Do not reuse the events site credentials.

## Scripts

- `npm run dev` — local site
- `npm run build` — production build
- `npm run lint` — lint
