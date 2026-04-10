import Link from "next/link";

export default function PageHero({ title, subtitle, image }) {
  return (
    <div className="page-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="page-hero-inner">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span className="cur">{title}</span>
        </div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
