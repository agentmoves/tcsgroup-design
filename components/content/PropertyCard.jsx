import React from 'react';
import { Tag } from '../core/Tag.jsx';

/**
 * TCS Group property listing card — the signature real-estate surface.
 * Photo with status/featured tags, price, address, and a bed/bath/sqft
 * spec row. Pass `image` (URL); falls back to a branded placeholder.
 */
export function PropertyCard({
  image, status = 'For Sale', statusTone = 'salmon', featured = false,
  price, address, locality, beds, baths, sqft, agent, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out)',
        cursor: 'pointer', display: 'flex', flexDirection: 'column',
        ...style,
      }}
      {...rest}
    >
      {/* Media */}
      <div style={{
        position: 'relative', aspectRatio: '4 / 3',
        background: image
          ? `center/cover no-repeat url("${image}")`
          : 'linear-gradient(135deg, var(--tcs-navy) 0%, var(--tcs-navy-600) 100%)',
      }}>
        <div style={{
          position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6,
        }}>
          <Tag tone={statusTone} size="sm">{status}</Tag>
          {featured && <Tag tone="navy" size="sm">Featured</Tag>}
        </div>
        {!image && (
          <span style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,.35)', fontFamily: 'var(--font-display)',
            fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em',
          }}>TCS.</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'var(--fs-h3)', color: 'var(--text-strong)', letterSpacing: '-0.02em',
        }}>{price}</div>
        <div>
          <div style={{ fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>{address}</div>
          {locality && <div style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>{locality}</div>}
        </div>
        {(beds != null || baths != null || sqft != null) && (
          <div style={{
            display: 'flex', gap: 18, paddingTop: 12,
            borderTop: '1px solid var(--border-default)',
            fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)',
          }}>
            {beds != null && <Spec label="Beds" value={beds} />}
            {baths != null && <Spec label="Baths" value={baths} />}
            {sqft != null && <Spec label="Sq Ft" value={sqft} />}
          </div>
        )}
        {agent && (
          <div style={{
            fontSize: 'var(--fs-caption)', color: 'var(--text-muted)',
            letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600,
          }}>{agent}</div>
        )}
      </div>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 5 }}>
      <strong style={{ color: 'var(--text-strong)', fontWeight: 700 }}>{value}</strong>
      <span>{label}</span>
    </span>
  );
}
