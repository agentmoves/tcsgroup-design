Agent headshot + contact block that auto-fills from the embedded TCS roster — use it anywhere an agent's photo, name, phone, or email appears, instead of hand-typing details or leaving an image placeholder.

```jsx
<AgentBadge slug="gaurav-gambhir" showTitle />
<AgentBadge slug="alex-delcourt" size={96} shape="circle" tone="dark" align="left" />
```

Need just the data? `getAgent()` accepts a slug, full name, or email:

```jsx
const a = getAgent('gaurav-gambhir');
// { slug, name, title, team, phone, email, photo }  photo is a ready-to-use URL
<img src={agentPhoto('Elaine Reby')} />
```

Notes
- `AGENTS` is the whole roster keyed by slug — map it for team grids.
- Photo URLs resolve against the loaded `_ds_bundle.js`, so they work in consuming projects with no path fiddling.
- Unknown slug → logo fallback tile, never a broken image.
- Two agents have no phone on file (Alex Delcourt, Hassen Momtathel); `showPhone` simply omits the line rather than inventing one.
