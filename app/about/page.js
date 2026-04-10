import PageHero from "../_shared/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="15+ years of excellence in premium medical equipment supply and healthcare solutions."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80"
      />
      <section className="sec"><div className="si"><div className="about-grid fade-in">
        <div>
          <div className="stag">Our Story</div>
          <h2 className="stitle">Shrotriya <span>Industries</span></h2>
          <p className="ssub">Shrotriya Industries is a leading supplier of premium medical equipment and healthcare solutions, headquartered in Greater Noida, Uttar Pradesh.</p>
        </div>
        <div className="about-img-box"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="About Shrotriya Industries" /></div>
      </div></div></section>
    </>
  );
}
