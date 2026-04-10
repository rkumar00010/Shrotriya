import PageHero from "../_shared/PageHero";

const brands = [
  { logo: "🌊", name: "Fisher & Paykel Healthcare India Pvt Ltd", line: "Respiratory care & acute care solutions" },
  { logo: "🔷", name: "Draeger India Pvt Ltd", line: "Ventilation, anaesthesia & patient monitoring" },
  { logo: "🩹", name: "Matriderm (Medskin Solution)", line: "Advanced wound & skin solutions" }
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Brands"
        heading="Brands We Supply"
        subtitle="Authorised partnerships with leading medical equipment brands for genuine products and after-sales support."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
      />
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
          <div className="brands-grid fade-in" style={{ marginBottom: "52px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {brands.map((b) => (
              <div key={b.name} className="brand-card">
                <div className="brand-logo">{b.logo}</div>
                <h4>{b.name}</h4>
                <p>{b.line}</p>
              </div>
            ))}
          </div>
          <div className="cert-box fade-in">
            <h3>Why We Only Deal in Genuine Brands</h3>
            <div className="cert-list">
              <div className="cert-it">
                <div className="cert-badge">Authorised</div>
                <p>Products supplied through official and authorised distribution channels</p>
              </div>
              <div className="cert-it">
                <div className="cert-badge">Genuine</div>
                <p>Original equipment and accessories — no counterfeits or grey-market products</p>
              </div>
              <div className="cert-it">
                <div className="cert-badge">Warranty</div>
                <p>Manufacturer warranty support on eligible products</p>
              </div>
              <div className="cert-it">
                <div className="cert-badge">After-Sales</div>
                <p>Coordination for service, spares, and technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
