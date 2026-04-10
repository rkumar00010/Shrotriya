import Link from "next/link";
import PageHero from "../_shared/PageHero";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        heading="Our Products"
        subtitle="Comprehensive range of medical equipment and supplies for hospitals, clinics, and healthcare facilities."
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="prod-grid fade-in">
            <div className="prod-card">
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80" alt="Diagnostic Equipment" />
                <div className="prod-img-ov"></div>
                <span className="ptag">Bestseller</span>
              </div>
              <div className="prod-body">
                <h3>Diagnostic Equipment</h3>
                <p>
                  Advanced diagnostic tools including X-ray machines, ultrasound scanners, ECG machines, and blood analyzers.
                </p>
                <div className="prod-tags">
                  <span className="pt-sm">X-Ray</span>
                  <span className="pt-sm">Ultrasound</span>
                  <span className="pt-sm">ECG</span>
                  <span className="pt-sm">Analyzers</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
            <div className="prod-card">
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80" alt="Hospital Furniture" />
                <div className="prod-img-ov"></div>
                <span className="ptag">Popular</span>
              </div>
              <div className="prod-body">
                <h3>Hospital Furniture</h3>
                <p>
                  Premium quality hospital beds, patient trolleys, operation tables, and complete medical furniture solutions.
                </p>
                <div className="prod-tags">
                  <span className="pt-sm">Beds</span>
                  <span className="pt-sm">Trolleys</span>
                  <span className="pt-sm">OT Tables</span>
                  <span className="pt-sm">ICU Beds</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
            <div className="prod-card">
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=600&q=80" alt="Surgical Instruments" />
                <div className="prod-img-ov"></div>
              </div>
              <div className="prod-body">
                <h3>Surgical Instruments</h3>
                <p>Precision surgical instruments and tools for a wide range of medical and surgical procedures.</p>
                <div className="prod-tags">
                  <span className="pt-sm">Scalpels</span>
                  <span className="pt-sm">Forceps</span>
                  <span className="pt-sm">Retractors</span>
                  <span className="pt-sm">Clamps</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
            <div className="prod-card">
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80" alt="Laboratory Equipment" />
                <div className="prod-img-ov"></div>
                <span className="ptag">New</span>
              </div>
              <div className="prod-body">
                <h3>Laboratory Equipment</h3>
                <p>Complete range of laboratory equipment for accurate medical testing, diagnostics, and analysis.</p>
                <div className="prod-tags">
                  <span className="pt-sm">Microscopes</span>
                  <span className="pt-sm">Centrifuges</span>
                  <span className="pt-sm">Incubators</span>
                  <span className="pt-sm">Autoclaves</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
            <div className="prod-card">
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="ICU and Emergency" />
                <div className="prod-img-ov"></div>
                <span className="ptag">Critical</span>
              </div>
              <div className="prod-body">
                <h3>ICU &amp; Emergency</h3>
                <p>Critical care equipment including ventilators, patient monitors, defibrillators, and infusion pumps.</p>
                <div className="prod-tags">
                  <span className="pt-sm">Ventilators</span>
                  <span className="pt-sm">Monitors</span>
                  <span className="pt-sm">Defibrillators</span>
                  <span className="pt-sm">Pumps</span>
                </div>
                <Link className="prod-lnk" href="/contact">
                  Request Quote →
                </Link>
              </div>
            </div>
            <div className="prod-card">
              <div className="prod-img">
                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" alt="PPE and Safety" />
                <div className="prod-img-ov"></div>
              </div>
              <div className="prod-body">
                <h3>PPE &amp; Safety</h3>
                <p>Personal protective equipment and safety supplies for healthcare professionals and hospital staff.</p>
                <div className="prod-tags">
                  <span className="pt-sm">Masks</span>
                  <span className="pt-sm">Gloves</span>
                  <span className="pt-sm">Gowns</span>
                  <span className="pt-sm">Face Shields</span>
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
