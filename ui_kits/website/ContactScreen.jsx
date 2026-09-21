// TCS Group website — Contact screen.
const { Navbar, Footer, Button, Input, Select } = window.DesignSystem_7a2e65;

function ContactScreen({ navigate }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ background: 'var(--tcs-cloud)', minHeight: '100vh' }}>
      <Navbar variant="solid" active="Contact" />
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '56px 32px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
        {/* Info */}
        <div>
          <span className="tcs-eyebrow">Get in touch</span>
          <h1 style={{ fontSize: 40, margin: '12px 0 16px' }}>Let's find your next move.</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.7, maxWidth: 380 }}>
            Tell us what you're looking for and a TCS advisor will run your numbers and map out next steps —
            no pressure, no jargon.
          </p>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['map-pin', '1425 Locust Street, Philadelphia, PA 19102'], ['phone', '(215) 692-6636'], ['mail', 'info@tcsgroup.com']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--tcs-navy-050)', color: 'var(--tcs-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i data-lucide={ic} style={{ width: 18, height: 18 }} />
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 28 }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 12px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(46,158,107,.12)', color: 'var(--status-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i data-lucide="check" style={{ width: 26, height: 26 }} />
              </div>
              <h3 style={{ fontSize: 22 }}>Thanks — we'll be in touch.</h3>
              <p style={{ color: 'var(--text-muted)' }}>A TCS advisor typically responds within one business day.</p>
              <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Input label="First name" placeholder="Jordan" />
                <Input label="Last name" placeholder="Rivera" />
              </div>
              <Input label="Email" type="email" placeholder="you@email.com" />
              <Input label="Phone" placeholder="(215) 555-0199" />
              <Select label="I'm interested in" options={['Buying a home', 'Selling my home', 'Renting', 'Investing', 'Something else']} />
              <Button variant="primary" size="lg" fullWidth onClick={() => { setSent(true); setTimeout(() => window.lucide && window.lucide.createIcons(), 30); }}>Send message</Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
window.ContactScreen = ContactScreen;
