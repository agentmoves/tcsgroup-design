/* @ds-bundle: {"format":4,"namespace":"DesignSystem_7a2e65","components":[{"name":"AGENTS","sourcePath":"components/brand/AgentBadge.jsx"},{"name":"Agent","sourcePath":"components/brand/AgentBadge.jsx"},{"name":"AgentBadge","sourcePath":"components/brand/AgentBadge.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"PropertyCard","sourcePath":"components/content/PropertyCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"assets/image-slot.js":"0394ad34f685","components/brand/AgentBadge.jsx":"0bba1b833c31","components/brand/Logo.jsx":"041633b38db9","components/content/Card.jsx":"734fbee3932d","components/content/PropertyCard.jsx":"ad9fdff9350f","components/content/SectionHeading.jsx":"cfb4720477da","components/content/StatBlock.jsx":"9d40d206377d","components/content/Testimonial.jsx":"9c88fed07793","components/core/Button.jsx":"7f140a69f0dc","components/core/Input.jsx":"a00853879498","components/core/Select.jsx":"76be124bd853","components/core/Tag.jsx":"8fb927fce68f","components/navigation/Footer.jsx":"06c54df55ca4","components/navigation/Navbar.jsx":"b32d785cc371","ui_kits/website/ContactScreen.jsx":"0a126df41009","ui_kits/website/HomeScreen.jsx":"76fed98a0ecf","ui_kits/website/ListingsScreen.jsx":"baa6adf3ad22","ui_kits/website/PropertyDetailScreen.jsx":"b6db9b6e92f2"},"inlinedExternals":[],"unexposedExports":[{"name":"agentPhoto","sourcePath":"components/brand/AgentBadge.jsx"},{"name":"getAgent","sourcePath":"components/brand/AgentBadge.jsx"}]} */

