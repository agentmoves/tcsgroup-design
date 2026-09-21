import React from 'react';

const sizes = {
  sm: { padding: '8px 16px', fontSize: 'var(--fs-body-sm)', gap: 6 },
  md: { padding: '12px 24px', fontSize: 'var(--fs-body)', gap: 8 },
  lg: { padding: '16px 32px', fontSize: 'var(--fs-body-lg)', gap: 10 },
};

const variants = {
  primary: {
    background: 'var(--color-accent)', color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-accent-hover)',
  },
  secondary: {
    background: 'var(--color-primary)', color: 'var(--text-inverse)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-primary-hover)',
  },
  outline: {
    background: 'transparent', color: 'var(--tcs-navy)',
    border: '1.5px solid var(--tcs-navy)',
    '--hover-bg': 'var(--tcs-navy-050)',
  },
  ghost: {
    background: 'transparent', color: 'var(--tcs-navy)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--tcs-slate-100)',
  },
};

/**
 * TCS Group button. Pill-shaped, confident. Salmon = primary CTA,
 * navy = secondary action, outline/ghost for lower emphasis.
 */
export function Button({
  variant = 'primary', size = 'md', fullWidth = false,
  leadingIcon, trailingIcon, disabled = false, children, style, onMouseEnter, onMouseLeave, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return (
    <button
      disabled={disabled}
      onMouseEnter={(e) => { setHover(true); onMouseEnter && onMouseEnter(e); }}
      onMouseLeave={(e) => { setHover(false); onMouseLeave && onMouseLeave(e); }}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)',
        lineHeight: 1, letterSpacing: '0.01em',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        transform: hover && !disabled ? 'translateY(-1px)' : 'none',
        boxShadow: hover && !disabled && (variant === 'primary' || variant === 'secondary') ? 'var(--shadow-md)' : 'none',
        background: hover && !disabled && v['--hover-bg'] ? v['--hover-bg'] : v.background,
        color: v.color, border: v.border,
        ...style,
      }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
