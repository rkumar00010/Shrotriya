import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        heading="Our Services"
        subtitle="Comprehensive healthcare solutions and support services for smooth hospital operations."
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
              Beyond supplying equipment, we provide complete support services to ensure your facility operates at its best.
            </p>
          </div>
          <div className="serv-grid fade-in">
            <div className="serv-card">
              <div className="serv-img">
                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80" alt="Supply" />
                <div className="serv-img-ov"></div>
                <span className="serv-lbl">Supply</span>
              </div>
              <div className="serv-body">
                <div className="serv-ico-sm">📦</div>
                <h3>Medical Equipment Supply</h3>
                <p>Complete range of medical equipment supply for hospitals, clinics, and healthcare facilities.</p>
                <ul className="serv-list">
                  <li>Wide product range</li>
                  <li>Competitive pricing</li>
                  <li>Fast delivery</li>
                </ul>
                <Link className="serv-lnk" href="/contact">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" alt="Setup" />
                <div className="serv-img-ov"></div>
                <span className="serv-lbl">Setup</span>
              </div>
              <div className="serv-body">
                <div className="serv-ico-sm">🏥</div>
                <h3>Hospital / Clinic Setup</h3>
                <p>End-to-end hospital and clinic setup services from planning to execution.</p>
                <ul className="serv-list">
                  <li>Space planning</li>
                  <li>Equipment selection</li>
                  <li>Installation services</li>
                </ul>
                <Link className="serv-lnk" href="/contact">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80" alt="Maintenance" />
                <div className="serv-img-ov"></div>
                <span className="serv-lbl">Maintenance</span>
              </div>
              <div className="serv-body">
                <div className="serv-ico-sm">🔧</div>
                <h3>Installation &amp; Maintenance</h3>
                <p>Professional installation and regular maintenance services for all medical equipment.</p>
                <ul className="serv-list">
                  <li>Preventive checks</li>
                  <li>Technical support</li>
                  <li>24/7 assistance</li>
                </ul>
                <Link className="serv-lnk" href="/contact">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          <div className="support-cta fade-in" style={{ marginTop: "52px" }}>
            <div>
              <h3>24/7 Customer Support</h3>
              <p>
                Our dedicated support team is available round the clock to assist you with queries, technical issues, or service requests.
              </p>
            </div>
            <Link className="btn-p" href="/contact">
              Contact Support →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
