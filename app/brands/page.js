import PageHero from "../_shared/PageHero";

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Brands"
        subtitle="Authorised dealer of world-renowned medical equipment manufacturers."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
      />
      <section className="sec brands-sec"><div className="si"><div className="brands-grid fade-in">
        <div className="brand-card"><h4>Philips Healthcare</h4></div>
        <div className="brand-card"><h4>GE Healthcare</h4></div>
        <div className="brand-card"><h4>Siemens Healthineers</h4></div>
        <div className="brand-card"><h4>3M Medical</h4></div>
        <div className="brand-card"><h4>Medtronic</h4></div>
        <div className="brand-card"><h4>BPL Medical</h4></div>
      </div></div></section>
    </>
  );
}
