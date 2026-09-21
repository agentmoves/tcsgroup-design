**Button** — pill-shaped action. Salmon `primary` for the main CTA, navy `secondary`, `outline`/`ghost` for lower emphasis.

```jsx
<Button variant="primary" size="lg">Find a Home</Button>
<Button variant="outline" leadingIcon={<i data-lucide="search" />}>Search</Button>
<Button variant="ghost" size="sm">Learn more</Button>
```

Sizes `sm | md | lg`. Supports `leadingIcon` / `trailingIcon`, `fullWidth`, `disabled`. Hover lifts 1px with a soft navy shadow on filled variants.
