import Link from "next/link";
import PageHero from "../_shared/PageHero";

const categories = [
  { icon: "🔬", title: "Diagnostic Equipment", desc: "Advanced diagnostic tools and imaging equipment" },
  { icon: "🛏️", title: "Hospital Furniture", desc: "Premium quality hospital beds and medical furniture" },
  { icon: "⚕️", title: "Surgical Instruments", desc: "Precision surgical tools and equipment" },
  { icon: "🚨", title: "ICU & Emergency", desc: "Critical care and emergency medical equipment" },
  { icon: "🧪", title: "Laboratory Equipment", desc: "Full range of lab instruments and testing tools" },
  { icon: "🛡️", title: "PPE & Safety", desc: "Personal protective equipment for healthcare professionals" },
  { icon: "💉", title: "Consumables & Disposables", desc: "Syringes, IV sets, catheters and medical consumables" },
  { icon: "🫀", title: "Cardiology Equipment", desc: "Cardiac monitors, ECG, stress test systems" },
  { icon: "🦷", title: "Dental Equipment", desc: "Dental chairs, drills, sterilizers and instruments" },
  { icon: "👁️", title: "Ophthalmology", desc: "Slit lamps, tonometers and eye surgical tools" },
  { icon: "🤱", title: "Maternity & Neonatal", desc: "Incubators, fetal monitors, delivery tables" },
  { icon: "🩻", title: "Radiology & Imaging", desc: "MRI, CT scan, X-ray and ultrasound systems" }
];

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        title="Categories"
        heading="Product Categories"
        subtitle="Browse our complete range of medical equipment categories for every healthcare need."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
      />
      <section className="sec cat-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">All Categories</div>
            <h2 className="stitle">
              Medical Equipment <span>Categories</span>
            </h2>
            <p className="ssub">
              Comprehensive range of medical equipment and healthcare supplies for hospitals, clinics, diagnostic labs, and emergency care units across India.
            </p>
          </div>
          <div className="cat-grid fade-in">
            {categories.map((c) => (
              <Link key={c.title} className="cat-card" href="/products">
                <div className="cat-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
