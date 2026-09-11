<div align="center">

# Spirucraft — Website

Official marketing/product website for **Spirucraft**, a manufacturer, exporter and supplier of organic Spirulina powder and Phycocyanin pigment powder based in Medak, Telangana. A fully static, hand-built multi-page site — no build tools, no frameworks, no backend.

![HTML/CSS/JS](https://img.shields.io/badge/Frontend-HTML%20%2F%20CSS%20%2F%20Vanilla%20JS-orange)
![Live Site](https://img.shields.io/badge/Live-spirucraft.in-2ecc71)
![Status](https://img.shields.io/badge/Status-Production-brightgreen)

</div>

---

## Contents

- [Why](#why)
- [How it works](#how-it-works)
- [What's on the site](#whats-on-the-site)
- [Running it locally](#running-it-locally)
- [Deployment](#deployment)
- [What I'd add next](#what-id-add-next)
- [License](#license)

> **Want a website like this for your own business?** If you're looking to hire a team to design and build one, [click here](https://gignova.co.in) to get in touch.

## Why

Spirucraft sells in bulk, mainly to nutraceutical, food, feed and pharmaceutical buyers — this isn't a shopping-cart business, it's a "call us and negotiate a quote" business. So instead of building e-commerce infrastructure nobody needs, the whole enquiry funnel is designed around what actually converts a B2B buyer: a clean, SEO-crawlable product page per product line, a downloadable brochure/COA for procurement teams to forward internally, and a one-tap **WhatsApp enquiry** button instead of a contact form that sits in an inbox for days.

Being an exporter also means search visibility matters more than flashy interactivity — a buyer in another state or country is going to *search* for "organic spirulina powder manufacturer India" before they ever hear the brand name. That's why the site is a set of separate, clean-URL pages (`/products/organic-spirulina-powder/`, `/products/phycocyanin-pigment-powder/`, etc.) rather than one single-page app — each product gets its own indexable page instead of being buried behind JavaScript routing.

## How it works

It's plain static HTML/CSS/JS, deployed on Cloudflare Pages:

- Each product line (`organic-spirulina-powder`, `phycocyanin-pigment-powder`, `dried-spirulina-powder`) is its own folder with its own `index.html`, giving it a clean URL and its own SEO metadata rather than living behind a query string.
- `_redirects` maps any older/legacy URLs to this current structure with 301s, so nothing breaks for anyone who bookmarked or linked an old page.
- `script.js` handles the "Enquire" / "Get Quote" buttons — they build a pre-filled WhatsApp message client-side and open a chat directly with the company, with no server or database in between.
- `sitemap.xml` and `robots.txt` cover the SEO basics so search engines can actually find and index every product page.

## What's on the site

| | |
|---|---|
| **Home — Hero** | **Home — Process (Pond to Pigment)** |
| ![Home hero](docs/screenshots/01-home-hero.png) | ![Process](docs/screenshots/02-home-process.png) |
| **Home — Products** | **Home — About preview** |
| ![Products](docs/screenshots/03-home-products.png) | ![About preview](docs/screenshots/04-home-about.png) |
| **Home — CTA & Footer** | **About — Our Story** |
| ![CTA and footer](docs/screenshots/05-home-cta-footer.png) | ![Our story](docs/screenshots/06-about-story.png) |
| **About — Founders** | **About — Vision & Mission** |
| ![Founders](docs/screenshots/07-about-founders.png) | ![Vision and mission](docs/screenshots/08-about-vision-mission.png) |
| **About — Why Choose Spirucraft** | **About — Trust** |
| ![Why choose Spirucraft](docs/screenshots/09-about-why-choose.png) | ![Trust](docs/screenshots/10-about-trust.png) |
| **About — Documentation & QA** | **About — Process Stages** |
| ![Documentation](docs/screenshots/11-about-documentation.png) | ![Process stages](docs/screenshots/12-about-process-stages.png) |
| **About — Facility Photos** | **Products — Listing** |
| ![Facility photos](docs/screenshots/13-about-facility-photos.png) | ![Products listing](docs/screenshots/14-products-listing.png) |
| **Products — Applications** | **Contact — Page** |
| ![Product applications](docs/screenshots/15-products-applications.png) | ![Contact page](docs/screenshots/16-contact-page.png) |
| **Contact — FAQ** | |
| ![Contact FAQ](docs/screenshots/17-contact-faq.png) | |

This is a real, deployed production website, not a demo — it's actively used by the business to generate enquiries: every "Enquire" / "Get Quote" click on the live site opens a real WhatsApp conversation with the company.

## Running it locally

No build step needed — it's plain HTML/CSS/JS:

```bash
python3 -m http.server 8000
# or: npx serve .
```

Then open `http://localhost:8000`.

## Deployment

Built for **Cloudflare Pages** (see `_redirects` for the redirect rules), but since it's fully static it deploys as-is to any static host — Netlify, Vercel, GitHub Pages, or a plain VPS/Nginx setup.

## What I'd add next

- Add a proper structured enquiry/quote-request form (product, quantity, destination country) as an alternative to WhatsApp — some overseas procurement teams prefer email/form trails over WhatsApp for compliance reasons
- Add a certifications/documentation page linking directly to COA and quality certificates, instead of only mentioning them in the About page copy
- Basic multi-language support, since a meaningful share of enquiries for an exporter come from outside India
- Swap the single shared `og-image.jpg` for a per-product Open Graph image, so sharing a specific product link looks right on social/WhatsApp previews instead of showing the generic homepage image

## License

<div align="center">

All rights reserved © Spirucraft. Provided for reference/portfolio purposes — please don't reuse the branding, product photography, or copy without permission.

</div>
