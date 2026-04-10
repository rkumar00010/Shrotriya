import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="Comprehensive range of medical equipment and supplies for hospitals, clinics, and healthcare facilities."
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=80"
      />
      <section className="sec"><div className="si"><div className="prod-grid fade-in">
        <div className="prod-card"><div className="prod-img"><img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80" alt="Diagnostic Equipment" /><div className="prod-img-ov"></div><span className="ptag">Bestseller</span></div><div className="prod-body"><h3>Diagnostic Equipment</h3><p>Advanced diagnostic tools including X-ray machines, ultrasound scanners, ECG machines, and blood analyzers.</p><Link className="prod-lnk" href="/contact">Request Quote →</Link></div></div>
        <div className="prod-card"><div className="prod-img"><img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80" alt="Hospital Furniture" /><div className="prod-img-ov"></div><span className="ptag">Popular</span></div><div className="prod-body"><h3>Hospital Furniture</h3><p>Premium quality hospital beds, patient trolleys, operation tables, and complete medical furniture solutions.</p><Link className="prod-lnk" href="/contact">Request Quote →</Link></div></div>
        <div className="prod-card"><div className="prod-img"><img src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=600&q=80" alt="Surgical Instruments" /><div className="prod-img-ov"></div></div><div className="prod-body"><h3>Surgical Instruments</h3><p>Precision surgical instruments and tools for a wide range of medical and surgical procedures.</p><Link className="prod-lnk" href="/contact">Request Quote →</Link></div></div>
      </div></div></section>
    </>
  );
}
