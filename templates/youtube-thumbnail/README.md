# YouTube Thumbnail — usage notes

1280×720 (16:9) YouTube thumbnails in **four layouts**, switchable with the
off-canvas buttons at the bottom (they never appear in the exported image) or by
setting the `layout` tweak.

## Layouts
| Layout | Best for | Photo slots |
| --- | --- | --- |
| **Hook** | Educational / value videos — big text hook, agent panel right | Agent headshot (or TCS logo) |
| **Home Tour** | Property & neighborhood tours — full-bleed photo with agent badge | Property/area photo + circular agent headshot |
| **Market Data** | Market updates & stats — oversized figure + agent panel | Agent headshot (or TCS logo) |
| **Big Question** | Curiosity / opinion videos — centered question over a photo | Area/home photo + circular agent headshot |

## Filling it out
- **Photos:** drag onto each `<image-slot>`. For agents who don't want their photo,
  drop `assets/logo-mark-white.png` (or the black mark) into the headshot slot.
- **Copy:** leave the `eyebrow` / `hook` / `subhook` tweaks **blank to use the layout's
  preset copy**; type into them to override. `specs` is Home Tour only; `statValue`
  is Market Data only.
- **Accent:** `salmon` (default), `navy`, `sky`, or `green` — recolors the eyebrow pill,
  agent panel, and badge ring.

## Rules
- Keep the hook to **3–5 words** — thumbnails are read at ~210px wide in feed.
- Headline sizes are tuned for legibility at small scale; don't go below the preset sizes.
- The TCS mark appears on every layout — never remove it, and keep it at its
  rendered size or larger (see readme.md → minimum logo size).
- Export by screenshotting the 1280×720 canvas only (the layout switcher sits outside it).
