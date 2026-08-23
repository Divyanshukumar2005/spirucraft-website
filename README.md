# Spirucraft — Website

Official marketing/product website for **Spirucraft** — Manufacturer, Exporter and Supplier of Organic Spirulina Powder and Phycocyanin Pigment Powder, based in Medak, Telangana.

A fully static, hand-built multi-page site — no build tools, no frameworks, no backend. Just clean HTML, CSS, and vanilla JavaScript.

## 📁 Project Structure

```
.
├── index.html                                  # Home page
├── about-us/
│   └── index.html                               # About page
├── contact-us/
│   └── index.html                               # Contact page
├── products/
│   ├── index.html                               # Products overview
│   ├── organic-spirulina-powder/index.html
│   ├── phycocyanin-pigment-powder/index.html
│   └── dried-spirulina-powder/index.html
├── style.css                                    # All site styling
├── script.js                                    # Site interactivity (WhatsApp enquiry, modals, forms)
├── sitemap.xml                                  # SEO sitemap
├── robots.txt                                   # Crawler rules
├── _redirects                                   # Cloudflare Pages 301 redirects (old → new clean URLs)
├── brochure.pdf                                 # Downloadable company/product brochure
├── logo.png / wordmark.png                      # Brand assets
└── facility-*.jpg, product-*.jpg, plant-layout.jpg, rooted-in-telangana.jpg
                                                   # Facility and product photography
```

## 📸 Screenshots

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

## ✨ Features

- Fully responsive, multi-page static site with clean SEO-friendly URLs (`/about-us/`, `/products/organic-spirulina-powder/`, etc.)
- Product pages for each Spirucraft product line: Organic Spirulina Powder, Phycocyanin Pigment Powder, and Dried Spirulina Powder
- Enquiry flow that opens a pre-filled **WhatsApp chat** — no backend or database required
- Downloadable company brochure (`brochure.pdf`)
- SEO basics: sitemap, robots.txt, meta descriptions
- Cloudflare Pages `_redirects` file mapping legacy URLs to the current clean URL structure

## 🚀 Running Locally

No build step needed — it's plain HTML/CSS/JS. Just serve the folder:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node (via npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## 🛠️ Deployment

This site is built for **Cloudflare Pages** (see `_redirects` for the redirect rules), but since it's fully static it can be deployed as-is to any static host — Netlify, Vercel, GitHub Pages, or a plain VPS/Nginx setup.

## 📬 Enquiries

All "Enquire" / "Get Quote" / contact form actions open a pre-filled WhatsApp chat via `script.js` (no server involved — the WhatsApp number is set client-side). There is no exposed API key or backend secret anywhere in this repo.

## 📄 License

All rights reserved © Spirucraft. This code is provided for reference/portfolio purposes; please don't reuse the branding, product photography, or copy without permission.
