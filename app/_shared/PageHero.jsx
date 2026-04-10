import Link from "next/link";

/** @param {{ title: string; subtitle: string; image: string; heading?: string }} props */
export default function PageHero({ title, subtitle, image, heading }) {
  const h1 = heading ?? title;
  return (
    <div className="page-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="page-hero-inner">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span className="cur">{title}</span>
        </div>
        <h1>{h1}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
