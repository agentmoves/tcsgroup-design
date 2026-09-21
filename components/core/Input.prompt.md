**Input** — labelled text field with navy focus ring.

```jsx
<Input label="Min Price" prefix="$" placeholder="0" />
<Input label="Search" leadingIcon={<i data-lucide="search" />} placeholder="City, ZIP, address" />
<Input label="Email" error="Enter a valid email" />
```

Props: `label`, `hint`, `error`, `leadingIcon`, `prefix`, `size` (`md|lg`). Passes through native input attrs.
