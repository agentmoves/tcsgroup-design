// TCS Group website — Listings / search results screen.
const { Navbar, Footer, Button, Tag, Input, Select, PropertyCard, SectionHeading } = window.DesignSystem_7a2e65;

function ListingsScreen({ navigate }) {
  const listings = window.TCS_LISTINGS || [];
  return (
    <div style={{ background: 'var(--tcs-cloud)', minHeight: '100vh' }}>
      <Navbar variant="solid" active="Properties" />

      {/* Filter bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border-default)', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '18px 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: 12, alignItems: 'end' }}>
          <Input label="Location" prefix="⌕" placeholder="Philadelphia, PA" defaultValue="Philadelphia, PA" />
          <Select label="Type" options={['Any type', 'Condo', 'Single Family', 'Multi-Family']} />
          <Select label="Beds" options={['Any', '1+', '2+', '3+', '4+']} />
          <Select label="Price" options={['Any price', 'Under $500k', '$500k–$1M', '$1M+']} />
          <Button variant="primary" size="md">Update</Button>
        </div>
      </div>

      {/* Results header */}
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '32px 32px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 30, margin: '0 0 4px' }}>Homes in Philadelphia</h1>
          <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{listings.length} results · sorted by relevance</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Tag tone="navy" dot>For Sale</Tag>
          <Tag tone="outline">For Rent</Tag>
          <Tag tone="outline">Open Houses</Tag>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '8px 32px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {listings.map((l, i) => (
            <PropertyCard key={i} {...l} onClick={() => navigate('detail')} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <Button variant="outline" size="lg">Load more listings</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
window.ListingsScreen = ListingsScreen;
