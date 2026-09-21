# TCS Group — Design System

Brand + product design system for **TCS Group**, a full-service real-estate
brokerage in Philadelphia and South Jersey (TCS Group at Keller Williams).
Everything here lets an agent design on-brand TCS interfaces, marketing pages,
decks, and assets.

- **Live product:** https://www.tcsgroup.com/
- **Namespace:** `window.DesignSystem_7a2e65` (import components from here in card/kit HTML)
- **Global CSS entry:** `styles.css` (link this one file)

## Sources used
- `uploads/TCS Group_  Brand Details (2).pdf` — official brand guide (voice, avatars,
  products, and the color palette). Color hexes were read directly from the palette
  image on its "Brand Colors" page.
- `uploads/colors.png` — extracted color-palette swatch from the PDF.
- `uploads/679fe3f4c22a0a8617db4793.png`, `uploads/tcsg-kw-dk.png` — official TCS logos
  supplied by the client (primary pillar mark + KW co-brand). Cleaned, transparent
  black/white variants live in `assets/`.
- https://www.tcsgroup.com/ — live site (structure, copy, navigation, products).

> **⚠️ Substitutions to confirm — please read "Open questions" at the bottom.**

---

## The company

TCS Group, founded by Gaurav Gambhir, has "simplified real estate since 2008."
It is a full-stack brokerage — buying, selling, renting, property management,
renovations, luxury (Black Label), and a moving concierge — spanning Philadelphia,
South Jersey and licensed in five states (PA, NJ, NY, DE, MD). 80+ agents,
4,500+ managed rental units, ~1 in 5 Philadelphia home sales.

**Products / offers** (from the brand guide):
- TCS Buyer Concierge Program (buying) · TCS Listing Success System (selling)
- TCS Easy Rent Match (renting) · Black Label Experience (luxury)
- TCS Moving Concierge (relocation) · Burn-To-Earn™ (first-time-buyer education)

**Sub-brands / partners:** Rent Philly, Black Label, Keller Williams Empower.

---

## CONTENT FUNDAMENTALS

**Overall vibe:** empowering, strategic, approachable, results-driven, authentic.
Confident but never arrogant; educational, not preachy; visionary but grounded.

**Person / address:** speaks to "you" (the client) as "we" (TCS). Warm and direct —
"We're by your side every step of the way." First-person plural for the brand.

**Casing:** Headlines are sentence case ("Simplifying your real estate experience"),
occasionally with a highlighted phrase. Eyebrows/labels are UPPERCASE with wide
tracking. Trademarked terms keep their ™ ("Burn-To-Earn™").

**Language style:** plainspoken + purposeful, math-backed, conversational + strategic,
with clear CTAs ("Buy", "Sell", "Rent", "Get Started", "Find a Home"). Real-estate
plain talk that demystifies ("crushing buying myths, breaking down the numbers").
Slang appears only when quoting the audience ("throwing money away on rent,"
"house hacking").

**Numbers matter.** The brand loves proof: "4,500+ units," "1 in 5 home sales,"
rent-vs-own math. Use the mono type for figures where it reinforces the "math" story.

**Emoji:** the internal brand guide uses emoji as section markers, but the
public-facing product does **not**. Do not use emoji in customer-facing UI or copy.

**Example lines (real):**
- "Simplifying your Real Estate Experience"
- "Known for our local expertise. Made famous by our results."
- "The Perfect Home At The Best Price." / "TCS Agents Sell Your Home Fast." / "Discover A Simpler Way Of Renting."
- "When you join TCS, you are joining a tight-knit family."

---

## VISUAL FOUNDATIONS

**Colors** — four-pillar palette from the brand guide:
- **Salmon `#F0716D`** — primary accent: CTAs, eyebrows, energy, quote marks. Used sparingly but boldly.
- **Navy `#223659`** — primary brand: headers, footers, hero fields, body headings, most text.
- **Sky `#D4EEF7`** — soft supporting tint: highlights within navy, backgrounds, secondary chips.
- **Slate `#7C7F8C`** — neutral: secondary text, borders, muted labels.
- **Black `#000000`** — the logo's native color; high-contrast brand black (`--tcs-black`).
Neutrals are cool/navy-tinted (ink `#16213A`, paper `#FBFBFC`, cloud `#F4F5F7`, line `#E3E5EA`).
The dominant composition is a **deep navy field with salmon accents and sky highlights**.

