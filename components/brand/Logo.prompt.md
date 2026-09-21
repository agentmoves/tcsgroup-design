**Logo** — the official TCS Group logo (pillar mark + wordmark). Monochrome PNG; `tone` picks the black or white asset.

```jsx
<Logo tone="navy" size={32} />          {/* black, for light surfaces */}
<Logo tone="light" size={40} />         {/* white, for dark/navy surfaces */}
<Logo variant="kw" tone="navy" size={28} /> {/* TCS Group + KW co-brand */}
```

Variants: `full` (default) and `kw` (KW co-brand lockup). Asset paths resolve from the loaded bundle automatically; pass `src` to override.
