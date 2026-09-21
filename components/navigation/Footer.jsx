import React from 'react';
import { Logo } from '../brand/Logo.jsx';

const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/tcsgroup.philly',
    path: <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/tcsgroup.philly/',
    path: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.34a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44zm6.76-10.98a1.52 1.52 0 1 1-3.04 0 1.52 1.52 0 0 1 3.04 0z" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/tcs-group-kw/',
    path: <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.9H5.67v8.44h2.67zM7 8.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.67v-4.63c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.41 1.33V9.9h-2.67c.04.75 0 8.44 0 8.44h2.67v-4.71c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.35.74 1.35 1.82v4.52h2.67z" /> },
];

/**
 * TCS Group site footer — navy, logo, description, link columns,
 * office contact block, and social row. Presentational.
 */
export function Footer({
  columns = [
    { title: 'Properties', links: ['For Sale', 'For Rent', 'Our Listings', 'Open Houses', 'Featured Condos'] },
    { title: 'Company', links: ['Who We Are', 'Careers', "What's Happening", 'Philanthropy'] },
    { title: 'Services', links: ['Buying', 'Selling', 'Renting', 'Relocation', 'Moving Concierge'] },
  ],
  address = '1425 Locust Street, Philadelphia, PA 19102',
  phone = '(215) 692-6636',
  email = 'info@tcsgroup.com',
  style, ...rest
}) {
  return (
    <footer style={{
      background: 'var(--tcs-navy)', color: 'rgba(255,255,255,.75)',
      padding: '64px 32px 28px', ...style,
    }} {...rest}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr) 1.2fr', gap: 40,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div><Logo tone="light" size={26} /></div>
          <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-relaxed)', margin: 0, maxWidth: 260 }}>
            A full-service real estate brokerage simplifying buying, selling, and renting across
            Philadelphia and South Jersey.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)',
              fontWeight: 'var(--fw-bold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--tcs-white)',
            }}>{col.title}</div>
            {col.links.map((l) => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,.75)', fontSize: 'var(--fs-body-sm)' }}>{l}</a>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)',
            fontWeight: 'var(--fw-bold)', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--tcs-white)',
          }}>TCS Group at Keller Williams</div>
          <span style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-relaxed)' }}>{address}</span>
          <a href={`tel:${phone}`} style={{ color: 'var(--tcs-sky)', fontSize: 'var(--fs-body-sm)', fontWeight: 600 }}>{phone}</a>
          <a href={`mailto:${email}`} style={{ color: 'var(--tcs-sky)', fontSize: 'var(--fs-body-sm)' }}>{email}</a>
          <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} style={{
                width: 34, height: 34, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,.25)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--tcs-white)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{s.path}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '40px auto 0', paddingTop: 20,
        borderTop: '1px solid rgba(255,255,255,.15)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontSize: 'var(--fs-caption)', color: 'rgba(255,255,255,.55)',
      }}>
        <span>© The TCS Group. All Rights Reserved. Licensed in PA, NJ, NY, DE & MD.</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
}
