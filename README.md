# Driving Tone / نغمة القيادة — Luxury Mobility Website

Production-ready static React/Vite/Tailwind website for GitHub Pages.

## Brand direction

Driving Tone is positioned as a Saudi luxury mobility concierge, not a normal car rental company.

Core concept: **نغمة الوصول / The Tone of Arrival**

Hero:

- **لكل حضور نغمة. نرتّبها لك.**
- **Every Arrival Has a Tone. We Arrange Yours.**

## Tech stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router HashRouter for GitHub Pages-safe routing
- Static editable data files
- No backend
- No database
- No paid APIs

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build production

```bash
npm run build
```

The production site is generated in `dist/`.

## GitHub Pages deployment

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

### Steps

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, go to `Settings` → `Pages`.
4. Set **Source** to **GitHub Actions**.
5. Push to `main` again or run the workflow manually.
6. GitHub will deploy the `dist/` build to Pages.

The project uses Vite `base: './'` and React Router `HashRouter`, so it works under repository GitHub Pages URLs without server rewrites.

## Update WhatsApp number

Edit:

```text
src/data/site.ts
```

Update:

```ts
whatsappNumber: '966543333036'
phoneHref: '+966543333036'
phone: '+966 54 333 3036'
```

## Edit fleet data

Edit:

```text
src/data/fleet.ts
```

Each car supports:

- Arabic and English names
- Model year
- Category
- Tags
- Seats/luggage
- Service types
- Duration options
- Occasion tags
- Delivery/chauffeur flags
- Gallery images
- WhatsApp car inquiry data

## Edit services

Edit:

```text
src/data/services.ts
```

Service landing pages are generated from this data.

## Edit FAQs

Edit:

```text
src/data/faqs.ts
```

FAQ schema is generated from the same data.

## Edit SEO

Edit:

```text
src/data/seo.ts
```

Each page includes Arabic/English title and description.

## Replace images

Replace files in:

```text
public/images/
public/images/fleet/
public/images/services/
```

Read:

```text
public/images/README.md
```

Important: replace placeholders with real Driving Tone fleet photography before launch.

## Analytics preparation

Tracking utility:

```text
src/utils/tracking.ts
```

Events are pushed to `window.dataLayer` and `gtag` if present. In development, events are logged to the console.

## WhatsApp message logic

Messages are defined in:

```text
src/data/whatsappMessages.ts
src/utils/whatsapp.ts
```

Supported inquiry types:

- General inquiry
- Specific car inquiry
- Airport transfer
- Chauffeur request
- Wedding/event request
- Corporate/monthly rental
- Hotel delivery
- VIP guest reception

## Content replacement checklist before launch

- Real logo files
- Real fleet photos and galleries
- Exact fleet list, trims, years, colors
- Official location and Google Maps link
- Final rental terms and requirements
- Insurance and deposit policy
- Delivery areas and fees
- Chauffeur availability and standards
- Verified Google reviews
- Business documents if displayable
- GA4/GTM/Meta/TikTok IDs

## Design rules preserved

- No discount-first copy
- No “best price” positioning
- No fake reviews
- No cheap marketplace grid
- No full green WhatsApp buttons
- No overclaiming chauffeur/delivery availability
- Arabic RTL by default with English LTR support
