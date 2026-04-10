import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Comprehensive healthcare solutions and support services for smooth hospital operations."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80"
      />
      <section className="sec serv-sec"><div className="si"><div className="serv-grid fade-in">
        <div className="serv-card"><div className="serv-body"><div className="serv-ico-sm">📦</div><h3>Medical Equipment Supply</h3><p>Complete range of medical equipment supply for hospitals, clinics, and healthcare facilities.</p><Link className="serv-lnk" href="/contact">Learn More →</Link></div></div>
        <div className="serv-card"><div className="serv-body"><div className="serv-ico-sm">🏥</div><h3>Hospital / Clinic Setup</h3><p>End-to-end hospital and clinic setup services from planning to execution.</p><Link className="serv-lnk" href="/contact">Learn More →</Link></div></div>
        <div className="serv-card"><div className="serv-body"><div className="serv-ico-sm">🔧</div><h3>Installation &amp; Maintenance</h3><p>Professional installation and regular maintenance services for all medical equipment.</p><Link className="serv-lnk" href="/contact">Learn More →</Link></div></div>
      </div></div></section>
    </>
  );
}