(() => {

const __ds_ns = (window.DesignSystem_7a2e65 = window.DesignSystem_7a2e65 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/brand/AgentBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group agent directory + headshot badge.
 *
 * The full active roster is embedded here so ANY consuming project can resolve an
 * agent's headshot, phone, email, and title from just a slug — no fetch, no
 * roster.json copy, no manual data entry. Photo URLs resolve against the loaded
 * design-system bundle, so they work in cards, templates, and consuming projects.
 *
 * Look an agent up with getAgent('gaurav-gambhir') or render <AgentBadge slug="..." />.
 */

const DS_BASE = (() => {
  try {
    const s = document.querySelector('script[src*="_ds_bundle"]');
    if (s && s.src) return s.src.replace(/\/_ds_bundle\.js.*$/, '');
  } catch (e) {}
  return '.';
})();
const AGENTS = {
  "ahjah-crosland": {
    "name": "Ahjah Crosland",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 408-7319",
    "email": "acrosland@tcsgroup.com",
    "licensePA": "RS375631"
  },
  "alex-delcourt": {
    "name": "Alex Delcourt",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 261-0700",
    "email": "adelcourt@tcsgroup.com",
    "instagram": "@delcourtbass",
    "licensePA": "RS366752"
  },
  "andrew-goldberg": {
    "name": "Andrew Goldberg",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(610) 420-5742",
    "email": "agoldberg@tcsgroup.com",
    "instagram": "@goldbergrealtor",
    "licensePA": "RS370959"
  },
  "boots-levinson": {
    "name": "Boots Levinson",
    "title": "Partner | Director of Rentals",
    "team": "TCS Group PA",
    "phone": "(267) 588-0035",
    "email": "boots@tcsgroup.com",
    "licensePA": "RS321333"
  },
  "carmine-simmons": {
    "name": "Carmine Simmons",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(551) 358-8116",
    "email": "csimmons@tcsgroup.com",
    "licensePA": "ABR004667",
    "licenseNJ": "NJ0792087"
  },
  "cassandra-green": {
    "name": "Cassandra Green",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 225-8364",
    "email": "cgreen@tcsgroup.com",
    "licensePA": "RS378574"
  },
  "christi-truesdell": {
    "name": "Christi Truesdell",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(518) 542-5643",
    "email": "ctruesdell@tcsgroup.com",
    "licensePA": "RS363046"
  },
  "claudia-brown": {
    "name": "Claudia Brown",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(480) 390-2429",
    "email": "cbrown@tcsgroup.com",
    "instagram": "@claudia_phillyrealtor",
    "licensePA": "RS321122"
  },
  "dan-deckelbaum": {
    "name": "Dan Deckelbaum",
    "title": "Director of Sales | Realtor",
    "team": "BlackLabel",
    "phone": "(410) 215-2240",
    "email": "dan@blacklabelkw.com",
    "licensePA": "RS319781"
  },
  "earl-gray": {
    "name": "Earl Gray",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 902-2914",
    "email": "egray@tcsgroup.com",
    "licensePA": "RS296377"
  },
  "elaine-reby": {
    "name": "Elaine Reby",
    "title": "Realtor",
    "team": "BlackLabel",
    "phone": "(480) 616-6794",
    "email": "Elaine@blacklabelkw.com",
    "licensePA": "RS362049"
  },
  "eva-mitrushi": {
    "name": "Eva Mitrushi",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 789-8293",
    "email": "emitrushi@tcsgroup.com",
    "licensePA": "RS378152"
  },
  "gaurav-gambhir": {
    "name": "Gaurav Gambhir",
    "title": "Partner | CEO",
    "team": "TCS Group PA",
    "phone": "(267) 994-3870",
    "email": "gaurav@tcsgroup.com",
    "licensePA": "AB067538"
  },
  "gavin-ludovici": {
    "name": "Gavin Ludovici",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(614) 507-7722",
    "email": "gludovici@tcsgroup.com",
    "instagram": "@dapper.realtor",
    "licensePA": "RS334859"
  },
  "gersham-fulcott": {
    "name": "Gersham Fulcott",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(484) 479-4826",
    "email": "gfulcott@tcsgroup.com",
    "licensePA": "RS336694"
  },
  "gregory-buck": {
    "name": "Gregory Buck",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(610) 513-2533",
    "email": "gbuck@tcsgroup.com",
    "licensePA": "RS330578"
  },
  "griffin-cohen": {
    "name": "Griffin Cohen",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 806-4724",
    "email": "gcohen@tcsgroup.com",
    "licensePA": "RS350322"
  },
  "jafar-oliai": {
    "name": "Jafar Oliai",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 965-1989",
    "email": "joliai@tcsgroup.com",
    "licenseNJ": "Yes"
  },
  "jason-gizzi": {
    "name": "Jason Gizzi",
    "title": "Realtor",
    "team": "BlackLabel",
    "phone": "(484) 832-3459",
    "email": "jgizzi@blacklabelkw.com",
    "licensePA": "RB069820"
  },
  "john-bolaris": {
    "name": "John Bolaris",
    "title": "Partner | Realtor",
    "team": "BlackLabel",
    "phone": "(646) 705-3642",
    "email": "bolaris@blacklabelkw.com",
    "licensePA": "RS330965"
  },
  "jon-hummel": {
    "name": "Jon Hummel",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(610) 761-4176",
    "email": "jhummel@tcsgroup.com",
    "instagram": "@jonny_no_h_",
    "licensePA": "RS354675",
    "headshotOptIn": false
  },
  "joseph-cantz": {
    "name": "Joseph Cantz",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 467-1876",
    "email": "jcantz@tcsgroup.com",
    "licensePA": "RS356576"
  },
  "juanita-jackson": {
    "name": "Juanita Jackson",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 257-7790",
    "email": "jjackson@tcsgroup.com",
    "licensePA": "RS343593"
  },
  "karina-caroni": {
    "name": "Karina Caroni",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(973) 714-4282",
    "email": "kcaroni@tcsgroup.com",
    "licensePA": "RS347945"
  },
  "landry-nguema": {
    "name": "Landry Nguema",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 901-1111",
    "email": "lnguema@tcsgroup.com",
    "licensePA": "RS317360",
    "headshotOptIn": false
  },
  "liz-guerrero": {
    "name": "Liz Guerrero",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(956) 312-6421",
    "email": "lguerrero@tcsgroup.com",
    "licensePA": "RS381494"
  },
  "madison-simone": {
    "name": "Madison Simone",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 265-4691",
    "email": "msimone@tcsgroup.com",
    "licensePA": "RS378555"
  },
  "matthew-milano": {
    "name": "Matthew Milano",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 370-9613",
    "email": "mmilano@tcsgroup.com",
    "licensePA": "RS323554"
  },
  "mia-purul": {
    "name": "Mia Purul",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 915-3013",
    "email": "mpurul@tcsgroup.com",
    "licensePA": "RS368197"
  },
  "michael-edward-cohen": {
    "name": "Michael Edward Cohen",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 570-1920",
    "email": "mcohen@tcsgroup.com",
    "licensePA": "RS328765"
  },
  "michael-gregor": {
    "name": "Michael Gregor",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(610) 585-2003",
    "email": "mgregor@tcsgroup.com",
    "licensePA": "RS149742A",
    "headshotOptIn": false
  },
  "michele-palumbo": {
    "name": "Michele Palumbo",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(484) 645-1905",
    "email": "mpalumbo@tcsgroup.com",
    "licensePA": "RS279111"
  },
  "morgan-harrington": {
    "name": "Morgan Harrington",
    "title": "Transaction Manager | Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 776-0515",
    "email": "morgan@tcsgroup.com",
    "licensePA": "RS321843"
  },
  "pam-hooks": {
    "name": "Pam Hooks",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(610) 308-5316",
    "email": "phooks@tcsgroup.com",
    "licensePA": "RS294115"
  },
  "parker-ross": {
    "name": "Parker Ross",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(717) 344-1158",
    "email": "pross@tcsgroup.com",
    "licensePA": "RS369976"
  },
  "richard-yusko": {
    "name": "Richard Yusko",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 301-6969",
    "email": "ryusko@tcsgroup.com",
    "licensePA": "RS374166"
  },
  "rijon-simon": {
    "name": "Rijon Simon",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(646) 784-6452",
    "email": "rsimon@tcsgroup.com",
    "licensePA": "RS380179"
  },
  "ryan-green": {
    "name": "Ryan Green",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 423-6474",
    "email": "rgreen@tcsgroup.com",
    "licensePA": "RS373128"
  },
  "solon-alpohoritis": {
    "name": "Solon Alpohoritis",
    "title": "Realtor",
    "team": "BlackLabel",
    "phone": "(267) 506-1757",
    "email": "solon@blacklabelkw.com",
    "licensePA": "RS313053"
  },
  "stephanie-churchill": {
    "name": "Stephanie Churchill",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 918-8111",
    "email": "schurchill@tcsgroup.com",
    "instagram": "@totallyzen",
    "licensePA": "RS328162"
  },
  "suman-chakraborty": {
    "name": "Suman Chakraborty",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(302) 559-7515",
    "email": "schakraborty@tcsgroup.com",
    "licensePA": "RS378200"
  },
  "thomas-groll": {
    "name": "Thomas Groll",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 620-9994",
    "email": "tgroll@tcsgroup.com",
    "licensePA": "AB067209"
  },
  "tyler-doppelheuer": {
    "name": "Tyler Doppelheuer",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(724) 963-3382",
    "email": "tdoppelheuer@tcsgroup.com",
    "licensePA": "RS323836"
  },
  "tyler-hopp": {
    "name": "Tyler Hopp",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(267) 475-5862",
    "email": "thopp@tcsgroup.com",
    "instagram": "@thopp27",
    "licensePA": "RS331973"
  },
  "vladymir-valentin": {
    "name": "Vladymir Valentin",
    "title": "Realtor",
    "team": "TCS Group PA",
    "phone": "(215) 444-3976",
    "email": "vvalentin@tcsgroup.com",
    "licensePA": "RS334877",
    "licenseNJ": "NJ 2443089"
  }
};

// Resolve a slug, a full name, or an email to a roster record.
function getAgent(key) {
  if (!key) return null;
  const k = String(key).trim().toLowerCase();
  if (AGENTS[k]) return withPhoto(k, AGENTS[k]);
  for (const slug in AGENTS) {
    const a = AGENTS[slug];
    if (a.name.toLowerCase() === k || a.email && a.email.toLowerCase() === k) {
      return withPhoto(slug, a);
    }
  }
  return null;
}
function withPhoto(slug, a) {
  // Agents who opted out of a headshot resolve to the logo tile, not a missing file.
  const file = a.headshotOptIn === false ? '_logo-fallback' : slug;
  return {
    slug: slug,
    ...a,
    photo: DS_BASE + '/assets/agents/' + file + '.png'
  };
}

// Headshot URL for a slug/name, falling back to the logo tile if the agent is unknown.
function agentPhoto(key) {
  const a = getAgent(key);
  return a ? a.photo : DS_BASE + '/assets/agents/_logo-fallback.png';
}

// Capitalized namespace so the helpers are reachable as window.<Namespace>.Agent.* in
// card HTML, templates, and consuming projects (only capitalized exports are exposed).
const Agent = {
  get: getAgent,
  photo: agentPhoto,
  all: AGENTS
};
function AgentBadge({
  slug,
  size = 130,
  shape = 'rounded',
  tone = 'light',
  showTitle = false,
  showPhone = true,
  showEmail = true,
  align = 'right',
  style,
  ...rest
}) {
  const a = getAgent(slug) || {
    name: 'Agent Name',
    title: '',
    phone: '',
    email: '',
    photo: agentPhoto(slug)
  };
  const fg = tone === 'light' ? '#fff' : 'var(--tcs-navy)';
  const sub = tone === 'light' ? 'rgba(255,255,255,.85)' : 'var(--tcs-slate)';
  const accent = tone === 'light' ? 'var(--tcs-sky)' : 'var(--tcs-salmon)';
  const radius = shape === 'circle' ? '50%' : shape === 'rect' ? 0 : 16;
  const reverse = align === 'left';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: reverse ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: 20,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: a.photo,
    alt: a.name,
    style: {
      width: size,
      height: size,
      objectFit: 'cover',
      borderRadius: radius,
      border: '3px solid rgba(255,255,255,.25)',
      flex: '0 0 auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: reverse ? 'left' : 'right',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      color: fg
    }
  }, a.name), showTitle && a.title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: sub,
      marginTop: 2
    }
  }, a.title) : null, showPhone && a.phone ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: sub,
      marginTop: 4
    }
  }, a.phone) : null, showEmail && a.email ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      color: accent
    }
  }, a.email) : null));
}
Object.assign(__ds_scope, { AGENTS, getAgent, agentPhoto, Agent, AgentBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AgentBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  'kw-black': DS_BASE + '/assets/logo-kw-black.png',
  'kw-white': DS_BASE + '/assets/logo-kw-white.png'
};
function Logo({
  variant = 'full',
  tone = 'navy',
  size = 32,
  src,
  alt = 'TCS Group',
  style,
  ...rest
}) {
  const shade = tone === 'light' ? 'white' : 'black';
  const key = (variant === 'kw' ? 'kw' : 'full') + '-' + shade;
  const source = src || ASSET[key];
  // Full lockup is a wide wordmark; kw is wider still. Height keys off `size`.
  const height = Math.round(size * 1.25);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: source,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'inline-block',
      alignSelf: 'flex-start',
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group base surface card — white, soft navy shadow, gentle radius.
 * Optional hover-lift for interactive cards.
 */
function Card({
  interactive = false,
  padding = 'var(--space-5)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out)',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group section heading — salmon uppercase eyebrow, display title,
 * optional supporting line. Used to open every marketing section.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  style,
  ...rest
}) {
  const titleColor = tone === 'light' ? 'var(--tcs-white)' : 'var(--text-strong)';
  const descColor = tone === 'light' ? 'rgba(255,255,255,.75)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 680 : 560,
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--tcs-salmon)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-display-m)',
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      color: titleColor,
      margin: 0,
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: descColor,
      margin: 0,
      textWrap: 'pretty'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group stat block — the animated-counter style figures from the site
 * ("Local Offices", "$XXM 2023 Closed Transactions"). Static display here.
 */
function StatBlock({
  value,
  label,
  prefix,
  suffix,
  tone = 'navy',
  align = 'center',
  style,
  ...rest
}) {
  const color = tone === 'salmon' ? 'var(--tcs-salmon)' : tone === 'light' ? 'var(--tcs-white)' : 'var(--tcs-navy)';
  const labelColor = tone === 'light' ? 'rgba(255,255,255,.7)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-display-m)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color,
      display: 'inline-flex',
      alignItems: 'baseline'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55em',
      marginRight: 2
    }
  }, prefix), value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55em',
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group testimonial / review card. Salmon quote mark, 5-star row,
 * quote body, and attribution. Reflects the site's "5 Stars" social proof.
 */
