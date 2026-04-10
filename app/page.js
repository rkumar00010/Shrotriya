import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-ov"></div>
        <div className="hc1"></div><div className="hc2"></div>
        <div className="home-hero-inner">
          <div className="fade-in">
            <div className="hero-badge">Trusted Medical Equipment Supplier</div>
            <h1>Premium <span>Medical Equipment</span> Supply</h1>
            <p className="hero-desc">Trusted by hospitals, clinics, and healthcare organizations nationwide.</p>
            <div className="hero-btns">
              <Link className="btn-p" href="/products">Explore Products →</Link>
              <Link className="btn-o" href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="sec cat-sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">Key Categories</div>
            <h2 className="stitle">Our Medical <span>Product Categories</span></h2>
          </div>
          <div className="cat-grid home-cat-grid fade-in">
            <Link className="cat-card" href="/products"><div className="cat-icon">🔬</div><h3>Diagnostic Equipment</h3></Link>
            <Link className="cat-card" href="/products"><div className="cat-icon">🛏️</div><h3>Hospital Furniture</h3></Link>
            <Link className="cat-card" href="/products"><div className="cat-icon">⚕️</div><h3>Surgical Instruments</h3></Link>
            <Link className="cat-card" href="/products"><div className="cat-icon">🚨</div><h3>ICU &amp; Emergency</h3></Link>
            <Link className="cat-card" href="/products"><div className="cat-icon">🧪</div><h3>Laboratory Equipment</h3></Link>
            <Link className="cat-card" href="/products"><div className="cat-icon">🛡️</div><h3>PPE &amp; Safety</h3></Link>
          </div>
        </div>
      </section>
    </>
  );
}
