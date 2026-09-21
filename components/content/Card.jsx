import React from 'react';

/**
 * TCS Group base surface card — white, soft navy shadow, gentle radius.
 * Optional hover-lift for interactive cards.
 */
export function Card({ interactive = false, padding = 'var(--space-5)', children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out)',
        padding,
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
