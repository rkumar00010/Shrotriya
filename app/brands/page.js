import PageHero from "../_shared/PageHero";

const brands = [
  { logo: "💙", name: "Philips Healthcare", line: "Imaging & Monitoring" },
  { logo: "🔵", name: "GE Healthcare", line: "Diagnostics & ICU" },
  { logo: "⚪", name: "Siemens Healthineers", line: "Radiology & Lab" },
  { logo: "🔴", name: "3M Medical", line: "PPE & Infection Control" },
  { logo: "🟣", name: "Medtronic", line: "Surgical & Cardiology" },
  { logo: "🟢", name: "BPL Medical", line: "ECG & Patient Care" },
  { logo: "🟡", name: "Stryker", line: "OR & Neurotechnology" },
  { logo: "🟠", name: "Drager", line: "Ventilators & Anaesthesia" },
  { logo: "🩵", name: "Abbott", line: "Diagnostics & Nutrition" },
  { logo: "🌐", name: "Johnson & Johnson", line: "Surgical & Wound Care" },
  { logo: "💚", name: "Baxter", line: "IV Solutions & Renal" },
  { logo: "❤️", name: "Becton Dickinson", line: "Diagnostics & Medical Devices" }
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Brands"
        heading="Brands We Supply"
        subtitle="Authorised dealer of world-renowned medical equipment manufacturers."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
      />
      <section className="sec brands-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">Our Brand Partners</div>
            <h2 className="stitle">
              Authorised Dealer of <span>Leading Brands</span>
            </h2>
            <p className="ssub">
              We are authorised dealers and distributors for world-renowned manufacturers — ensuring genuine, certified products every time.
            </p>
          </div>
          <div className="brands-grid fade-in" style={{ marginBottom: "52px" }}>
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
                <p>All brands are supplied through official and authorised distribution channels</p>
              </div>
              <div className="cert-it">
                <div className="cert-badge">Genuine Parts</div>
                <p>100% original spare parts and accessories — no counterfeits or grey-market products</p>
              </div>
              <div className="cert-it">
                <div className="cert-badge">Warranty</div>
                <p>Full manufacturer warranty on all brand products supplied by us</p>
              </div>
              <div className="cert-it">
                <div className="cert-badge">After-Sales</div>
                <p>Dedicated brand-specific after-sales support and service engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
