import React from 'react';

/**
 * TCS Group stat block — the animated-counter style figures from the site
 * ("Local Offices", "$XXM 2023 Closed Transactions"). Static display here.
 */
export function StatBlock({ value, label, prefix, suffix, tone = 'navy', align = 'center', style, ...rest }) {
  const color = tone === 'salmon' ? 'var(--tcs-salmon)'
    : tone === 'light' ? 'var(--tcs-white)' : 'var(--tcs-navy)';
  const labelColor = tone === 'light' ? 'rgba(255,255,255,.7)' : 'var(--text-muted)';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align, gap: 6, ...style,
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'var(--fs-display-m)', lineHeight: 1, letterSpacing: '-0.03em',
        color, display: 'inline-flex', alignItems: 'baseline',
      }}>
        {prefix && <span style={{ fontSize: '0.55em', marginRight: 2 }}>{prefix}</span>}
        {value}
        {suffix && <span style={{ fontSize: '0.55em', marginLeft: 2 }}>{suffix}</span>}
      </div>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-semibold)', letterSpacing: '0.06em',
        textTransform: 'uppercase', color: labelColor,
      }}>{label}</div>
    </div>
  );
}