**Type** — the brand web face is **Red Hat Display** (per the TCS style guide):
600 SemiBold for titles/headers, 400 Regular for subheaders, 300 Light for body.
**Proxima Nova** is the print counterpart (not web-licensed here). Headlines run
heavy (700–800) with tight tracking (-0.03em) and balanced wrapping; eyebrows are
uppercase 700 at 0.14em, in salmon.

**Spacing / layout:** 4px base scale, ~1200px content container. Generous section
padding (~80px vertical on hero/marketing). Grid-based (3-up cards, 4-up stats).

**Backgrounds:** solid navy gradients (`140deg`, navy → lighter navy) for heroes and
CTA bands; light paper/cloud for content sections; salmon-tint for accent panels.
No busy patterns, no textures, no heavy grain. Photography (property/lifestyle) is
warm and editorial where present.

**Corner radii:** soft-but-architectural — cards 16px, inputs 12px, small chips 8px,
**pills (999px)** for buttons and tags. This pill CTA is a signature.

**Shadows:** cool, navy-tinted, soft and low (`rgba(34,54,89,·)`). Cards sit close to
the page (sm), lift on hover (lg). No hard/black drop shadows.

**Cards:** white surface, 1px hairline border (`--tcs-line`), soft shadow, 16px radius.
Interactive cards lift 3px on hover with a deeper shadow.

**Motion:** restrained. 120–220ms ease-out transitions; hover = 1px lift + shadow +
(links) color shift to salmon. Press = settle. No bounces, no infinite loops.
Stat counters animate up on the live site (represented statically here).

**Hover / press states:** buttons darken (salmon→`#E4574F`, navy→`#1A2A47`) and lift;
ghost/outline get a faint tint fill; links shift navy→salmon.

**Transparency/blur:** the header is transparent over hero imagery (light text, faint
bottom border); otherwise surfaces are solid. Blur is not a core motif.

---

## ICONOGRAPHY

The live TCS site uses **simple single-weight line icons** (search, share, social,
directional chevrons) plus standard social glyphs. There is **no custom icon font or
SVG sprite** exposed on the site, and no emoji in customer-facing UI.

