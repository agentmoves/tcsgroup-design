import React from 'react';

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

export const AGENTS = {
  "ahjah-crosland": {"name":"Ahjah Crosland","title":"Realtor","team":"TCS Group PA","phone":"(267) 408-7319","email":"acrosland@tcsgroup.com","licensePA":"RS375631"},
  "alex-delcourt": {"name":"Alex Delcourt","title":"Realtor","team":"TCS Group PA","phone":"(267) 261-0700","email":"adelcourt@tcsgroup.com","instagram":"@delcourtbass","licensePA":"RS366752"},
  "andrew-goldberg": {"name":"Andrew Goldberg","title":"Realtor","team":"TCS Group PA","phone":"(610) 420-5742","email":"agoldberg@tcsgroup.com","instagram":"@goldbergrealtor","licensePA":"RS370959"},
  "boots-levinson": {"name":"Boots Levinson","title":"Partner | Director of Rentals","team":"TCS Group PA","phone":"(267) 588-0035","email":"boots@tcsgroup.com","licensePA":"RS321333"},
  "carmine-simmons": {"name":"Carmine Simmons","title":"Realtor","team":"TCS Group PA","phone":"(551) 358-8116","email":"csimmons@tcsgroup.com","licensePA":"ABR004667","licenseNJ":"NJ0792087"},
  "cassandra-green": {"name":"Cassandra Green","title":"Realtor","team":"TCS Group PA","phone":"(267) 225-8364","email":"cgreen@tcsgroup.com","licensePA":"RS378574"},
  "christi-truesdell": {"name":"Christi Truesdell","title":"Realtor","team":"TCS Group PA","phone":"(518) 542-5643","email":"ctruesdell@tcsgroup.com","licensePA":"RS363046"},
  "claudia-brown": {"name":"Claudia Brown","title":"Realtor","team":"TCS Group PA","phone":"(480) 390-2429","email":"cbrown@tcsgroup.com","instagram":"@claudia_phillyrealtor","licensePA":"RS321122"},
  "dan-deckelbaum": {"name":"Dan Deckelbaum","title":"Director of Sales | Realtor","team":"BlackLabel","phone":"(410) 215-2240","email":"dan@blacklabelkw.com","licensePA":"RS319781"},
  "earl-gray": {"name":"Earl Gray","title":"Realtor","team":"TCS Group PA","phone":"(267) 902-2914","email":"egray@tcsgroup.com","licensePA":"RS296377"},
  "elaine-reby": {"name":"Elaine Reby","title":"Realtor","team":"BlackLabel","phone":"(480) 616-6794","email":"Elaine@blacklabelkw.com","licensePA":"RS362049"},
  "eva-mitrushi": {"name":"Eva Mitrushi","title":"Realtor","team":"TCS Group PA","phone":"(215) 789-8293","email":"emitrushi@tcsgroup.com","licensePA":"RS378152"},
  "gaurav-gambhir": {"name":"Gaurav Gambhir","title":"Partner | CEO","team":"TCS Group PA","phone":"(267) 994-3870","email":"gaurav@tcsgroup.com","licensePA":"AB067538"},
  "gavin-ludovici": {"name":"Gavin Ludovici","title":"Realtor","team":"TCS Group PA","phone":"(614) 507-7722","email":"gludovici@tcsgroup.com","instagram":"@dapper.realtor","licensePA":"RS334859"},
  "gersham-fulcott": {"name":"Gersham Fulcott","title":"Realtor","team":"TCS Group PA","phone":"(484) 479-4826","email":"gfulcott@tcsgroup.com","licensePA":"RS336694"},
  "gregory-buck": {"name":"Gregory Buck","title":"Realtor","team":"TCS Group PA","phone":"(610) 513-2533","email":"gbuck@tcsgroup.com","licensePA":"RS330578"},
  "griffin-cohen": {"name":"Griffin Cohen","title":"Realtor","team":"TCS Group PA","phone":"(215) 806-4724","email":"gcohen@tcsgroup.com","licensePA":"RS350322"},
  "jafar-oliai": {"name":"Jafar Oliai","title":"Realtor","team":"TCS Group PA","phone":"(267) 965-1989","email":"joliai@tcsgroup.com","licenseNJ":"Yes"},
  "jason-gizzi": {"name":"Jason Gizzi","title":"Realtor","team":"BlackLabel","phone":"(484) 832-3459","email":"jgizzi@blacklabelkw.com","licensePA":"RB069820"},
  "john-bolaris": {"name":"John Bolaris","title":"Partner | Realtor","team":"BlackLabel","phone":"(646) 705-3642","email":"bolaris@blacklabelkw.com","licensePA":"RS330965"},
  "jon-hummel": {"name":"Jon Hummel","title":"Realtor","team":"TCS Group PA","phone":"(610) 761-4176","email":"jhummel@tcsgroup.com","instagram":"@jonny_no_h_","licensePA":"RS354675","headshotOptIn":false},
  "joseph-cantz": {"name":"Joseph Cantz","title":"Realtor","team":"TCS Group PA","phone":"(267) 467-1876","email":"jcantz@tcsgroup.com","licensePA":"RS356576"},
  "juanita-jackson": {"name":"Juanita Jackson","title":"Realtor","team":"TCS Group PA","phone":"(267) 257-7790","email":"jjackson@tcsgroup.com","licensePA":"RS343593"},
  "karina-caroni": {"name":"Karina Caroni","title":"Realtor","team":"TCS Group PA","phone":"(973) 714-4282","email":"kcaroni@tcsgroup.com","licensePA":"RS347945"},
  "landry-nguema": {"name":"Landry Nguema","title":"Realtor","team":"TCS Group PA","phone":"(267) 901-1111","email":"lnguema@tcsgroup.com","licensePA":"RS317360","headshotOptIn":false},
  "liz-guerrero": {"name":"Liz Guerrero","title":"Realtor","team":"TCS Group PA","phone":"(956) 312-6421","email":"lguerrero@tcsgroup.com","licensePA":"RS381494"},
  "madison-simone": {"name":"Madison Simone","title":"Realtor","team":"TCS Group PA","phone":"(267) 265-4691","email":"msimone@tcsgroup.com","licensePA":"RS378555"},
  "matthew-milano": {"name":"Matthew Milano","title":"Realtor","team":"TCS Group PA","phone":"(215) 370-9613","email":"mmilano@tcsgroup.com","licensePA":"RS323554"},
  "mia-purul": {"name":"Mia Purul","title":"Realtor","team":"TCS Group PA","phone":"(215) 915-3013","email":"mpurul@tcsgroup.com","licensePA":"RS368197"},
  "michael-edward-cohen": {"name":"Michael Edward Cohen","title":"Realtor","team":"TCS Group PA","phone":"(215) 570-1920","email":"mcohen@tcsgroup.com","licensePA":"RS328765"},
  "michael-gregor": {"name":"Michael Gregor","title":"Realtor","team":"TCS Group PA","phone":"(610) 585-2003","email":"mgregor@tcsgroup.com","licensePA":"RS149742A","headshotOptIn":false},
  "michele-palumbo": {"name":"Michele Palumbo","title":"Realtor","team":"TCS Group PA","phone":"(484) 645-1905","email":"mpalumbo@tcsgroup.com","licensePA":"RS279111"},
  "morgan-harrington": {"name":"Morgan Harrington","title":"Transaction Manager | Realtor","team":"TCS Group PA","phone":"(215) 776-0515","email":"morgan@tcsgroup.com","licensePA":"RS321843"},
  "pam-hooks": {"name":"Pam Hooks","title":"Realtor","team":"TCS Group PA","phone":"(610) 308-5316","email":"phooks@tcsgroup.com","licensePA":"RS294115"},
  "parker-ross": {"name":"Parker Ross","title":"Realtor","team":"TCS Group PA","phone":"(717) 344-1158","email":"pross@tcsgroup.com","licensePA":"RS369976"},
  "richard-yusko": {"name":"Richard Yusko","title":"Realtor","team":"TCS Group PA","phone":"(215) 301-6969","email":"ryusko@tcsgroup.com","licensePA":"RS374166"},
  "rijon-simon": {"name":"Rijon Simon","title":"Realtor","team":"TCS Group PA","phone":"(646) 784-6452","email":"rsimon@tcsgroup.com","licensePA":"RS380179"},
  "ryan-green": {"name":"Ryan Green","title":"Realtor","team":"TCS Group PA","phone":"(267) 423-6474","email":"rgreen@tcsgroup.com","licensePA":"RS373128"},
  "solon-alpohoritis": {"name":"Solon Alpohoritis","title":"Realtor","team":"BlackLabel","phone":"(267) 506-1757","email":"solon@blacklabelkw.com","licensePA":"RS313053"},
  "stephanie-churchill": {"name":"Stephanie Churchill","title":"Realtor","team":"TCS Group PA","phone":"(267) 918-8111","email":"schurchill@tcsgroup.com","instagram":"@totallyzen","licensePA":"RS328162"},
  "suman-chakraborty": {"name":"Suman Chakraborty","title":"Realtor","team":"TCS Group PA","phone":"(302) 559-7515","email":"schakraborty@tcsgroup.com","licensePA":"RS378200"},
  "thomas-groll": {"name":"Thomas Groll","title":"Realtor","team":"TCS Group PA","phone":"(215) 620-9994","email":"tgroll@tcsgroup.com","licensePA":"AB067209"},
  "tyler-doppelheuer": {"name":"Tyler Doppelheuer","title":"Realtor","team":"TCS Group PA","phone":"(724) 963-3382","email":"tdoppelheuer@tcsgroup.com","licensePA":"RS323836"},
  "tyler-hopp": {"name":"Tyler Hopp","title":"Realtor","team":"TCS Group PA","phone":"(267) 475-5862","email":"thopp@tcsgroup.com","instagram":"@thopp27","licensePA":"RS331973"},
  "vladymir-valentin": {"name":"Vladymir Valentin","title":"Realtor","team":"TCS Group PA","phone":"(215) 444-3976","email":"vvalentin@tcsgroup.com","licensePA":"RS334877","licenseNJ":"NJ 2443089"},
};

