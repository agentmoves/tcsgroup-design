// TCS Group — animated logo outro sting (5s).
//
// The logo assembles itself from the real brand artwork: the pillar mark builds upward,
// then "TCS" and "GROUP" are written on left-to-right behind a travelling sky-blue nib,
// a salmon rule draws, the web address settles, and the lockup dissolves back to the
// empty navy field so the loop seam matches frame 0.
//
// Nothing is redrawn. Every glyph is the shipped assets/logo-mark-white.png, revealed
// through clip-path windows measured off the artwork's own alpha channel:
//   pillar mark  x 0–30%     full height
//   "TCS"        x 30–100%   y 0.7–71.6%
//   "GROUP"      x 30–100%   y 81.1–98.6%

const { useComposition, animate, Easing, clamp } = window;

const DS_BASE = (() => {
  try {
    const s = document.querySelector('script[src*="_ds_bundle"]');
    if (s && s.src) return s.src.replace(/\/_ds_bundle\.js.*$/, '');
  } catch (e) {}
  return '../..';
})();

const LOGO = DS_BASE + '/assets/logo-mark-white.png';
const LOGO_AR = 433 / 148;
const MARK_W = 30;      // mark occupies 0–30% of the width
const TCS_BOT = 28.4;   // "TCS" bottom inset  (ink ends at 71.6%)
const GRP_TOP = 81.1;   // "GROUP" top inset

// Exactly three motion helpers — no easing or transform is authored outside these.
const MOTION = {
  enter: (o) => animate({ ease: Easing.easeOutCubic, ...o }),
  draw: (o) => animate({ ease: Easing.easeInOutQuart, ...o }),
  settle: (o) => animate({ ease: Easing.easeOutQuart, ...o }),
};

function Backdrop({ T, total }) {
  const push = MOTION.draw({ from: 1.06, to: 1, start: 0, end: total })(T);
  const veil = MOTION.enter({ from: 0.6, to: 0, start: 0, end: 0.9 })(T);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#1A2A47' }}>
      <div style={{ position: 'absolute', inset: '-6%', transform: `scale(${push})`, background: 'radial-gradient(120% 90% at 28% 18%, #33507F 0%, #223659 46%, #14213A 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: '#0E1729', opacity: veil }} />
    </div>
  );
}

// One clipped copy of the artwork. `clip` is a CSS inset() string.
function Slice({ clip }) {
  return <img src={LOGO} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', clipPath: clip }} />;
}

// The travelling nib: a sky-blue rule at the wipe edge, spanning that row's height.
function Nib({ at, top, bottom, on }) {
  return (
    <div style={{ position: 'absolute', left: `${at}%`, top: `${top}%`, bottom: `${bottom}%`, width: 9, marginLeft: -4, borderRadius: 5, background: '#8FD0E6', boxShadow: '0 0 26px 5px rgba(143,208,230,.6)', opacity: clamp(on, 0, 1) }} />
  );
}

function LogoLockup({ T, cues, width }) {
  // 1. The pillar mark builds upward — a column being stacked.
  const build = clamp(MOTION.settle({ from: 0, to: 100, start: 0.2, end: cues.Wordmark + 0.05 })(T), 0, 100);
  // 2. "TCS" is written left to right — the slowest, most deliberate beat.
  const wTcs = clamp(MOTION.draw({ from: 0, to: 100, start: cues.Wordmark, end: cues.Wordmark + 1.25 })(T), 0, 100);
  // 3. "GROUP" follows at the same unhurried pace.
  const wGrp = clamp(MOTION.draw({ from: 0, to: 100, start: cues.Group, end: cues.Group + 0.95 })(T), 0, 100);

  // Nibs ride the leading edge of each write, fading as the row completes.
  const nibTcs = MOTION.enter({ from: 0, to: 1, start: cues.Wordmark - 0.1, end: cues.Wordmark + 0.1 })(T)
    * MOTION.enter({ from: 1, to: 0, start: cues.Wordmark + 1.1, end: cues.Wordmark + 1.32 })(T);
  const nibGrp = MOTION.enter({ from: 0, to: 1, start: cues.Group - 0.1, end: cues.Group + 0.1 })(T)
    * MOTION.enter({ from: 1, to: 0, start: cues.Group + 0.8, end: cues.Group + 1.0 })(T);

  const fadeIn = MOTION.enter({ from: 0, to: 1, start: 0.15, end: 0.55 })(T);
  const grow = MOTION.settle({ from: 0.97, to: 1, start: 0.15, end: cues.Endorse })(T);
  const out = MOTION.enter({ from: 1, to: 0, start: cues.Close + 0.1, end: cues.Close + 0.6 })(T);
  const drift = MOTION.draw({ from: 1, to: 1.03, start: cues.Close, end: cues.Close + 0.6 })(T);

  const edgeTcs = MARK_W + (wTcs / 100) * (100 - MARK_W);
  const edgeGrp = MARK_W + (wGrp / 100) * (100 - MARK_W);

  return (
    <div style={{ position: 'relative', width, height: width / LOGO_AR, opacity: clamp(fadeIn * out, 0, 1), transform: `scale(${grow * drift})` }}>
      <Slice clip={`inset(${100 - build}% ${100 - MARK_W}% 0% 0%)`} />
      <Slice clip={`inset(0% ${100 - edgeTcs}% ${TCS_BOT}% ${MARK_W}%)`} />
      <Slice clip={`inset(${GRP_TOP}% ${100 - edgeGrp}% 0% ${MARK_W}%)`} />
      <Nib at={edgeTcs} top={4} bottom={TCS_BOT + 2} on={nibTcs} />
      <Nib at={edgeGrp} top={GRP_TOP - 1} bottom={0} on={nibGrp} />
    </div>
  );
}

function AccentLine({ T, cues, width }) {
  const grow = MOTION.draw({ from: 0, to: width, start: cues.Endorse, end: cues.Endorse + 0.8 })(T);
  const out = MOTION.enter({ from: 1, to: 0, start: cues.Close + 0.05, end: cues.Close + 0.5 })(T);
  return <div style={{ width: grow, height: 6, borderRadius: 3, background: '#F0716D', opacity: clamp(out, 0, 1) }} />;
}

function UrlLine({ T, cues }) {
  const up = MOTION.enter({ from: 20, to: 0, start: cues.Endorse + 0.35, end: cues.Endorse + 1.05 })(T);
  const inOp = MOTION.enter({ from: 0, to: 1, start: cues.Endorse + 0.35, end: cues.Endorse + 1.0 })(T);
  const out = MOTION.enter({ from: 1, to: 0, start: cues.Close, end: cues.Close + 0.45 })(T);
  const track = MOTION.settle({ from: 0.5, to: 0.34, start: cues.Endorse + 0.35, end: cues.Endorse + 1.1 })(T);
  return (
    <div style={{ transform: `translateY(${up}px)`, opacity: clamp(inOp * out, 0, 1), fontFamily: 'var(--font-display), Georgia, serif', fontWeight: 800, fontSize: 30, letterSpacing: `${track}em`, textTransform: 'uppercase', color: '#D4EEF7' }}>
      tcsgroup.com
    </div>
  );
}

function LogoOutro() {
  const { T, CUES, authoredTotal } = useComposition();
  return (
    <div data-screen-label={`${Math.floor(T)}s`} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Backdrop T={T} total={authoredTotal} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <LogoLockup T={T} cues={CUES} width={980} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
          <AccentLine T={T} cues={CUES} width={220} />
          <UrlLine T={T} cues={CUES} />
        </div>
      </div>
    </div>
  );
}

window.LogoOutro = LogoOutro;
