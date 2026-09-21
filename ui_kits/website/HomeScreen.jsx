// TCS Group website — Home screen. Presentational recreation.
const { Navbar, Footer, Button, Tag, Input, Select, PropertyCard, StatBlock, SectionHeading, Testimonial } = window.DesignSystem_7a2e65;

function HomeScreen({ navigate }) {
  return (
    <div style={{ background: 'var(--tcs-paper)' }}>
      {/* Hero */}
      <div style={{ position: 'relative', background: 'linear-gradient(140deg, #1A2A47 0%, #223659 55%, #33507F 100%)', color: '#fff' }}>
        <Navbar variant="transparent" active="Properties" cta="Get Started" />
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px 32px 120px' }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--tcs-salmon)' }}>Philadelphia · South Jersey</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 64, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.02, margin: '16px 0 20px', maxWidth: 760 }}>
            Simplifying your <span style={{ color: 'var(--tcs-sky)' }}>real estate</span> experience.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,.8)', maxWidth: 560, margin: '0 0 32px' }}>
            A full-service brokerage licensed in five states. By your side every step — buying, selling, and renting.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" size="lg" onClick={() => navigate('listings')}>Buy</Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('contact')}>Sell</Button>
            <Button variant="outline" size="lg" onClick={() => navigate('listings')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>Rent</Button>
          </div>
        </div>
        {/* Search bar */}
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px', transform: 'translateY(50%)' }}>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 20, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: 14, alignItems: 'end' }}>
            <Input label="Location" prefix="⌕" placeholder="City, neighborhood, or ZIP" />
            <Select label="Type" options={['Any', 'Condo', 'Single Family', 'Multi-Family', 'Land']} />
            <Select label="Max Price" options={['Any', '$300k', '$500k', '$750k', '$1M+']} />
            <Button variant="primary" size="lg" onClick={() => navigate('listings')}>Search</Button>
          </div>
        </div>
      </div>

      {/* Featured listings */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '110px 32px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <SectionHeading eyebrow="Featured" title="Homes for sale in Philadelphia" />
          <Button variant="ghost" onClick={() => navigate('listings')}>View all →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {LISTINGS.slice(0, 3).map((l, i) => (
            <PropertyCard key={i} {...l} onClick={() => navigate('detail')} />
          ))}
        </div>
      </div>

      {/* Stats band */}
      <div style={{ background: 'var(--tcs-navy)', margin: '48px 0', padding: '56px 32px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          <StatBlock value="4,500" suffix="+" label="Rental Units Managed" tone="light" />
          <StatBlock value="80" suffix="+" label="Local Agents" tone="light" />
          <StatBlock value="1 in 5" label="Philly Home Sales" tone="light" />
          <StatBlock prefix="$" value="500" suffix="M" label="2023 Closed" tone="light" />
        </div>
      </div>

      {/* Services */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 32px 40px' }}>
        <SectionHeading align="center" eyebrow="What we do" title="Full-service, one-stop real estate" style={{ marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tcs-salmon-100)', color: 'var(--tcs-salmon-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <i data-lucide={s.icon} style={{ width: 24, height: 24 }} />
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 22 }}>{s.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 15 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 32px 80px' }}>
        <SectionHeading align="center" eyebrow="Our Clients" title="Consistently rated 5 stars" style={{ marginBottom: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <Testimonial stars={5} quote="TCS made buying our first home genuinely simple. They ran the numbers and we never felt sold to." name="Maya & Chris R." detail="First-time buyers · Fishtown" />
          <Testimonial stars={5} quote="Sold above asking in nine days. Staging, pricing, and negotiation were handled end to end." name="Daniel P." detail="Seller · Cherry Hill" />
          <Testimonial stars={5} quote="The moving concierge coordinated everything. We just showed up to a home that was ready." name="The Okonkwo Family" detail="Relocation · Main Line" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

const LISTINGS = [
  { status: 'For Sale', statusTone: 'salmon', featured: true, price: '$1,000,000', address: '528 Berks Street', locality: 'Philadelphia, PA 19122', beds: 4, baths: 3, sqft: '3,000', agent: 'TCS Group' },
  { status: 'For Sale', statusTone: 'salmon', price: '$999,999', address: '26 Strawberry Street', locality: 'Old City, PA 19106', beds: 3, baths: 3, sqft: '3,264', agent: 'TCS Group' },
  { status: 'For Rent', statusTone: 'sky', price: '$2,400 / mo', address: '1324 Locust St · Arts Condo', locality: 'Midtown, Philadelphia', beds: 1, baths: 1, sqft: '720', agent: 'Rent Philly' },
  { status: 'For Sale', statusTone: 'salmon', price: '$1,000,000', address: '1821 Christian Street', locality: 'Graduate Hospital, PA 19146', beds: 4, baths: 4, sqft: '2,142', agent: 'TCS Group' },
  { status: 'Sold', statusTone: 'success', price: '$785,000', address: '944 New Market Street', locality: 'Northern Liberties', beds: 3, baths: 2, sqft: '3,182', agent: 'TCS Group' },
  { status: 'For Rent', statusTone: 'sky', price: '$3,100 / mo', address: '9 Presidential Blvd · Luxor', locality: 'Bala Cynwyd', beds: 2, baths: 2, sqft: '1,150', agent: 'Rent Philly' },
];

const SERVICES = [
  { icon: 'home', title: 'Buy', desc: 'The perfect home at the best price, with off-market access and financing guidance.' },
  { icon: 'trending-up', title: 'Sell', desc: 'Strategic pricing, staging, and negotiation to sell fast and for top dollar.' },
  { icon: 'key-round', title: 'Rent', desc: 'A simpler way to rent — personalized matching across citywide inventory.' },
];

window.HomeScreen = HomeScreen;
window.TCS_LISTINGS = LISTINGS;
