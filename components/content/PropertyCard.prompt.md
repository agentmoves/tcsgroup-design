**PropertyCard** — the signature TCS listing card: photo, status tags, price, address, and a bed/bath/sqft spec row.

```jsx
<PropertyCard
  image="https://…/listing.jpg"
  status="For Sale" featured
  price="$1,000,000"
  address="528 Berks Street"
  locality="Philadelphia, PA 19122"
  beds={4} baths={3} sqft="3,000"
  agent="TCS Group" />
```

Omit `image` for a branded navy placeholder. `statusTone` colors the status pill (`salmon` sale, `sky`/`navy` rent, `success` sold).
