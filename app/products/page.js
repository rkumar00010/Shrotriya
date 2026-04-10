import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        heading="Our Products"
        subtitle="ICU, OT and emergency solutions, and surgical equipment — supplied and supported by Shrotriya Industries Private Limited."
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="prod-grid fade-in">
            <div className="prod-card" id="icu-ot-emergency" style={{ scrollMarginTop: "100px" }}>
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="ICU OT and Emergency" />
                <div className="prod-img-ov"></div>
                <span className="ptag">Critical care</span>
              </div>
              <div className="prod-body">
                <h3>ICU, OT and Emergency</h3>
                <p>
                  Equipment and solutions for intensive care units, operation theatres, and emergency departments — monitors, ventilators, OT tables, emergency carts, and related supplies as per your facility needs.
                </p>
                <div className="prod-tags">
                  <span className="pt-sm">ICU</span>
                  <span className="pt-sm">OT</span>
                  <span className="pt-sm">Emergency</span>
                  <span className="pt-sm">Critical care</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
            <div className="prod-card" id="surgical" style={{ scrollMarginTop: "100px" }}>
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=600&q=80" alt="Surgical" />
                <div className="prod-img-ov"></div>
                <span className="ptag">Surgical</span>
              </div>
              <div className="prod-body">
                <h3>Surgical</h3>
                <p>
                  Surgical instruments, OT equipment, and accessories for procedures across specialties — sourced from trusted manufacturers with support for installation and maintenance where applicable.
                </p>
                <div className="prod-tags">
                  <span className="pt-sm">Instruments</span>
                  <span className="pt-sm">OT</span>
                  <span className="pt-sm">Procedures</span>
                  <span className="pt-sm">Accessories</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
