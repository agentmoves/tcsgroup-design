# TCS Group — Website UI Kit

Interactive, high-fidelity recreation of the TCS Group real-estate site
(tcsgroup.com), built from the design-system primitives.

## Screens
- **HomeScreen.jsx** — navy hero with search bar, featured listings, stats band, services, testimonials.
- **ListingsScreen.jsx** — search/filter bar + property results grid.
- **PropertyDetailScreen.jsx** — gallery, price/specs, description, sticky agent contact rail.
- **ContactScreen.jsx** — lead form with success state + office info.

`index.html` wires them into a click-through: search/CTA → Listings → a card → Detail → "Schedule a tour" → Contact.

## Notes
- Property photos are branded navy placeholders — the live site's images are
  cross-origin and could not be bundled. Pass real `image` URLs to `PropertyCard`.
- Icons come from Lucide (CDN) as a close stand-in for the site's simple line icons.
- Composes: Navbar, Footer, Button, Tag, Input, Select, PropertyCard, StatBlock,
  SectionHeading, Testimonial from `window.DesignSystem_7a2e65`.