function Testimonial({
  quote,
  name,
  detail,
  stars = 5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      lineHeight: 0.6,
      color: 'var(--tcs-salmon)',
      fontWeight: 800,
      height: 22
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    },
    "aria-label": stars + ' out of 5 stars'
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < stars ? 'var(--tcs-salmon)' : 'var(--tcs-slate-300)',
      fontSize: 16
    }
  }, "\u2605"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, name), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-body-sm)',
    gap: 6
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--fs-body)',
    gap: 8
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--fs-body-lg)',
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--color-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-accent-hover)'
  },
  secondary: {
    background: 'var(--color-primary)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-primary-hover)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--tcs-navy)',
    border: '1.5px solid var(--tcs-navy)',
    '--hover-bg': 'var(--tcs-navy-050)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--tcs-navy)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--tcs-slate-100)'
  }
};

/**
 * TCS Group button. Pill-shaped, confident. Salmon = primary CTA,
 * navy = secondary action, outline/ghost for lower emphasis.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  disabled = false,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter && onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      onMouseLeave && onMouseLeave(e);
    },
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      boxShadow: hover && !disabled && (variant === 'primary' || variant === 'secondary') ? 'var(--shadow-md)' : 'none',
      background: hover && !disabled && v['--hover-bg'] ? v['--hover-bg'] : v.background,
      color: v.color,
      border: v.border,
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group text input. Clean, rounded, navy focus ring.
 * Supports an optional leading icon/adornment and prefix (e.g. "$").
 */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  prefix,
  size = 'md',
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const pad = size === 'lg' ? '14px 16px' : '11px 14px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--tcs-cloud)' : 'var(--tcs-white)',
      border: '1.5px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      padding: pad,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--tcs-slate)'
    }
  }, leadingIcon), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tcs-slate)',
      fontWeight: 600
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group select — matches Input styling. Native <select> for reliability.
 */
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const pad = size === 'lg' ? '14px 16px' : '11px 14px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: disabled ? 'var(--tcs-cloud)' : 'var(--tcs-white)',
      border: '1.5px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: pad,
      paddingRight: 40,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--tcs-slate)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  navy: {
    bg: 'var(--tcs-navy)',
    fg: 'var(--tcs-white)'
  },
  salmon: {
    bg: 'var(--tcs-salmon)',
    fg: 'var(--tcs-white)'
  },
  sky: {
    bg: 'var(--tcs-sky)',
    fg: 'var(--tcs-navy)'
  },
  slate: {
    bg: 'var(--tcs-slate-100)',
    fg: 'var(--tcs-slate-600)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--tcs-navy)',
    border: '1px solid var(--border-strong)'
  },
  success: {
    bg: 'rgba(46,158,107,.12)',
    fg: 'var(--status-success)'
  }
};

