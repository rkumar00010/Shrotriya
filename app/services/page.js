import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        heading="Our Services"
        subtitle="Medical equipment supply, installation and maintenance, and customer support — Monday to Saturday, 9:30 AM to 6:30 PM."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80"
      />
      <section className="sec serv-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">What We Offer</div>
            <h2 className="stitle">
              End-to-End <span>Healthcare Services</span>
            </h2>
            <p className="ssub">
              Shrotriya Industries Private Limited supports your facility from procurement through installation, maintenance, and ongoing customer care.
            </p>
          </div>
          <div className="serv-grid fade-in">
            <div className="serv-card" id="supply" style={{ scrollMarginTop: "100px" }}>
              <div className="serv-img">
                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80" alt="Medical equipment supply" />
                <div className="serv-img-ov"></div>
                <span className="serv-lbl">Supply</span>
              </div>
              <div className="serv-body">
                <div className="serv-ico-sm">📦</div>
                <h3>Medical equipment supply</h3>
                <p>
                  Complete medical equipment supply for hospitals, clinics, and healthcare facilities — ICU, OT, emergency, surgical, and category-wise products as per your requirements.
                </p>
                <ul className="serv-list">
                  <li>Wide product range</li>
                  <li>Genuine brands</li>
                  <li>Competitive pricing</li>
                </ul>
                <Link className="serv-lnk" href="/contact">
                  Enquire →
                </Link>
              </div>
            </div>
            <div className="serv-card" id="maintenance" style={{ scrollMarginTop: "100px" }}>
              <div className="serv-img">
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80" alt="Installation and Maintenance" />
                <div className="serv-img-ov"></div>
                <span className="serv-lbl">Install</span>
              </div>
              <div className="serv-body">
                <div className="serv-ico-sm">🔧</div>
                <h3>Installation and Maintenance</h3>
                <p>
                  Professional installation and maintenance services so your equipment runs reliably — planned checks and technical assistance aligned with manufacturer guidelines.
                </p>
                <ul className="serv-list">
                  <li>Installation support</li>
                  <li>Preventive maintenance</li>
                  <li>Technical assistance</li>
                </ul>
                <Link className="serv-lnk" href="/contact">
                  Enquire →
                </Link>
              </div>
            </div>
            <div className="serv-card" id="support" style={{ scrollMarginTop: "100px" }}>
              <div className="serv-img">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" alt="Customer support" />
                <div className="serv-img-ov"></div>
                <span className="serv-lbl">Support</span>
              </div>
              <div className="serv-body">
                <div className="serv-ico-sm">🕐</div>
                <h3>Customer Support</h3>
                <p>
                  Reach our team for queries, service requests, and coordination. <strong>Customer support: 9:30 AM to 6:30 PM, Monday to Saturday.</strong>
                </p>
                <ul className="serv-list">
                  <li>Phone: <a className="nowrap" href="tel:01204196566">0120-4196566</a>, <a className="nowrap" href="tel:9310468210">9310468210</a></li>
                  <li>Mobile: <a className="nowrap" href="tel:9911411821">9911411821</a></li>
                  <li><a className="nowrap" href="mailto:sales@shrotriyaindustries.com">sales@shrotriyaindustries.com</a></li>
                  <li><a className="nowrap" href="mailto:info@shrotriyaindustries.com">info@shrotriyaindustries.com</a></li>
                </ul>
                <Link className="serv-lnk" href="/contact">
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
          <div className="support-cta fade-in" style={{ marginTop: "52px" }}>
            <div>
              <h3>Need a quotation?</h3>
              <p>
                Share your hospital or clinic requirements — we will respond with product options and timelines during business hours (Mon–Sat, 9:30 AM – 6:30 PM).
              </p>
            </div>
            <Link className="btn-p" href="/contact">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
