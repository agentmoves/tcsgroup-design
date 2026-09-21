import React from 'react';

/**
 * TCS Group logo — the official pillar mark + wordmark.
 * The brand mark is monochrome, so `tone` selects the black or white asset:
 *   tone="light" -> white (for dark/navy surfaces)
 *   tone="navy" | "black" -> black (for light surfaces)
 *
 * Assets resolve relative to the loaded design-system bundle, so the logo
 * works in cards, UI kits, templates, and consuming projects without config.
 * Override with an explicit `src` if needed.
 */

// Resolve the design-system root from the bundle <script> URL (falls back to ./).
const DS_BASE = (() => {
  try {
    const s = document.querySelector('script[src*="_ds_bundle"]');
    if (s && s.src) return s.src.replace(/\/_ds_bundle\.js.*$/, '');
  } catch (e) {}
  return '.';
})();

const ASSET = {
  'full-black': DS_BASE + '/assets/logo-mark-black.png',
  'full-white': DS_BASE + '/assets/logo-mark-white.png',
  'kw-black':   DS_BASE + '/assets/logo-kw-black.png',
  'kw-white':   DS_BASE + '/assets/logo-kw-white.png',
};

export function Logo({ variant = 'full', tone = 'navy', size = 32, src, alt = 'TCS Group', style, ...rest }) {
  const shade = tone === 'light' ? 'white' : 'black';
  const key = (variant === 'kw' ? 'kw' : 'full') + '-' + shade;
  const source = src || ASSET[key];
  // Full lockup is a wide wordmark; kw is wider still. Height keys off `size`.
  const height = Math.round(size * 1.25);
  return (
    <img
      src={source}
      alt={alt}
      style={{ height, width: 'auto', display: 'inline-block', alignSelf: 'flex-start', flex: '0 0 auto', ...style }}
      {...rest}
    />
  );
}
