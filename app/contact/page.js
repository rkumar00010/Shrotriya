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
        <div className="si contact-grid">
          <div className="fade-in">
            <h3 style={{ color: "var(--navy)", marginBottom: "12px" }}>Get in Touch</h3>
            <p className="ssub">Phone: +91-1234567890<br />Email: info@shrotriyaindustries.com<br />Greater Noida, Uttar Pradesh</p>
          </div>
          <div className="form-box fade-in">
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for your message!"); }}>
              <div className="fg"><label>Your Name *</label><input type="text" required /></div>
              <div className="fg"><label>Phone Number *</label><input type="tel" required /></div>
              <div className="fg"><label>Email Address *</label><input type="email" required /></div>
              <div className="fg"><label>Message *</label><textarea rows="4" required></textarea></div>
              <button className="btn-sub" type="submit">Send Message →</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
