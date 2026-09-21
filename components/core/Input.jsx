import React from 'react';

/**
 * TCS Group text input. Clean, rounded, navy focus ring.
 * Supports an optional leading icon/adornment and prefix (e.g. "$").
 */
export function Input({
  label, hint, error, leadingIcon, prefix, size = 'md',
  id, style, disabled, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const pad = size === 'lg' ? '14px 16px' : '11px 14px';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: disabled ? 'var(--tcs-cloud)' : 'var(--tcs-white)',
        border: '1.5px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        padding: pad,
        boxShadow: focus ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {leadingIcon && <span style={{ display: 'flex', color: 'var(--tcs-slate)' }}>{leadingIcon}</span>}
        {prefix && <span style={{ color: 'var(--tcs-slate)', fontWeight: 600 }}>{prefix}</span>}
        <input
          id={inputId} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
            color: 'var(--text-body)', minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{
          fontSize: 'var(--fs-caption)',
          color: error ? 'var(--status-danger)' : 'var(--text-muted)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