/**
 * TCS Group tag / badge — status pills and category chips
 * ("For Sale", "Featured", "Condos", …).
 */
function Tag({
  tone = 'navy',
  size = 'md',
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.navy;
  const pad = size === 'sm' ? '3px 10px' : '5px 14px';
  const fs = size === 'sm' ? 'var(--fs-caption)' : 'var(--fs-body-sm)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      fontSize: fs,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.03em',
      lineHeight: 1.1,
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: t.border || '1px solid transparent',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group property listing card — the signature real-estate surface.
 * Photo with status/featured tags, price, address, and a bed/bath/sqft
 * spec row. Pass `image` (URL); falls back to a branded placeholder.
 */
function PropertyCard({
  image,
  status = 'For Sale',
  statusTone = 'salmon',
  featured = false,
  price,
  address,
  locality,
  beds,
  baths,
  sqft,
  agent,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: image ? `center/cover no-repeat url("${image}")` : 'linear-gradient(135deg, var(--tcs-navy) 0%, var(--tcs-navy-600) 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: statusTone,
    size: "sm"
  }, status), featured && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "navy",
    size: "sm"
  }, "Featured")), !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,.35)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, "TCS.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, price), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, address), locality && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, locality)), (beds != null || baths != null || sqft != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      paddingTop: 12,
      borderTop: '1px solid var(--border-default)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, beds != null && /*#__PURE__*/React.createElement(Spec, {
    label: "Beds",
    value: beds
  }), baths != null && /*#__PURE__*/React.createElement(Spec, {
    label: "Baths",
    value: baths
  }), sqft != null && /*#__PURE__*/React.createElement(Spec, {
    label: "Sq Ft",
    value: sqft
  })), agent && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, agent)));
}
function Spec({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 700
    }
  }, value), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SOCIALS = [{
  name: 'Facebook',
  href: 'https://www.facebook.com/tcsgroup.philly',
  path: /*#__PURE__*/React.createElement("path", {
    d: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"
  })
}, {
  name: 'Instagram',
  href: 'https://www.instagram.com/tcsgroup.philly/',
  path: /*#__PURE__*/React.createElement("path", {
    d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.34a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44zm6.76-10.98a1.52 1.52 0 1 1-3.04 0 1.52 1.52 0 0 1 3.04 0z"
  })
}, {
  name: 'LinkedIn',
  href: 'https://www.linkedin.com/company/tcs-group-kw/',
  path: /*#__PURE__*/React.createElement("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.9H5.67v8.44h2.67zM7 8.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.67v-4.63c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.41 1.33V9.9h-2.67c.04.75 0 8.44 0 8.44h2.67v-4.71c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.35.74 1.35 1.82v4.52h2.67z"
  })
}];

