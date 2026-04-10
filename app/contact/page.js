"use client";

import PageHero from "../_shared/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for any queries, quotes, or support."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="sh fade-in" style={{ marginBottom: "40px" }}>
            <div className="stag">Get in Touch</div>
            <h2 className="stitle">
              We&apos;re Here to <span>Help You</span>
            </h2>
            <p className="ssub">Reach out through any channel. Our specialists will respond within 24 hours.</p>
          </div>
          <div className="contact-grid fade-in">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", marginBottom: "20px" }}>
                Get in Touch
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="cc">
                  <div className="cc-ico">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+911234567890">+91-1234567890</a>
                      <br />
                      <a href="tel:+919876543210">+91-9876543210</a>
                    </p>
                  </div>
                </div>
                <div className="cc">
                  <div className="cc-ico">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@shrotriyaindustries.com">info@shrotriyaindustries.com</a>
                      <br />
                      <a href="mailto:support@shrotriyaindustries.com">support@shrotriyaindustries.com</a>
                    </p>
                  </div>
                </div>
                <div className="cc">
                  <div className="cc-ico">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>
                      Greater Noida, Uttar Pradesh – 201306, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-box">
                <p>
                  📍 Map Location
                  <br />
                  <span style={{ fontSize: "0.78rem" }}>Greater Noida, Uttar Pradesh</span>
                </p>
              </div>
            </div>
            <div className="form-box">
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", marginBottom: "24px" }}>
                Send us a Message
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for your message!\n\nOur specialist will contact you within 24 hours.\n\nShrotriya Industries"
                  );
                }}
              >
                <div className="form-row">
                  <div className="fg">
                    <label>Your Name *</label>
                    <input type="text" placeholder="Dr. / Your Full Name" required />
                  </div>
                  <div className="fg">
                    <label>Hospital / Organisation</label>
                    <input type="text" placeholder="Hospital or Clinic Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="fg">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="fg">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@hospital.com" required />
                  </div>
                </div>
                <div className="fg">
                  <label>Subject *</label>
                  <input type="text" placeholder="e.g. Quotation for Diagnostic Equipment" required />
                </div>
                <div className="fg">
                  <label>Product / Service Required</label>
                  <select required defaultValue="">
                    <option value="" disabled>
                      — Select Category —
                    </option>
                    <option>Diagnostic Equipment</option>
                    <option>Hospital Furniture</option>
                    <option>Surgical Instruments</option>
                    <option>Laboratory Equipment</option>
                    <option>ICU &amp; Emergency Equipment</option>
                    <option>PPE &amp; Safety Supplies</option>
                    <option>Installation &amp; Maintenance</option>
                    <option>Annual Maintenance Contract (AMC)</option>
                    <option>Hospital Setup Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="fg">
                  <label>Message *</label>
                  <textarea rows={4} placeholder="Describe your medical equipment requirements..." required />
                </div>
                <button className="btn-sub" type="submit">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
