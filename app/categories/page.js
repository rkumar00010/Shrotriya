import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function CategoriesPage() {
  const cats = [
    "Diagnostic Equipment",
    "Hospital Furniture",
    "Surgical Instruments",
    "ICU & Emergency",
    "Laboratory Equipment",
    "PPE & Safety",
    "Cardiology Equipment",
    "Radiology & Imaging"
  ];

  return (
    <>
      <PageHero
        title="Categories"
        subtitle="Browse our complete range of medical equipment categories for every healthcare need."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
      />
      <section className="sec cat-sec"><div className="si"><div className="cat-grid fade-in">
        {cats.map((c) => (
          <Link key={c} className="cat-card" href="/products"><div className="cat-icon">🏥</div><h3>{c}</h3></Link>
        ))}
      </div></div></section>
    </>
  );
}