// Resolve a slug, a full name, or an email to a roster record.
export function getAgent(key) {
  if (!key) return null;
  const k = String(key).trim().toLowerCase();
  if (AGENTS[k]) return withPhoto(k, AGENTS[k]);
  for (const slug in AGENTS) {
    const a = AGENTS[slug];
    if (a.name.toLowerCase() === k || (a.email && a.email.toLowerCase() === k)) {
      return withPhoto(slug, a);
    }
  }
  return null;
}

function withPhoto(slug, a) {
  // Agents who opted out of a headshot resolve to the logo tile, not a missing file.
  const file = a.headshotOptIn === false ? '_logo-fallback' : slug;
  return { slug: slug, ...a, photo: DS_BASE + '/assets/agents/' + file + '.png' };
}

// Headshot URL for a slug/name, falling back to the logo tile if the agent is unknown.
export function agentPhoto(key) {
  const a = getAgent(key);
  return a ? a.photo : DS_BASE + '/assets/agents/_logo-fallback.png';
}

// Capitalized namespace so the helpers are reachable as window.<Namespace>.Agent.* in
// card HTML, templates, and consuming projects (only capitalized exports are exposed).
export const Agent = { get: getAgent, photo: agentPhoto, all: AGENTS };

export function AgentBadge({
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
  const a = getAgent(slug) || { name: 'Agent Name', title: '', phone: '', email: '', photo: agentPhoto(slug) };
  const fg = tone === 'light' ? '#fff' : 'var(--tcs-navy)';
  const sub = tone === 'light' ? 'rgba(255,255,255,.85)' : 'var(--tcs-slate)';
  const accent = tone === 'light' ? 'var(--tcs-sky)' : 'var(--tcs-salmon)';
  const radius = shape === 'circle' ? '50%' : shape === 'rect' ? 0 : 16;
  const reverse = align === 'left';
  return (
    <div style={{ display: 'flex', flexDirection: reverse ? 'row' : 'row-reverse', alignItems: 'center', gap: 20, ...style }} {...rest}>
      <img
        src={a.photo}
        alt={a.name}
        style={{ width: size, height: size, objectFit: 'cover', borderRadius: radius, border: '3px solid rgba(255,255,255,.25)', flex: '0 0 auto', display: 'block' }}
      />
      <div style={{ textAlign: reverse ? 'left' : 'right', lineHeight: 1.3 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', color: fg }}>{a.name}</div>
        {showTitle && a.title ? <div style={{ fontSize: 18, color: sub, marginTop: 2 }}>{a.title}</div> : null}
        {showPhone && a.phone ? <div style={{ fontSize: 20, fontWeight: 600, color: sub, marginTop: 4 }}>{a.phone}</div> : null}
        {showEmail && a.email ? <div style={{ fontSize: 19, color: accent }}>{a.email}</div> : null}
      </div>
    </div>
  );
}
