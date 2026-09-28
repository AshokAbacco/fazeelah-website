# FAZEELAH ENGLISH MEDIUM SCHOOL — Website (v2)

*Education With Values* · Dharmavaram, Sri Sathya Sai District, Andhra Pradesh

A responsive, animated school website built with **Vite + React (JavaScript, `.jsx`)**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Design — "Heritage" theme

A clean, classic look with modern details:

| Token   | Colour    | Used for                                   |
| ------- | --------- | ------------------------------------------ |
| Forest  | `#173F35` | Primary buttons, dark sections, footer     |
| Ivory   | `#FBF9F4` | Page background                            |
| Sage    | `#E7EEE9` | Alternate sections, icon tiles             |
| Clay    | `#B95F3A` | Accent labels, highlights, admission CTAs  |
| Ink     | `#18221F` | Headings and body text                     |

Typography: **Fraunces** (classic serif headings) + **Plus Jakarta Sans** (body).
Signature motif: **arched-window image frames**, echoing the school's arched main entrance.

## Tech stack

- React 18 + Vite 5 (JavaScript / JSX)
- Tailwind CSS 3 (theme in `tailwind.config.js`)
- Framer Motion (scroll reveals, stagger, hover lifts, drawer/modal transitions — respects `prefers-reduced-motion`)
- React Router 6 (`/`, `/about`, `/vision`, `/mission`, `/contact`, 404; `/home` redirects to `/`)
- React Icons (Lucide set `react-icons/lu` + brand icons)

## Project structure

```
src/
  main.jsx, App.jsx, index.css
  data/schoolData.js          ← SINGLE SOURCE OF TRUTH for all school content
  assets/images.js            ← image registry (optimised WebP photos + crest)
  components/
    layout/  Navbar.jsx, Footer.jsx, PlayStoreBadge.jsx, Layout.jsx, ScrollManager.jsx
    ui/      SectionHeading.jsx, PageHero.jsx, Reveal.jsx, Logo.jsx, Seo.jsx, SmartLink.jsx
    home/    HomeHero, CoreValuesStrip, IntroSection, WhyChoose, PrincipalMessage,
             ClassesSection, HostelSection, FacilitiesShowcase, Gallery, Lightbox (.jsx)
    widget/  FloatingWidget.jsx, ChatWidget.jsx, WhatsAppButton.jsx
    AdmissionCTA.jsx, ContactCard.jsx, OfficeHours.jsx
  pages/     Home, About, Vision, Mission, Contact, NotFound (.jsx)
public/      favicon, og-image, robots.txt, sitemap.xml, _redirects
```

## 📱 Adding the Play Store link (school app)

Open `src/data/schoolData.js` and set:

```js
export const schoolApp = {
  name: 'Fazeelah School App',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=YOUR.APP.ID',
};
```

While `playStoreUrl` is empty, the footer badge reads **"Coming soon on Google Play"** and is not clickable.
Once filled in, it becomes **"Get it on Google Play"** and opens the store in a new tab.

## Editing content

All text, phone numbers, emails, hours, classes, facilities, gallery items and chat-assistant
answers live in `src/data/schoolData.js`. Update a fact once and it changes everywhere.
Faculty and principal names are intentionally not shown — add them when the school supplies them.

## Deployment

Clean URLs need an SPA fallback to `index.html`. Included: `public/_redirects` (Netlify) and
`vercel.json` (Vercel). If the domain is not `https://www.fazeelah.com`, update `school.siteUrl`
in `schoolData.js` and the URLs in `index.html`, `public/robots.txt`, `public/sitemap.xml`.