/**
 * TCS Group site footer — navy, logo, description, link columns,
 * office contact block, and social row. Presentational.
 */
function Footer({
  columns = [{
    title: 'Properties',
    links: ['For Sale', 'For Rent', 'Our Listings', 'Open Houses', 'Featured Condos']
  }, {
    title: 'Company',
    links: ['Who We Are', 'Careers', "What's Happening", 'Philanthropy']
  }, {
    title: 'Services',
    links: ['Buying', 'Selling', 'Renting', 'Relocation', 'Moving Concierge']
  }],
  address = '1425 Locust Street, Philadelphia, PA 19102',
  phone = '(215) 692-6636',
  email = 'info@tcsgroup.com',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--tcs-navy)',
      color: 'rgba(255,255,255,.75)',
      padding: '64px 32px 28px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr) 1.2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "light",
    size: 26
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0,
      maxWidth: 260
    }
  }, "A full-service real estate brokerage simplifying buying, selling, and renting across Philadelphia and South Jersey.")), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--tcs-white)'
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'rgba(255,255,255,.75)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--tcs-white)'
    }
  }, "TCS Group at Keller Williams"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, address), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone}`,
    style: {
      color: 'var(--tcs-sky)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600
    }
  }, phone), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      color: 'var(--tcs-sky)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, email), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 6
    }
  }, SOCIALS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    "aria-label": s.name,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.25)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--tcs-white)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s.path)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.15)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 'var(--fs-caption)',
      color: 'rgba(255,255,255,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 The TCS Group. All Rights Reserved. Licensed in PA, NJ, NY, DE & MD."), /*#__PURE__*/React.createElement("span", null, "Privacy Policy")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCS Group site header. White or transparent (over-hero) variants,
 * primary nav links, phone number, and a CTA. Purely presentational.
 */
function Navbar({
  links = ['Properties', 'About', 'Neighborhoods', 'Services', 'Our Agents', 'Contact'],
  active,
  phone = '(215) 692-6636',
  variant = 'solid',
  cta = 'Get Started',
  style,
  ...rest
}) {
  const transparent = variant === 'transparent';
  const tone = transparent ? 'light' : 'navy';
  const linkColor = transparent ? 'rgba(255,255,255,.85)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '18px 32px',
      background: transparent ? 'transparent' : 'var(--tcs-white)',
      borderBottom: transparent ? '1px solid rgba(255,255,255,.15)' : '1px solid var(--border-default)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: tone,
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      color: l === active ? 'var(--tcs-salmon)' : linkColor,
      borderBottom: l === active ? '2px solid var(--tcs-salmon)' : '2px solid transparent',
      paddingBottom: 2,
      whiteSpace: 'nowrap'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone}`,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      whiteSpace: 'nowrap',
      color: transparent ? 'var(--tcs-white)' : 'var(--tcs-navy)'
    }
  }, phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// TCS Group website — Contact screen.
