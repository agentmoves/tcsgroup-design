// TCS Group website — Property detail screen.
const { Navbar, Footer, Button, Tag, StatBlock } = window.DesignSystem_7a2e65;

function PropertyDetailScreen({ navigate }) {
  return (
    <div style={{ background: 'var(--tcs-paper)' }}>
      <Navbar variant="solid" active="Properties" />

      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '20px 32px 0' }}>
        <Button variant="ghost" size="sm" onClick={() => navigate('listings')}>← Back to results</Button>
      </div>

      {/* Gallery */}
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '16px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, height: 420 }}>
          <div style={{ borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--tcs-navy), var(--tcs-navy-600))', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
              <Tag tone="salmon">For Sale</Tag><Tag tone="navy">Featured</Tag>
            </div>
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.3)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40 }}>TCS.</span>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 12 }}>
            <div style={{ borderRadius: 'var(--radius-lg)', background: 'var(--tcs-sky)' }}></div>
            <div style={{ borderRadius: 'var(--radius-lg)', background: 'var(--tcs-slate-100)' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '32px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 800, letterSpacing: '-.03em', color: 'var(--text-strong)' }}>$1,000,000</div>
          <div style={{ fontSize: 20, fontWeight: 600, margin: '6px 0 2px' }}>528 Berks Street</div>
          <div style={{ color: 'var(--text-muted)' }}>Philadelphia, Pennsylvania 19122</div>

          <div style={{ display: 'flex', gap: 40, padding: '28px 0', margin: '24px 0', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
            <StatBlock align="left" value="4" label="Beds" />
            <StatBlock align="left" value="3" label="Baths" />
            <StatBlock align="left" value="3,000" label="Sq Ft" />
            <StatBlock align="left" value="2008" label="Built" />
          </div>

          <h3 style={{ fontSize: 22 }}>About this home</h3>
          <p style={{ color: 'var(--text-body)', lineHeight: 1.7, maxWidth: 620 }}>
            A rare income-producing property in the heart of Philadelphia. Three finished floors, a fully
            renovated kitchen, and off-street parking. Steps from Fishtown's dining and transit — an ideal
            first investment or owner-occupant duplex under the Burn-To-Earn™ approach.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
            {['Parking', 'Renovated', 'Income Property', 'Central Air', 'Roof Deck'].map((f) => (
              <Tag key={f} tone="slate">{f}</Tag>
            ))}
          </div>
        </div>

        {/* Agent / contact rail */}
        <div style={{ position: 'sticky', top: 24, background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--tcs-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800 }}>TCS</div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-strong)' }}>TCS Group</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Keller Williams Empower</div>
            </div>
          </div>
          <Button variant="primary" fullWidth size="lg" onClick={() => navigate('contact')}>Schedule a tour</Button>
          <div style={{ height: 10 }} />
          <Button variant="outline" fullWidth onClick={() => navigate('contact')}>Ask a question</Button>
          <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--text-muted)' }}>
            Or call <a href="tel:2156926636" style={{ fontWeight: 700 }}>(215) 692-6636</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
window.PropertyDetailScreen = PropertyDetailScreen;
