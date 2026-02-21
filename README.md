# Education Platform

A multilingual online course catalog showcasing General Translation's internationalization features for Next.js.

**[Live Demo](https://education-platform.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This demo app presents a course catalog with categories, difficulty badges, ratings, and pricing — all fully internationalized. It demonstrates how GT handles complex i18n patterns like pluralization, currency formatting, number formatting, and conditional rendering by locale.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering (difficulty badges)
- `<Var>` — Dynamic values within translations
- `<LocaleSelector>` — Language picker
- `getGT` — String translations (metadata, aria labels)
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/education-platform.git
cd education-platform
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
