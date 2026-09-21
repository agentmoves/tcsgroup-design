---
name: tcs-group-design
description: Use this skill to generate well-branded interfaces and assets for TCS Group (a Philadelphia / South Jersey full-service real estate brokerage), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Non-negotiable: ask before populating a template

Templates in `templates/` contain sample content so they render — it is **never
shippable**. Before filling one in for real use, ask the user for the required inputs and
wait: listing photos, address, price, beds/baths/sqft, event dates, market figures, agent
headshot and contact info, CTA destinations. **Never invent an address, price, statistic,
phone number, or client story, and never deliver an asset with a gray image placeholder
still in it.** Each template has an `ASK FIRST` comment beneath its `@template` comment
listing exactly what it needs — read it first.

Agent details are already on file: pull name, title, team, phone, email, and headshot
from `assets/agents/roster.json` (headshots at `assets/agents/<slug>.png`) rather than
asking, and only ask if the person isn't listed.

## Quick reference
- **Global CSS:** link `styles.css` (imports all tokens + fonts).
- **Components:** `window.DesignSystem_7a2e65` after loading `_ds_bundle.js`
  (Logo, Button, Tag, Input, Select, Card, PropertyCard, StatBlock, SectionHeading,
  Testimonial, Navbar, Footer).
- **Colors:** Salmon `#F0716D` (accent/CTA), Navy `#223659` (primary), Sky `#D4EEF7`
  (tint), Slate `#7C7F8C` (neutral).
- **Type:** Red Hat Display everywhere — 600 SemiBold titles, 400 Regular subheaders, 300 Light body (per brand style guide; Proxima Nova is the print counterpart).
- **Signatures:** pill buttons, navy hero fields with salmon accents, soft navy-tinted
  shadows, uppercase salmon eyebrows, sentence-case headlines, no emoji in UI.
- **Starter template:** `templates/landing-page/`. **Product recreation:** `ui_kits/website/`.
