import Link from "next/link";
import fisherLogo from "../assets/images/Fisher.jpeg";
import draegerLogo from "../assets/images/Draeger.jpeg";
import matridermLogo from "../assets/images/Matriderm.jpeg";

const homeBrands = [
  {
    logo: fisherLogo.src,
    name: "Fisher & Paykel Healthcare India Pvt Ltd",
    line: "Respiratory care & acute care solutions"
  },
  {
    logo: draegerLogo.src,
    name: "Draeger India Pvt Ltd",
    line: "Ventilation, anaesthesia & patient monitoring"
  },
  {
    logo: matridermLogo.src,
    name: "Matriderm (Medskin Solution)",
    line: "Advanced wound & skin solutions"
  }
];

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-ov"></div>
        <div className="hc1"></div>
        <div className="hc2"></div>
        <div className="home-hero-inner">
          <div className="fade-in">
            <div className="hero-badge">🏥 Trusted Medical Equipment Supplier</div>
            <h1>
              Premium <span>Medical Equipment</span> Supply
            </h1>
            <p className="hero-desc">
              Shrotriya Industries Private Limited — your partner for ICU, OT and emergency solutions, surgical equipment, and hospital supplies across India.
            </p>
            <div className="hero-btns">
              <Link className="btn-p" href="/products">
                Explore Products →
              </Link>
              <Link className="btn-o" href="/contact">
                Contact Us
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-b">
                <span>🏥</span>
                <div>
                  <strong>100+ Hospitals Served</strong>
                  <span>Trusted nationwide</span>
                </div>
              </div>
              <div className="trust-b">
                <span>✅</span>
                <div>
                  <strong>FDA Approved</strong>
                  <span>Verified products</span>
                </div>
              </div>
              <div className="trust-b">
                <span>⭐</span>
                <div>
                  <strong>20+ Years</strong>
                  <span>Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right fade-in">
            <div className="hero-cards">
              <Link className="hero-card" href="/products#icu-ot-emergency">
                <div className="hci">🚨</div>
                <div>
                  <h4>ICU, OT &amp; Emergency</h4>
                  <p>Critical care, operation theatre and emergency equipment</p>
                </div>
              </Link>
              <Link className="hero-card" href="/products#surgical">
                <div className="hci">⚕️</div>
                <div>
                  <h4>Surgical</h4>
                  <p>Surgical instruments and OT solutions</p>
                </div>
              </Link>
              <Link className="hero-card" href="/categories#consumables-disposables">
                <div className="hci">💉</div>
                <div>
                  <h4>Consumables &amp; Disposables</h4>
                  <p>Hospital consumables and disposable supplies</p>
                </div>
              </Link>
              <Link className="hero-card" href="/categories#maternity-neonatal">
                <div className="hci">🤱</div>
                <div>
                  <h4>Maternity &amp; Neonatal</h4>
                  <p>Care equipment for mothers and newborns</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-strip">
        <div className="marquee-inner">
          <span className="mi">100+ Hospitals Served</span>
          <span className="mi">ICU, OT &amp; Emergency Focus</span>
          <span className="mi">Medical Equipment Supply</span>
          <span className="mi">Installation &amp; Maintenance</span>
          <span className="mi">Mon–Sat Support: 9:30 AM – 6:30 PM</span>
          <span className="mi">20+ Years Experience</span>
          <span className="mi">Greater Noida &amp; Noida Offices</span>
          <span className="mi">100+ Hospitals Served</span>
          <span className="mi">ICU, OT &amp; Emergency Focus</span>
          <span className="mi">Medical Equipment Supply</span>
          <span className="mi">Installation &amp; Maintenance</span>
          <span className="mi">Mon–Sat Support: 9:30 AM – 6:30 PM</span>
          <span className="mi">20+ Years Experience</span>
          <span className="mi">Greater Noida &amp; Noida Offices</span>
        </div>
      </div>

      <section className="sec" style={{ background: "var(--cream)", padding: "48px 0" }}>
        <div className="si">
          <div className="fade-in" style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div style={{ padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.05rem", marginBottom: "10px" }}>Corporate Office</h3>
              <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                C-313, Beta 1, Greater Noida, Distt. Gautam Budh Nagar (U.P.) – 201306
              </p>
            </div>
            <div style={{ padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.05rem", marginBottom: "10px" }}>Branch Office</h3>
              <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                B106, Sector-63, Noida, Distt. Gautam Budh Nagar (U.P.) – 201309
              </p>
            </div>
            <div style={{ padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.05rem", marginBottom: "10px" }}>Contact</h3>
              <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                <a href="tel:01204196566">0120-4196566</a>, <a href="tel:9310468210">9310468210</a>
                <br />
                Mobile: <a href="tel:9911411821">9911411821</a>
                <br />
                <a href="mailto:Sales@shrotriyaindustries.com">Sales@shrotriyaindustries.com</a>
                <br />
                <a href="mailto:Info@shrotriyaindustries.com">Info@shrotriyaindustries.com</a>
                <br />
                <span style={{ marginTop: "8px", display: "inline-block" }}>Mon–Sat: 9:30 AM – 6:30 PM</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec cat-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">Key Categories</div>
            <h2 className="stitle">
              Our Medical <span>Product Categories</span>
            </h2>
            <p className="ssub">
              Consumables and disposables, ICU and emergency, maternity and neonatal care, and surgical instruments.
            </p>
          </div>
          <div className="cat-grid home-cat-grid fade-in" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <Link className="cat-card" href="/categories#consumables-disposables">
              <div className="cat-icon">💉</div>
              <h3>Consumables and Disposables</h3>
              <p>Essential consumables and disposable supplies for hospitals and clinics</p>
            </Link>
            <Link className="cat-card" href="/categories#icu-emergency">
              <div className="cat-icon">🚨</div>
              <h3>ICU and Emergency</h3>
              <p>Critical care and emergency medical equipment</p>
            </Link>
            <Link className="cat-card" href="/categories#maternity-neonatal">
              <div className="cat-icon">🤱</div>
              <h3>Maternity and Neonatal</h3>
              <p>Equipment for maternity and newborn care</p>
            </Link>
            <Link className="cat-card" href="/categories#surgical-instruments">
              <div className="cat-icon">⚕️</div>
              <h3>Surgical Instruments</h3>
              <p>Precision surgical tools and instruments</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec brands-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">Our Brand Partners</div>
            <h2 className="stitle">
              Trusted <span>Manufacturer Partners</span>
            </h2>
            <p className="ssub">
              We work with Fisher &amp; Paykel Healthcare India Pvt Ltd, Draeger India Pvt Ltd, and Matriderm (Medskin Solution) — among others — to deliver reliable equipment to healthcare providers.
            </p>
          </div>
          <div className="brands-grid fade-in" style={{ marginBottom: "8px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {homeBrands.map((b) => (
              <div key={b.name} className="brand-card">
                <div className="brand-logo">
                  {b.logo.startsWith("http") || b.logo.startsWith("/") ? <img src={b.logo} alt={b.name} /> : b.logo}
                </div>
                <h4>{b.name}</h4>
                <p>{b.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="si">
          <div className="why-grid">
            <div className="fade-in">
              <div className="stag">Why Choose Us</div>
              <h2 className="stitle">
                Your Trusted <span>Healthcare Partner</span>
              </h2>
              <p className="ssub">
                For over 20 years, Shrotriya Industries Private Limited has supplied medical equipment with installation, maintenance, and customer support you can rely on.
              </p>
              <div className="why-pts">
                <div className="why-pt">
                  <div className="wy-ico">🏥</div>
                  <div>
                    <h4>ICU, OT &amp; Emergency</h4>
                    <p>Focused expertise in intensive care, operation theatre, and emergency medical needs.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🕐</div>
                  <div>
                    <h4>Customer Support</h4>
                    <p>Monday to Saturday, 9:30 AM – 6:30 PM — dedicated assistance for your queries and service requests.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🔧</div>
                  <div>
                    <h4>Installation &amp; Maintenance</h4>
                    <p>Professional setup and ongoing maintenance for dependable equipment performance.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🚚</div>
                  <div>
                    <h4>Pan-India Supply</h4>
                    <p>Medical equipment supply to hospitals and healthcare facilities across India.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cert-box fade-in">
              <h3>What We Stand For</h3>
              <div className="cert-list">
                <div className="cert-it">
                  <div className="cert-badge">Genuine</div>
                  <p>Authorised brands and authentic products through proper channels</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">100+</div>
                  <p>Hospitals served — long-term relationships built on trust</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">20+ Yrs</div>
                  <p>Industry experience in medical equipment and healthcare supply</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">Service</div>
                  <p>End-to-end support from supply to installation and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="si">
          <div className="stats-grid">
            <div className="stat-it fade-in">
              <div className="stat-num">100+</div>
              <div className="stat-lbl">Hospitals Served</div>
            </div>
            <div className="stat-it fade-in">
              <div className="stat-num">20+</div>
              <div className="stat-lbl">Years Experience</div>
            </div>
            <div className="stat-it fade-in">
              <div className="stat-num">ICU</div>
              <div className="stat-lbl">OT &amp; Emergency</div>
            </div>
            <div className="stat-it fade-in">
              <div className="stat-num">9:30–6:30</div>
              <div className="stat-lbl">Mon–Sat Support</div>
            </div>
          </div>
        </div>
      </div>

      <section className="sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">What Our Clients Say</div>
            <h2 className="stitle">
              Trusted by <span>Healthcare Leaders</span>
            </h2>
          </div>
          <div className="testi-grid fade-in">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>
                Excellent service and quality products. They have been our trusted partner for medical equipment supply for years.
              </p>
              <div className="testi-auth">
                <div className="testi-av">RK</div>
                <div>
                  <h4>Dr. Rajesh Kumar</h4>
                  <span>Chief Medical Officer</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>
                Professional team with deep knowledge of medical equipment. Installation and maintenance support is top-notch.
              </p>
              <div className="testi-auth">
                <div className="testi-av">PS</div>
                <div>
                  <h4>Dr. Priya Sharma</h4>
                  <span>Hospital Administrator</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>Best pricing with genuine products. Highly recommended for hospitals and clinics.</p>
              <div className="testi-auth">
                <div className="testi-av">AP</div>
                <div>
                  <h4>Dr. Amit Patel</h4>
                  <span>Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-sec">
        <div className="si">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for consultation and quotations.</p>
          <div className="cta-btns">
            <Link className="btn-w" href="/contact">
              Get in Touch
            </Link>
            <a href="tel:01204196566" className="btn-wo">
              📞 0120-4196566
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
