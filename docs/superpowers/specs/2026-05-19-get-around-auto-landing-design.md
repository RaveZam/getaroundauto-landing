# Get Around Auto — Landing Page Design

**Date:** 2026-05-19
**Stack:** Next.js (App Router) + Tailwind CSS

## Business

- **Name:** Get Around Auto
- **Type:** Used / quality second-hand car dealership
- **Phone:** 870-226-1073
- **Address:** 1150 Highway 49 West, Helena, Arkansas 72390
- **Vibe:** Trustworthy & local — family-feel, southern, dependable

## Visual System ("Trusted Blue Collar")

- **Background:** off-white `#F7F5F0`
- **Primary:** navy `#0F2A47`
- **Accent:** brick-red `#B23A2C`
- **Body text:** warm gray `#5A5F66`
- **Cards:** white `#FFFFFF` with 1px border, soft hover shadow
- **Type:** Inter for everything (700-800 display, 400-500 body), tight tracking on large headlines
- **Radius:** rounded-md (no pill shapes), no gradients
- **Phone numbers** always rendered as `tel:` links

## Sections (top → bottom)

1. **Header / Nav** — logo wordmark, anchor nav (Inventory, About, Why Us, Contact), tappable phone number on the right
2. **Hero** — two-column split: copy left (headline, subhead, primary CTA "Call Now" + secondary "View Inventory"), placeholder image right. Address line + phone under copy.
3. **Featured Inventory** — 6-card grid (3×2 desktop, 1-col mobile). Each card: car silhouette placeholder, year/make/model, mileage, price, "View Details" button.
4. **About / Our Story** — two-column: placeholder image left, story copy right. Emphasizes family-owned, Helena AR roots, personal service.
5. **Why Choose Us** — 4-up icon grid: Quality Inspected, Fair Pricing, Financing Help, Local & Friendly
6. **Services** — 3-up: Sales, Trade-Ins, Financing Assistance
7. **Testimonials** — 3 placeholder quote cards
8. **Contact / Find Us** — split: address + hours + phone left, simple embedded static map placeholder right
9. **Footer** — name, address, phone, social placeholders, copyright

## Placeholder Image Strategy

Two `<img>` placeholder components used for:
- Hero image (storefront / lot vibe)
- About section image (interior / team)

All other images (inventory cars, map) use SVG silhouettes / patterned placeholders so the page reads well without real photos.

## File Structure

```
app/
  page.tsx              # composes all sections
  layout.tsx            # already exists, add Inter + metadata
  globals.css           # already exists, add color tokens
components/
  site/
    Header.tsx
    Hero.tsx
    FeaturedInventory.tsx
    About.tsx
    WhyChooseUs.tsx
    Services.tsx
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
  ui/
    ImagePlaceholder.tsx   # blank placeholder w/ label
    CarPlaceholder.tsx     # svg car silhouette
    PhoneLink.tsx
lib/
  business.ts            # business info constants
  inventory.ts           # placeholder car data
```

## Out of Scope (first draft)

- Real backend / CMS
- Inventory detail pages
- Working contact form submission
- Interactive map (use static placeholder)
- Auth, admin, dashboard
