# YouTube Script Deck — usage notes

A two-column recording deck for TCS Group YouTube videos: a clean **animated
audience view on the left**, and a **non-scrolling presenter script on the
right** with reveal buttons. Advance with the right-panel **Reveal ▸** button,
the floating **‹ / ›** controls, or the keyboard (**→ / Space** advance, **←**
back). Edit the `SLIDES` array in the logic to build your episode.

## Rules (follow every time)
- **Presenter script (right column) renders at ≥18px and never scrolls.** If a
  slide won't fit at 18px, split it into more slides — there is no slide-count
  limit. Max ~2 spoken beats per slide (one on load, one per click).
- **Every on-slide reveal maps 1:1 to a `[CLICK]` in the script.** In data:
  `reveals[i]` (left) pairs with `beats[i]` (right); `beat0` is the on-load line.
- **Audience (left) side stays clean** — no phones/footers except the intended
  logo and phone-reveal moments.
- **Logos on the first + last slides** (`kind: 'intro'` / `'cta'`); **digit-by-digit
  phone** on intro + CTA; **count-up animation** for headline stats (`kind: 'stat'`).
- **Entrance motion is lift-only (no opacity fade)** so exports never render blank.
- When finished, **save as standalone HTML**.

## Slide data
Each entry in `SLIDES`:
- `kind`: `'intro' | 'points' | 'stat' | 'cta'`
- `eyebrow`, `title`, `subtitle` — left headline text
- `phone` — shows the digit-by-digit phone (intro/cta)
- `value`, `prefix`, `suffix`, `statLabel` — for `kind:'stat'` count-up
- `beat0` — the spoken line shown on load
- `reveals: []` — left items revealed one per click (lift-in)
- `beats: []` — script lines, one per reveal (write each with a leading `[CLICK]`)

Keep `beats.length === reveals.length` so the 1:1 click mapping holds.
