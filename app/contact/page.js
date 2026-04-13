"use client";

import PageHero from "../_shared/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Corporate office in Greater Noida and branch in Noida — reach us by phone, mobile, or email."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="sh fade-in" style={{ marginBottom: "40px" }}>
            <div className="stag">Get in Touch</div>
            <h2 className="stitle">
              We&apos;re Here to <span>Help You</span>
            </h2>
            <p className="ssub">Mon–Sat: 9:30 AM – 6:30 PM. We will respond to enquiries during business hours.</p>
          </div>
          <div className="contact-grid fade-in">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem", marginBottom: "20px" }}>
                Shrotriya Industries Private Limited
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="cc">
                  <div className="cc-ico">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:01204196566">0120-4196566</a>
                      <br />
                      <a href="tel:9310468210">9310468210</a>
                    </p>
                  </div>
                </div>
                <div className="cc">
                  <div className="cc-ico">📱</div>
                  <div>
                    <h4>Mobile</h4>
                    <p>
                      <a href="tel:9911411821">9911411821</a>
                    </p>
                  </div>
                </div>
                <div className="cc">
                  <div className="cc-ico">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:Sales@shrotriyaindustries.com">Sales@shrotriyaindustries.com</a>
                      <br />
                      <a href="mailto:Info@shrotriyaindustries.com">Info@shrotriyaindustries.com</a>
                    </p>
                  </div>
                </div>
                <div className="cc">
                  <div className="cc-ico">📍</div>
                  <div>
                    <h4>Corporate Office</h4>
                    <p>
                      C-313, Beta 1, Greater Noida, Distt. Gautam Budh Nagar (U.P.) – 201306
                    </p>
                  </div>
                </div>
                <div className="cc">
                  <div className="cc-ico">📍</div>
                  <div>
                    <h4>Branch Office</h4>
                    <p>
                      B 106, Sector-63, Noida, Distt. Gautam Budh Nagar (U.P.) – 201309
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-box" style={{ padding: 0, overflow: "hidden" }}>
                <a
                  href="https://www.google.com/maps/place/28%C2%B036'56.7%22N+77%C2%B022'44.0%22E/@28.6157532,77.3763085,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.6157532!4d77.3788834?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open branch location in Google Maps"
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <iframe
                    title="Shrotriya branch map location"
                    src="https://www.google.com/maps?q=28.6157532,77.3788834&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block", pointerEvents: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
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
                    "Thank you for your message!\n\nOur team will contact you during business hours (Mon–Sat, 9:30 AM – 6:30 PM).\n\nShrotriya Industries Private Limited"
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
                  <input type="text" placeholder="e.g. Quotation for ICU equipment" required />
                </div>
                <div className="fg">
                  <label>Product / Service Required</label>
                  <select required defaultValue="">
                    <option value="" disabled>
                      — Select —
                    </option>
                    <option>ICU, OT and Emergency</option>
                    <option>Surgical</option>
                    <option>Consumables and Disposables</option>
                    <option>ICU and Emergency (category)</option>
                    <option>Maternity and Neonatal</option>
                    <option>Surgical Instruments</option>
                    <option>Medical equipment supply</option>
                    <option>Installation and Maintenance</option>
                    <option>Customer Support / General enquiry</option>
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
