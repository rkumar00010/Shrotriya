import PageHero from "../_shared/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        heading="Shrotriya Industries Private Limited"
        subtitle="More than 20 years of experience in medical equipment supply — serving ICU, OT, and emergency needs across India."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="about-grid fade-in">
            <div>
              <div className="stag">Our Story</div>
              <h2 className="stitle">
                Shrotriya Industries <span>Private Limited</span>
              </h2>
              <p className="ssub">
                We are a leading supplier of medical equipment and healthcare solutions, with a corporate office in Greater Noida and a branch in Noida, Uttar Pradesh.
              </p>
              <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.8, marginTop: "16px" }}>
                With <strong>more than 20 years</strong> of experience, we focus on ICU, OT and emergency equipment, surgical needs, consumables, and related categories — backed by supply, installation, maintenance, and customer support (Monday–Saturday, 9:30 AM – 6:30 PM).
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="num">100+</div>
                  <div className="lbl">Hospitals Served</div>
                </div>
                <div className="about-stat">
                  <div className="num">20+</div>
                  <div className="lbl">Years Experience</div>
                </div>
                <div className="about-stat">
                  <div className="num">ICU</div>
                  <div className="lbl">OT &amp; Emergency</div>
                </div>
                <div className="about-stat">
                  <div className="num">2</div>
                  <div className="lbl">Office Locations</div>
                </div>
              </div>
            </div>
            <div className="about-img-box">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="About Shrotriya Industries Private Limited" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: "var(--cream)", padding: "72px 0" }}>
        <div className="si">
          <div className="why-grid">
            <div className="cert-box fade-in">
              <h3>Locations</h3>
              <div className="cert-list">
                <div className="cert-it">
                  <div className="cert-badge">Corporate</div>
                  <p>C-313, Beta 1, Greater Noida, Distt. Gautam Budh Nagar (U.P.) – 201306</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">Branch</div>
                  <p>B 106, Sector-63, Noida, Distt. Gautam Budh Nagar (U.P.) – 201309</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">Map</div>
                  <p>Branch / map reference: B 106, Sector 63, Noida</p>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="stag">Our Mission</div>
              <h2 className="stitle">
                Delivering <span>Better Healthcare</span>
              </h2>
              <p className="ssub" style={{ marginBottom: "24px" }}>
                Our mission is to empower healthcare providers with reliable medical equipment, genuine brands, and dependable support from enquiry to after-sales service.
              </p>
              <div className="why-pts">
                <div className="why-pt">
                  <div className="wy-ico">🎯</div>
                  <div>
                    <h4>Our Vision</h4>
                    <p>To remain a trusted medical equipment partner for hospitals and clinics, known for quality products and responsive service.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">💎</div>
                  <div>
                    <h4>Our Values</h4>
                    <p>Integrity, customer focus, and long-term relationships with healthcare institutions.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🤝</div>
                  <div>
                    <h4>Our Commitment</h4>
                    <p>Transparent dealings, authorised supply chains, and support within our committed business hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
