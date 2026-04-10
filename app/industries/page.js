import Link from "next/link";
import PageHero from "../_shared/PageHero";

const sectors = [
  {
    img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80",
    ico: "🏥",
    title: "Government Hospitals",
    desc: "District, state and central government hospitals and medical colleges."
  },
  {
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    ico: "🏨",
    title: "Private Hospitals",
    desc: "Multi-specialty and super-specialty private hospital chains."
  },
  {
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    ico: "🩺",
    title: "Clinics & Polyclinics",
    desc: "General practitioners, specialist clinics and polyclinics."
  },
  {
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80",
    ico: "🔬",
    title: "Diagnostic Centres",
    desc: "Standalone pathology labs and radiology diagnostic centres."
  },
  {
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&q=80",
    ico: "🏫",
    title: "Medical Colleges",
    desc: "Teaching hospitals, research institutes and nursing colleges."
  },
  {
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    ico: "🚑",
    title: "Emergency Services",
    desc: "Ambulance services, trauma centres and emergency units."
  },
  {
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&q=80",
    ico: "💊",
    title: "Nursing Homes",
    desc: "Maternity homes, nursing homes and day-care surgical centres."
  },
  {
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    ico: "🏢",
    title: "Corporate Health",
    desc: "Corporate hospitals, wellness centres and occupational health units."
  }
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        heading="Industries We Serve"
        subtitle="Our medical equipment and services cater to a broad spectrum of healthcare institutions across India."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80"
      />
      <section className="sec">
        <div className="si">
          <div className="sh fade-in">
            <div className="stag">Healthcare Sectors</div>
            <h2 className="stitle">
              Sectors <span>We Serve</span>
            </h2>
            <p className="ssub">
              From government hospitals to corporate wellness centres — we supply and service healthcare organisations across India.
            </p>
          </div>
          <div className="ind-grid fade-in">
            {sectors.map((s) => (
              <Link key={s.title} className="ind-card" href="/contact">
                <div className="ind-img">
                  <img src={s.img} alt={s.title} />
                  <div className="ind-img-ov"></div>
                  <div className="ind-img-ico">{s.ico}</div>
                </div>
                <div className="ind-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
