import React from 'react';

/**
 * TCS Group select — matches Input styling. Native <select> for reliability.
 */
export function Select({ label, hint, options = [], size = 'md', id, style, disabled, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const pad = size === 'lg' ? '14px 16px' : '11px 14px';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={selId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        position: 'relative',
        background: disabled ? 'var(--tcs-cloud)' : 'var(--tcs-white)',
        border: '1.5px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        <select
          id={selId} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%', border: 'none', outline: 'none', background: 'transparent',
            padding: pad, paddingRight: 40,
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
            color: 'var(--text-body)', cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--tcs-slate)', fontSize: 12,
        }}>▾</span>
      </div>
      {hint && <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