const {
  Navbar,
  Footer,
  Button,
  Input,
  Select
} = window.DesignSystem_7a2e65;
function ContactScreen({
  navigate
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tcs-cloud)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    variant: "solid",
    active: "Contact"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '56px 32px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tcs-eyebrow"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      margin: '12px 0 16px'
    }
  }, "Let's find your next move."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: 380
    }
  }, "Tell us what you're looking for and a TCS advisor will run your numbers and map out next steps \u2014 no pressure, no jargon."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['map-pin', '1425 Locust Street, Philadelphia, PA 19102'], ['phone', '(215) 692-6636'], ['mail', 'info@tcsgroup.com']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--tcs-navy-050)',
      color: 'var(--tcs-navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 28
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'rgba(46,158,107,.12)',
      color: 'var(--status-success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22
    }
  }, "Thanks \u2014 we'll be in touch."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "A TCS advisor typically responds within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Jordan"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Rivera"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(215) 555-0199"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I'm interested in",
    options: ['Buying a home', 'Selling my home', 'Renting', 'Investing', 'Something else']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      setSent(true);
      setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    }
  }, "Send message")))), /*#__PURE__*/React.createElement(Footer, null));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TCS Group website — Home screen. Presentational recreation.
const {
  Navbar,
  Footer,
  Button,
  Tag,
  Input,
  Select,
  PropertyCard,
  StatBlock,
  SectionHeading,
  Testimonial
} = window.DesignSystem_7a2e65;
function HomeScreen({
  navigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tcs-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(140deg, #1A2A47 0%, #223659 55%, #33507F 100%)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    variant: "transparent",
    active: "Properties",
    cta: "Get Started"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 32px 120px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--tcs-salmon)'
    }
  }, "Philadelphia \xB7 South Jersey"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.02,
      margin: '16px 0 20px',
      maxWidth: 760
    }
  }, "Simplifying your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tcs-sky)'
    }
  }, "real estate"), " experience."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.8)',
      maxWidth: 560,
      margin: '0 0 32px'
    }
  }, "A full-service brokerage licensed in five states. By your side every step \u2014 buying, selling, and renting."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => navigate('listings')
  }, "Buy"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => navigate('contact')
  }, "Sell"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => navigate('listings'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.5)'
    }
  }, "Rent"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      transform: 'translateY(50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 20,
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr auto',
      gap: 14,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Location",
    prefix: "\u2315",
    placeholder: "City, neighborhood, or ZIP"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Type",
    options: ['Any', 'Condo', 'Single Family', 'Multi-Family', 'Land']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Max Price",
    options: ['Any', '$300k', '$500k', '$750k', '$1M+']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => navigate('listings')
  }, "Search")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '110px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Featured",
    title: "Homes for sale in Philadelphia"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => navigate('listings')
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, LISTINGS.slice(0, 3).map((l, i) => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: i
  }, l, {
    onClick: () => navigate('detail')
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tcs-navy)',
      margin: '48px 0',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "4,500",
    suffix: "+",
    label: "Rental Units Managed",
    tone: "light"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "80",
    suffix: "+",
    label: "Local Agents",
    tone: "light"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1 in 5",
    label: "Philly Home Sales",
    tone: "light"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    prefix: "$",
    value: "500",
    suffix: "M",
    label: "2023 Closed",
    tone: "light"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "What we do",
    title: "Full-service, one-stop real estate",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: 'var(--tcs-salmon-100)',
      color: 'var(--tcs-salmon-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 22
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Clients",
    title: "Consistently rated 5 stars",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    stars: 5,
    quote: "TCS made buying our first home genuinely simple. They ran the numbers and we never felt sold to.",
    name: "Maya & Chris R.",
    detail: "First-time buyers \xB7 Fishtown"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    stars: 5,
    quote: "Sold above asking in nine days. Staging, pricing, and negotiation were handled end to end.",
    name: "Daniel P.",
    detail: "Seller \xB7 Cherry Hill"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    stars: 5,
    quote: "The moving concierge coordinated everything. We just showed up to a home that was ready.",
    name: "The Okonkwo Family",
    detail: "Relocation \xB7 Main Line"
  }))), /*#__PURE__*/React.createElement(Footer, null));
}
const LISTINGS = [{
  status: 'For Sale',
  statusTone: 'salmon',
  featured: true,
  price: '$1,000,000',
  address: '528 Berks Street',
  locality: 'Philadelphia, PA 19122',
  beds: 4,
  baths: 3,
  sqft: '3,000',
  agent: 'TCS Group'
}, {
  status: 'For Sale',
  statusTone: 'salmon',
  price: '$999,999',
  address: '26 Strawberry Street',
  locality: 'Old City, PA 19106',
  beds: 3,
  baths: 3,
  sqft: '3,264',
  agent: 'TCS Group'
}, {
  status: 'For Rent',
  statusTone: 'sky',
  price: '$2,400 / mo',
  address: '1324 Locust St · Arts Condo',
  locality: 'Midtown, Philadelphia',
  beds: 1,
  baths: 1,
  sqft: '720',
  agent: 'Rent Philly'
}, {
  status: 'For Sale',
  statusTone: 'salmon',
  price: '$1,000,000',
  address: '1821 Christian Street',
  locality: 'Graduate Hospital, PA 19146',
  beds: 4,
  baths: 4,
  sqft: '2,142',
  agent: 'TCS Group'
}, {
  status: 'Sold',
  statusTone: 'success',
  price: '$785,000',
  address: '944 New Market Street',
  locality: 'Northern Liberties',
  beds: 3,
  baths: 2,
  sqft: '3,182',
  agent: 'TCS Group'
}, {
  status: 'For Rent',
  statusTone: 'sky',
  price: '$3,100 / mo',
  address: '9 Presidential Blvd · Luxor',
  locality: 'Bala Cynwyd',
  beds: 2,
  baths: 2,
  sqft: '1,150',
  agent: 'Rent Philly'
}];
const SERVICES = [{
  icon: 'home',
  title: 'Buy',
  desc: 'The perfect home at the best price, with off-market access and financing guidance.'
}, {
  icon: 'trending-up',
  title: 'Sell',
  desc: 'Strategic pricing, staging, and negotiation to sell fast and for top dollar.'
}, {
  icon: 'key-round',
  title: 'Rent',
  desc: 'A simpler way to rent — personalized matching across citywide inventory.'
}];
window.HomeScreen = HomeScreen;
window.TCS_LISTINGS = LISTINGS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ListingsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TCS Group website — Listings / search results screen.
const {
  Navbar,
  Footer,
  Button,
  Tag,
  Input,
  Select,
  PropertyCard,
  SectionHeading
} = window.DesignSystem_7a2e65;
function ListingsScreen({
  navigate
}) {
  const listings = window.TCS_LISTINGS || [];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tcs-cloud)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    variant: "solid",
    active: "Properties"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '18px 32px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
      gap: 12,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Location",
    prefix: "\u2315",
    placeholder: "Philadelphia, PA",
    defaultValue: "Philadelphia, PA"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Type",
    options: ['Any type', 'Condo', 'Single Family', 'Multi-Family']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Beds",
    options: ['Any', '1+', '2+', '3+', '4+']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Price",
    options: ['Any price', 'Under $500k', '$500k–$1M', '$1M+']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Update"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '32px 32px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      margin: '0 0 4px'
    }
  }, "Homes in Philadelphia"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, listings.length, " results \xB7 sorted by relevance")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "navy",
    dot: true
  }, "For Sale"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "For Rent"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Open Houses"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '8px 32px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, listings.map((l, i) => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: i
  }, l, {
    onClick: () => navigate('detail')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Load more listings"))), /*#__PURE__*/React.createElement(Footer, null));
}
window.ListingsScreen = ListingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ListingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PropertyDetailScreen.jsx
try { (() => {
// TCS Group website — Property detail screen.
const {
  Navbar,
  Footer,
  Button,
  Tag,
  StatBlock
} = window.DesignSystem_7a2e65;
function PropertyDetailScreen({
  navigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tcs-paper)'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    variant: "solid",
    active: "Properties"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '20px 32px 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => navigate('listings')
  }, "\u2190 Back to results")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '16px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 12,
      height: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(135deg, var(--tcs-navy), var(--tcs-navy-600))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "salmon"
  }, "For Sale"), /*#__PURE__*/React.createElement(Tag, {
    tone: "navy"
  }, "Featured")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,.3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40
    }
  }, "TCS.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      background: 'var(--tcs-sky)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      background: 'var(--tcs-slate-100)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '32px',
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: 'var(--text-strong)'
    }
  }, "$1,000,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      margin: '6px 0 2px'
    }
  }, "528 Berks Street"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Philadelphia, Pennsylvania 19122"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      padding: '28px 0',
      margin: '24px 0',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "4",
    label: "Beds"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "3",
    label: "Baths"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "3,000",
    label: "Sq Ft"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "left",
    value: "2008",
    label: "Built"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22
    }
  }, "About this home"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 1.7,
      maxWidth: 620
    }
  }, "A rare income-producing property in the heart of Philadelphia. Three finished floors, a fully renovated kitchen, and off-street parking. Steps from Fishtown's dining and transit \u2014 an ideal first investment or owner-occupant duplex under the Burn-To-Earn\u2122 approach."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 16
    }
  }, ['Parking', 'Renovated', 'Income Property', 'Central Air', 'Roof Deck'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    tone: "slate"
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24,
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--tcs-navy)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800
    }
  }, "TCS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "TCS Group"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Keller Williams Empower"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    size: "lg",
    onClick: () => navigate('contact')
  }, "Schedule a tour"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    onClick: () => navigate('contact')
  }, "Ask a question"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 16,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Or call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:2156926636",
    style: {
      fontWeight: 700
    }
  }, "(215) 692-6636")))), /*#__PURE__*/React.createElement(Footer, null));
}
window.PropertyDetailScreen = PropertyDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PropertyDetailScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AGENTS = __ds_scope.AGENTS;

__ds_ns.Agent = __ds_scope.Agent;

__ds_ns.AgentBadge = __ds_scope.AgentBadge;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
