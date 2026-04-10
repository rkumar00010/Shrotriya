import PageHero from "../_shared/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="15+ years of excellence in premium medical equipment supply and healthcare solutions."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="about-grid fade-in">
            <div>
              <div className="stag">Our Story</div>
              <h2 className="stitle">
                Shrotriya <span>Industries</span>
              </h2>
              <p className="ssub">
                Shrotriya Industries is a leading supplier of premium medical equipment and healthcare solutions, headquartered in Greater Noida, Uttar Pradesh.
              </p>
              <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.8, marginTop: "16px" }}>
                We partner with world-renowned manufacturers to bring reliable medical technology to Indian healthcare providers with dependable after-sales support.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="num">500+</div>
                  <div className="lbl">Hospitals Served</div>
                </div>
                <div className="about-stat">
                  <div className="num">1000+</div>
                  <div className="lbl">Clinics &amp; Labs</div>
                </div>
                <div className="about-stat">
                  <div className="num">50+</div>
                  <div className="lbl">Product Categories</div>
                </div>
                <div className="about-stat">
                  <div className="num">15+</div>
                  <div className="lbl">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="about-img-box">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="About Shrotriya Industries" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: "var(--cream)", padding: "72px 0" }}>
        <div className="si">
          <div className="why-grid">
            <div className="cert-box fade-in">
              <h3>Quality Certifications</h3>
              <div className="cert-list">
                <div className="cert-it">
                  <div className="cert-badge">ISO 9001:2015</div>
                  <p>Quality Management System</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">CE Marking</div>
                  <p>European Conformity</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">FDA Approved</div>
                  <p>US Food &amp; Drug Administration</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">GMP Certified</div>
                  <p>Good Manufacturing Practice</p>
                </div>
                <div className="cert-it">
                  <div className="cert-badge">MSME Reg.</div>
                  <p>Registered MSME Enterprise, Govt. of India</p>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="stag">Our Mission</div>
              <h2 className="stitle">
                Delivering <span>Better Healthcare</span>
              </h2>
              <p className="ssub" style={{ marginBottom: "24px" }}>
                Our mission is to empower healthcare providers with reliable, high-quality medical equipment and end-to-end support services.
              </p>
              <div className="why-pts">
                <div className="why-pt">
                  <div className="wy-ico">🎯</div>
                  <div>
                    <h4>Our Vision</h4>
                    <p>To be India&apos;s most trusted medical equipment partner, known for quality, reliability, and service excellence.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">💎</div>
                  <div>
                    <h4>Our Values</h4>
                    <p>Integrity, quality, customer-first approach, and continuous improvement in everything we do.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🤝</div>
                  <div>
                    <h4>Our Commitment</h4>
                    <p>Long-term partnerships built on trust, transparency, and exceptional after-sales support.</p>
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
