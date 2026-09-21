import React from 'react';

/**
 * TCS Group section heading — salmon uppercase eyebrow, display title,
 * optional supporting line. Used to open every marketing section.
 */
export function SectionHeading({
  eyebrow, title, description, align = 'left', tone = 'dark', style, ...rest
}) {
  const titleColor = tone === 'light' ? 'var(--tcs-white)' : 'var(--text-strong)';
  const descColor = tone === 'light' ? 'rgba(255,255,255,.75)' : 'var(--text-muted)';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 12,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align, maxWidth: align === 'center' ? 680 : 560,
      margin: align === 'center' ? '0 auto' : 0,
      ...style,
    }} {...rest}>
      {eyebrow && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)',
          fontWeight: 'var(--fw-bold)', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--tcs-salmon)',
        }}>{eyebrow}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'var(--fs-display-m)', lineHeight: 1.1, letterSpacing: '-0.03em',
        color: titleColor, margin: 0, textWrap: 'balance',
      }}>{title}</h2>
      {description && (
        <p style={{
          fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-relaxed)',
          color: descColor, margin: 0, textWrap: 'pretty',
        }}>{description}</p>
      )}
    </div>
  );
}
