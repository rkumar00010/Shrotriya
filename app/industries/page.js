import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        subtitle="Our medical equipment and services cater to a broad spectrum of healthcare institutions across India."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80"
      />
      <section className="sec"><div className="si"><div className="ind-grid fade-in">
        <Link className="ind-card" href="/contact"><div className="ind-body"><h3>Government Hospitals</h3></div></Link>
        <Link className="ind-card" href="/contact"><div className="ind-body"><h3>Private Hospitals</h3></div></Link>
        <Link className="ind-card" href="/contact"><div className="ind-body"><h3>Clinics &amp; Polyclinics</h3></div></Link>
        <Link className="ind-card" href="/contact"><div className="ind-body"><h3>Diagnostic Centres</h3></div></Link>
      </div></div></section>
    </>
  );
}
