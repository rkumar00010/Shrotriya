import Link from "next/link";
import PageHero from "../_shared/PageHero";

const categories = [
  {
    id: "consumables-disposables",
    icon: "💉",
    title: "Consumables and Disposables",
    desc: "Syringes, IV sets, gloves, gowns, catheters, and other disposable supplies for safe patient care."
  },
  {
    id: "icu-emergency",
    icon: "🚨",
    title: "ICU and Emergency",
    desc: "Monitors, ventilators, emergency trolleys, and equipment for intensive care and emergency units."
  },
  {
    id: "maternity-neonatal",
    icon: "🤱",
    title: "Maternity and Neonatal",
    desc: "Incubators, warmers, fetal monitors, delivery tables, and care equipment for mothers and newborns."
  },
  {
    id: "surgical-instruments",
    icon: "⚕️",
    title: "Surgical Instruments",
    desc: "Precision surgical tools and instruments for operating theatres and clinical procedures."
  }
];

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        title="Categories"
        heading="Product Categories"
        subtitle="Consumables and disposables, ICU and emergency, maternity and neonatal, and surgical instruments."
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
              Browse our key categories. For quotations and product details, contact our sales team.
            </p>
          </div>
          <div className="cat-grid fade-in" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {categories.map((c) => (
              <div key={c.id} id={c.id} style={{ scrollMarginTop: "100px" }}>
                <Link className="cat-card" href="/contact">
                  <div className="cat-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
