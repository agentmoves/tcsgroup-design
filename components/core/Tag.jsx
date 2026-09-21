import React from 'react';

const tones = {
  navy:   { bg: 'var(--tcs-navy)',       fg: 'var(--tcs-white)' },
  salmon: { bg: 'var(--tcs-salmon)',     fg: 'var(--tcs-white)' },
  sky:    { bg: 'var(--tcs-sky)',        fg: 'var(--tcs-navy)' },
  slate:  { bg: 'var(--tcs-slate-100)',  fg: 'var(--tcs-slate-600)' },
  outline:{ bg: 'transparent',           fg: 'var(--tcs-navy)', border: '1px solid var(--border-strong)' },
  success:{ bg: 'rgba(46,158,107,.12)',  fg: 'var(--status-success)' },
};

/**
 * TCS Group tag / badge — status pills and category chips
 * ("For Sale", "Featured", "Condos", …).
 */
export function Tag({ tone = 'navy', size = 'md', dot = false, children, style, ...rest }) {
  const t = tones[tone] || tones.navy;
  const pad = size === 'sm' ? '3px 10px' : '5px 14px';
  const fs = size === 'sm' ? 'var(--fs-caption)' : 'var(--fs-body-sm)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: pad, fontSize: fs,
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.03em', lineHeight: 1.1,
      borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, border: t.border || '1px solid transparent',
      whiteSpace: 'nowrap',
      ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