- **In this system we use [Lucide](https://lucide.dev) via CDN** as a close stand-in —
  its clean, consistent 2px-stroke line style matches the site's simple icons.
  Load `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`, place
  `<i data-lucide="name"></i>`, then call `lucide.createIcons()`.
  ⚠️ *Substitution — flagged below.* Replace with TCS's own icon set if one exists.
- Chevron/caret UI (e.g. the Select arrow) uses a Unicode `▾` for zero-dependency reliability.
- **Minimum logo size:** for **print**, never scale the logo below the brand guide's
  minimum (the small bottom-right reference size) — always use a scalable vector for print.
  For **digital/screen** there is no fixed minimum (left to the designer per the guide);
  test for legibility. Our templates keep the mark at ≥30px tall on screen and ≥0.5in on
  print flyers. There is no maximum size when a vector format is used.
- **Logos:** the official TCS marks (client-supplied) live in `assets/` as cleaned,
  transparent black + white variants — the pillar mark + "TCS GROUP" wordmark, plus
  the "TCS GROUP kw" Keller Williams co-brand lockup. The `Logo` component serves them
  and auto-resolves the asset path from the loaded bundle. The mark is monochrome —
  never recolor it; use `tone="light"` (white) on dark surfaces, `tone="navy"` (black)
  on light.
- **Hosted logo URLs:** for **email and landing pages** (anything rendered outside
  this project), use the CDN URLs in **`assets/HOSTED-LOGOS.md`** — one for dark
  backgrounds, one for light. Project-relative paths won't resolve for email
  recipients or external sites.

---

## Components

Reusable primitives under `components/`, exported on `window.DesignSystem_7a2e65`.
Each has a `.jsx`, `.d.ts`, `.prompt.md`, and a group `@dsCard` thumbnail.

**brand/**
- **Logo** — TCS Group typographic wordmark (full lockup or "TCS." mark; light/dark tones; optional tagline).
- **AgentBadge** — agent headshot + name/title/phone/email block, auto-filled from the
  embedded 45-person roster by slug, full name, or email. Ships the `Agent` helper
  namespace (`Agent.get(slug)`, `Agent.photo(slug)`, `Agent.all`) and the raw `AGENTS`
  map, so consuming projects resolve headshots and contact details straight from the
  bundle — no `roster.json` copy and no relative-path guessing.

**core/**
- **Button** — pill CTA: `primary` (salmon), `secondary` (navy), `outline`, `ghost`; sizes; icons.
- **Tag** — status pill / category chip (For Sale, For Rent, Featured, neighborhoods).
- **Input** — labelled text field with icon/prefix, hint & error, navy focus ring.
- **Select** — styled native dropdown matching Input.

**content/**
- **Card** — base white surface with soft navy shadow; optional hover-lift.
- **PropertyCard** — signature listing card: photo, status tags, price, address, bed/bath/sqft.
- **StatBlock** — big brand figure + uppercase label (the site's counters).
- **SectionHeading** — salmon eyebrow + display title + description.
- **Testimonial** — client review card with star rating and salmon quote mark.

**navigation/**
- **Navbar** — site header (logo, nav, phone, CTA); solid or transparent-over-hero.
- **Footer** — navy footer with link columns, office contact, and socials.

---

## UI kits

- **`ui_kits/website/`** — interactive recreation of the TCS Group site. Screens:
  `HomeScreen`, `ListingsScreen`, `PropertyDetailScreen`, `ContactScreen`, wired
  click-through in `index.html`. See its `README.md`.

## Templates

### RULE: ask before you populate (applies to every template)

Templates ship with realistic sample content so they render. **That sample content is
never shippable.** Before filling any template in for real use, **ask the user for the
required inputs and wait for the answer** — never invent an address, price, statistic,
phone number, or client story, and never leave a gray image placeholder in a delivered
asset.

Each template carries an `ASK FIRST` HTML comment directly beneath its `@template`
comment listing exactly what to ask for. Read it before editing the file.

Typical required inputs by template family:
- **Listing assets** (flyers, social posts, carousels) — listing photos, address, price,
  beds/baths/sqft, feature highlights, and the agent.
- **Open house** — all of the above plus the event date and time window, and the hosting
  agent(s).
- **Market updates** — the reporting month/period and the real county + neighborhood
  figures. Never fabricate market data.
- **Wealth / equity reports** — address, purchase date and price, current value,
  mortgage balance, comps.
- **Thumbnails (YouTube / Shorts)** — the headline text, chosen layout, background photo,
  and whether to use the agent headshot or the logo.
- **Funnels, emails, guides, signatures** — the agent's name, title, phone, email, and
  headshot, plus the offer copy, CTA destination, and any form/booking embed code.

**Agent data is already on file:** pull any agent's name, title, team, phone, email, and
headshot path from `assets/agents/roster.json` (45 people) instead of asking, and only
ask when the person isn't listed there. Headshots live at
`assets/agents/<slug>.png`.

Starter folders under `templates/` that consuming projects copy (repoint `ds-base.js`):

- **Logo Outro Sting** (`templates/logo-outro/`) — animated 5s 1920×1080 logo sting for the
  tail of a video. The lockup assembles itself: the pillar mark builds upward, then "TCS"
  and "GROUP" are written on left-to-right behind a travelling sky-blue nib, a salmon rule
  draws, the web address settles, and it dissolves back to the empty navy field on a clean
  loop. The build uses clip-path windows measured off the real artwork's alpha channel
  (mark 0–30% of width; "TCS" y 0.7–71.6%; "GROUP" y 81.1–98.6%) — the logo is never
  redrawn, only revealed. Built on the motion engine, so the timeline (scene trims, speed,
  repeat) is user-editable and it exports to video via Share → Export. Five beats:
  Pillar 1.0s, Wordmark 1.3s, Group 1.0s, Endorse 1.1s, Close 0.6s.
- **`landing-page/`** (`LandingPage.dc.html`) — brokerage landing page (navy hero,
  search, featured listings, stats, footer) composing the DS components.
- **`listing-social/`** (`ListingSocial.dc.html`) — Instagram 4:5 (1080×1350) listing
  status post. One template, `status` prop covers Just Listed / Under Contract /
  New Price / Sold / Coming Soon / Open House. Drop in listing + agent photos; edit
  address and agent fields.
- **`listing-flyer/`** (`ListingFlyer.dc.html`) — printable 8.5×11 listing flyer:
  address header, description, highlights, two listing photos, agent card, branded
  footer. Drop in listing + agent photos.
- **`open-house-social/`** (`OpenHouseSocial.dc.html`) — IG 4:5 Open House post:
  full-bleed listing photo, date/time, hosting agents, branded overlay.
- **`open-house-flyer/`** (`OpenHouseFlyer.dc.html`) — printable Open House flyer with
  event date/time bar and hosting-agent card.
- **`listing-carousel/`** (`ListingCarousel.dc.html`) — 1080×1080 full listing carousel:
  cover, four captioned photo slides, specs/features details slide, agent CTA.
- **`listing-carousel-curiosity/`** (`CuriosityCarousel.dc.html`) — 1080×1080 just-listed
  carousel built to drive showings: exactly three "wow" photos, **never** the kitchen,
  primary bedroom, or primary bath (an internal selection rule — never stated in the
  post copy), then an agent CTA. Its `README.md` has the photo-selection rules for
  picking three wows from an agent's photo dump.
- **`email-basic/`** (`tcs-email-template.html`) — send-ready HTML email: navy header,
  eyebrow/headline/body, three-stat strip, bulletproof CTA button, and a footer with
  the logo, **1425 Locust Street, Philadelphia, PA 19102**, and an unsubscribe link.
  Table-based, fully inlined, **zero images** for deliverability. See its `README.md`.
- **`buyer-guide/`** (`BuyerGuide.dc.html`) — 9-page printable lead-magnet guide replacing
  the Burn-to-Earn™ book: cover, author story + credentials, the formula, old-vs-new
  comparison, the 6 myths, grant &amp; loan programs, the 6-variable math, leverage examples,
  and a CTA back cover. Built on `doc-page` so it exports to PDF at letter/A4.
- **`burn-to-earn-calculator/`** (`BurnToEarnCalculator.dc.html`) — interactive rent-vs-own
  calculator implementing the 6-variable Burn-to-Earn™ formula (rent, mortgage at $600
  per $100k borrowed, tax &amp; insurance, maintenance, opportunity cost, tax benefit) with
  live math, 5-year equity and 10-year wealth outlook. For first-time buyer consultations.
- **`property-wealth-report/`** (`PropertyWealthReport.dc.html`) — one-page printable
  homeowner equity report: navy masthead, headline equity + ZIP-change band, purchase/
  equity position tiles, three ways to use equity, neighborhood insight + sold-comps
  table, agent footer. Built on `doc-page` so it exports to PDF at letter/A4.
- **`youtube-script-deck/`** (`YoutubeScriptDeck.dc.html`) — two-column recording deck:
  animated audience view (left) + non-scrolling presenter script with reveal buttons
  (right); each reveal maps 1:1 to a `[CLICK]`. See its `README.md` for the rules.
- **`youtube-thumbnail/`** (`YoutubeThumbnail.dc.html`) — 1280×720 thumbnails in four
  layouts (Hook / Home Tour / Market Data / Big Question) with agent-headshot and
  background photo slots; blank copy tweaks fall back to per-layout presets. See its
  `README.md`.
- **`market-top-listings/`** (`TopListings.dc.html`) — Top-5 favorite-listings email
  graphic (salmon frame, per-listing photo + price/specs/mortgage). Edit `TOP_LISTINGS`.
- **`market-update/`** (`MarketUpdate.dc.html`) — county market-update email graphic
  (county stats table + neighborhood appreciation table + agent photo). Edit `COUNTIES`/`GROUPS`.
- **`market-combined/`** (`MarketCombined.dc.html`) — market update + Top-5 listings side
  by side on one black canvas (composes the two above via iframes; edit data in each source).
- **`market-update-social/`** (`MarketUpdateSocial.dc.html`) — square 1080×1080 county
  snapshot for Instagram/Facebook feed.
- **`market-update-carousel/`** (`MarketUpdateCarousel.dc.html`) — 1080×1080 multi-slide
  carousel (cover → county stats → per-county neighborhoods → CTA); advance with the
  off-image nav or ←/→ and screenshot each slide to post.
- **`funnel-optin/`** (`FunnelOptin.dc.html`) — niche lead-capture landing page (headline,
  value bullets + form-embed slot for a guide/consult opt-in). Paste your form embed into the slot.
- **`funnel-services/`** (`FunnelServices.dc.html`) — niche services landing page (hero,
  services offered, and a booking-widget iframe slot for scheduling a consult).

Photo areas use `<image-slot>` (`assets/image-slot.js`) — the user drags in the
listing photo and agent headshot; drops persist. Branded backgrounds use
`assets/scene-*.png` (the TCS sky + rolling-hills motif).

## Slides

- **`slides/`** — sample 1280×720 deck frames: `TitleSlide`, `StatSlide`, `QuoteSlide`,
  `ServicesSlide`, `ClosingSlide`. Use as a layout reference for TCS presentations.

## Foundation cards

- **`guidelines/`** — specimen cards for Colors, Type, Spacing/Radius/Shadow, and
  Brand (voice, brand-in-use) shown in the Design System tab.

---

## Index / manifest (root)

- `styles.css` — global entry (imports only) → `tokens/`
  - `tokens/fonts.css` (webfonts), `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `base.css`
- `components/{brand,core,content,navigation}/` — primitives + cards
- `ui_kits/website/` — product recreation
- `templates/{landing-page,listing-social,listing-flyer,open-house-social,open-house-flyer,youtube-script-deck,youtube-thumbnail,listing-carousel,listing-carousel-curiosity,property-wealth-report,buyer-guide,email-basic,burn-to-earn-calculator,market-top-listings,market-update,market-combined,market-update-social,market-update-carousel,funnel-optin,funnel-services}/` — starter templates
- `assets/` — logos (mark + KW co-brand, black/white), `scene-*.png` backgrounds, `image-slot.js`
- `assets/agents/` — 45 agent headshots (`<slug>.png`, e.g. `elaine-reby.png`), a logo
  fallback (`_logo-fallback.png`) for agents who opt out of a photo, and `roster.json`
  (name, slug, photo, title, team, phone, email per agent — merged from the active-agent
  roster). **The same roster is embedded in the `AgentBadge` component**, so consuming
  projects resolve headshots and contact details from the bundle with no file copying:
  `Agent.get('gaurav-gambhir')` → name/title/phone/email/photo URL.
  Templates with an agent block expose an `agentPhoto` prop as a **dropdown of roster
  slugs** — pick an agent and the headshot, phone, and email all prefill; a manual photo
  drop still overrides. Every active agent now has a phone and email on file. Three agents
  (Jon Hummel, Landry Nguema, Michael Gregor) have opted out of a headshot — they
  resolve to the logo tile (`_logo-fallback.png`) automatically.
- `slides/` — sample deck frames
- `guidelines/` — foundation specimen cards
- `uploads/` — source brand PDF + extracted color image
- `SKILL.md` — Agent-Skills-compatible entry point
- `readme.md` — this file

---

## Open questions / substitutions to confirm

1. **Fonts — updated to brand ✅** Web = **Red Hat Display** (600 SemiBold titles /
   400 Regular subheaders / 300 Light body), loaded from Google Fonts and wired to
   `--font-*` so every template inherits it. **Proxima Nova** is the print counterpart
   (licensed font — supply the files if you need print exports to embed it).
2. **Logos — received & wired in** ✅ (primary mark + KW co-brand, black & white).
   Still helpful: a **vector (SVG)** version for crisp scaling, plus the **Black Label**
   and **Rent Philly** sub-brand marks, and real property/hero photography.
3. **Icons.** Using **Lucide** as a match for the site's simple line icons — confirm or
   provide the real icon set.
4. **Salmon hex.** Read as `#F0716D` from the palette image (the guide labelled it
   only "Salmon"). Confirm if you have the exact brand value.
