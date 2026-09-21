import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Button } from '../core/Button.jsx';

/**
 * TCS Group site header. White or transparent (over-hero) variants,
 * primary nav links, phone number, and a CTA. Purely presentational.
 */
export function Navbar({
  links = ['Properties', 'About', 'Neighborhoods', 'Services', 'Our Agents', 'Contact'],
  active, phone = '(215) 692-6636', variant = 'solid', cta = 'Get Started', style, ...rest
}) {
  const transparent = variant === 'transparent';
  const tone = transparent ? 'light' : 'navy';
  const linkColor = transparent ? 'rgba(255,255,255,.85)' : 'var(--text-body)';
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 24, padding: '18px 32px',
      background: transparent ? 'transparent' : 'var(--tcs-white)',
      borderBottom: transparent ? '1px solid rgba(255,255,255,.15)' : '1px solid var(--border-default)',
      ...style,
    }} {...rest}>
      <Logo tone={tone} size={24} />
      <nav style={{ display: 'flex', gap: 26, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        {links.map((l) => (
          <a key={l} href="#" style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
            fontWeight: 'var(--fw-semibold)', letterSpacing: '0.01em',
            color: l === active ? 'var(--tcs-salmon)' : linkColor,
            borderBottom: l === active ? '2px solid var(--tcs-salmon)' : '2px solid transparent',
            paddingBottom: 2, whiteSpace: 'nowrap',
          }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <a href={`tel:${phone}`} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-bold)', whiteSpace: 'nowrap',
          color: transparent ? 'var(--tcs-white)' : 'var(--tcs-navy)',
        }}>{phone}</a>
        <Button variant="primary" size="sm">{cta}</Button>
      </div>
    </header>
  );
}
