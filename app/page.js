import Link from "next/link";

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
              Trusted by hospitals, clinics, and healthcare organizations nationwide. Your one-stop solution for all medical equipment needs.
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
                <span>🏅</span>
                <div>
                  <strong>ISO Certified</strong>
                  <span>Quality Assured</span>
                </div>
              </div>
              <div className="trust-b">
                <span>✅</span>
                <div>
                  <strong>FDA Approved</strong>
                  <span>Verified Products</span>
                </div>
              </div>
              <div className="trust-b">
                <span>⭐</span>
                <div>
                  <strong>15+ Years</strong>
                  <span>Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right fade-in">
            <div className="hero-cards">
              <Link className="hero-card" href="/products">
                <div className="hci">🔬</div>
                <div>
                  <h4>Diagnostic Equipment</h4>
                  <p>X-ray, ultrasound, ECG &amp; blood analyzers</p>
                </div>
              </Link>
              <Link className="hero-card" href="/products">
                <div className="hci">🛏️</div>
                <div>
                  <h4>Hospital Furniture</h4>
                  <p>ICU beds, OT tables &amp; patient trolleys</p>
                </div>
              </Link>
              <Link className="hero-card" href="/products">
                <div className="hci">⚕️</div>
                <div>
                  <h4>Surgical Instruments</h4>
                  <p>Precision tools for all procedures</p>
                </div>
              </Link>
              <Link className="hero-card" href="/products">
                <div className="hci">🚨</div>
                <div>
                  <h4>ICU &amp; Emergency</h4>
                  <p>Ventilators, monitors &amp; defibrillators</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-strip">
        <div className="marquee-inner">
          <span className="mi">ISO 9001:2015 Certified</span>
          <span className="mi">FDA Approved Products</span>
          <span className="mi">500+ Hospitals Served</span>
          <span className="mi">Pan-India Delivery</span>
          <span className="mi">15+ Years Experience</span>
          <span className="mi">24/7 After-Sales Support</span>
          <span className="mi">ISO 9001:2015 Certified</span>
          <span className="mi">FDA Approved Products</span>
          <span className="mi">500+ Hospitals Served</span>
          <span className="mi">Pan-India Delivery</span>
          <span className="mi">15+ Years Experience</span>
          <span className="mi">24/7 After-Sales Support</span>
        </div>
      </div>

      <section className="sec cat-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">Key Categories</div>
            <h2 className="stitle">
              Our Medical <span>Product Categories</span>
            </h2>
            <p className="ssub">
              Comprehensive range of medical equipment for diagnostics, surgery, ICU, labs, and hospital infrastructure.
            </p>
          </div>
          <div className="cat-grid home-cat-grid fade-in">
            <Link className="cat-card" href="/products">
              <div className="cat-icon">🔬</div>
              <h3>Diagnostic Equipment</h3>
              <p>Advanced diagnostic tools and imaging equipment</p>
            </Link>
            <Link className="cat-card" href="/products">
              <div className="cat-icon">🛏️</div>
              <h3>Hospital Furniture</h3>
              <p>Premium quality beds and medical furniture</p>
            </Link>
            <Link className="cat-card" href="/products">
              <div className="cat-icon">⚕️</div>
              <h3>Surgical Instruments</h3>
              <p>Precision surgical tools and equipment</p>
            </Link>
            <Link className="cat-card" href="/products">
              <div className="cat-icon">🚨</div>
              <h3>ICU &amp; Emergency</h3>
              <p>Critical care and emergency equipment</p>
            </Link>
            <Link className="cat-card" href="/products">
              <div className="cat-icon">🧪</div>
              <h3>Laboratory Equipment</h3>
              <p>Lab instruments and testing tools</p>
            </Link>
            <Link className="cat-card" href="/products">
              <div className="cat-icon">🛡️</div>
              <h3>PPE &amp; Safety</h3>
              <p>Protective equipment for healthcare staff</p>
            </Link>
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
                With 15+ years of experience, Shrotriya Industries delivers certified medical equipment and healthcare solutions trusted nationwide.
              </p>
              <div className="why-pts">
                <div className="why-pt">
                  <div className="wy-ico">🏅</div>
                  <div>
                    <h4>Certified Quality</h4>
                    <p>Products that meet international quality standards and certifications.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🕐</div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock support for service requests and emergencies.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">🚚</div>
                  <div>
                    <h4>Fast Pan-India Delivery</h4>
                    <p>Reliable delivery across major cities and towns in India.</p>
                  </div>
                </div>
                <div className="why-pt">
                  <div className="wy-ico">💰</div>
                  <div>
                    <h4>Competitive Pricing</h4>
                    <p>Best pricing with flexible options and bulk discounts.</p>
                  </div>
                </div>
              </div>
            </div>
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
                  <div className="cert-badge">BIS / ISI</div>
                  <p>Bureau of Indian Standards</p>
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
              <div className="stat-num">500+</div>
              <div className="stat-lbl">Hospitals Served</div>
            </div>
            <div className="stat-it fade-in">
              <div className="stat-num">1000+</div>
              <div className="stat-lbl">Clinics &amp; Labs</div>
            </div>
            <div className="stat-it fade-in">
              <div className="stat-num">50+</div>
              <div className="stat-lbl">Product Categories</div>
            </div>
            <div className="stat-it fade-in">
              <div className="stat-num">15+</div>
              <div className="stat-lbl">Years Experience</div>
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
            <a href="tel:+911234567890" className="btn-wo">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
