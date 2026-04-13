"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const productSubLinks = [
  { label: "ICU, OT and Emergency", href: "/products#icu-ot-emergency" },
  { label: "Surgical", href: "/products#surgical" }
];

const categorySubLinks = [
  { label: "Consumables and Disposables", href: "/categories#consumables-disposables" },
  { label: "ICU and Emergency", href: "/categories#icu-emergency" },
  { label: "Maternity and Neonatal", href: "/categories#maternity-neonatal" },
  { label: "Surgical Instruments", href: "/categories#surgical-instruments" }
];

const serviceSubLinks = [
  { label: "Medical equipment supply", href: "/services#supply" },
  { label: "Installation and Maintenance", href: "/services#maintenance" },
  { label: "Customer Support", href: "/services#support" }
];

const brandSubLinks = [
  { label: "Fisher & Paykel Healthcare India Pvt Ltd", href: "/brands" },
  { label: "Draeger India Pvt Ltd", href: "/brands" },
  { label: "Matriderm (Medskin Solution)", href: "/brands" }
];

function isMobileNav() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 640px)").matches;
}

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDd, setMobileDd] = useState(null);

  useEffect(() => {
    if (!menuOpen) setMobileDd(null);
  }, [menuOpen]);

  const productsActive = isActive(pathname, "/products");
  const categoriesActive = isActive(pathname, "/categories");
  const servicesActive = isActive(pathname, "/services");
  const brandsActive = isActive(pathname, "/brands");

  const ddMenuStyle = (key) =>
    menuOpen && mobileDd === key ? { display: "block" } : undefined;

  const toggleDd = (key) => (e) => {
    if (menuOpen && isMobileNav()) {
      e.preventDefault();
      setMobileDd((m) => (m === key ? null : key));
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="tl">
            <div className="ti">
              <span className="ic">📞</span>
              <a href="tel:01204196566">0120-4196566</a>
              <span style={{ opacity: 0.5, margin: "0 4px" }}>|</span>
              <a href="tel:9310468210">9310468210</a>
            </div>
            <div className="ti">
              <span className="ic">📱</span>
              <a href="tel:9911411821">9911411821</a>
            </div>
            <div className="ti">
              <span className="ic">✉</span>
              <a href="mailto:Sales@shrotriyaindustries.com">Sales@shrotriyaindustries.com</a>
            </div>
            <div className="ti">
              <span className="ic">✉</span>
              <a href="mailto:Info@shrotriyaindustries.com">Info@shrotriyaindustries.com</a>
            </div>
          </div>
          <div className="tr">
            <div className="ti">
              <span className="ic">🕒</span>
              <span>Mon–Sat: 9:30 AM – 6:30 PM</span>
            </div>
            <div className="ti">
              <span className="ic">📍</span>
              <span>Greater Noida &amp; Noida, UP</span>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="nav-inner">
          <Link className="logo-wrap" href="/" aria-label="Shrotriya Industries Private Limited home" onClick={() => setMenuOpen(false)}>
            <img className="logo-img" src="/assets/images/Shrotriya.png" alt="Shrotriya Industries Private Limited" />
            <div className="logo-name">
              <span className="ln-main">Shrotriya Industries Private Limited</span>
            </div>
          </Link>
          <div className={`nav-menu ${menuOpen ? "open" : ""}`} id="navMenu">
            <Link
              id="nav-home"
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <div className="nav-dd">
              <Link
                id="nav-products"
                href="/products"
                className={productsActive ? "active" : ""}
                onClick={toggleDd("products")}
              >
                Products
              </Link>
              <div className="dd-menu" style={ddMenuStyle("products")}>
                {productSubLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-dd">
              <Link
                id="nav-categories"
                href="/categories"
                className={categoriesActive ? "active" : ""}
                onClick={toggleDd("categories")}
              >
                Categories
              </Link>
              <div className="dd-menu" style={ddMenuStyle("categories")}>
                {categorySubLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-dd">
              <Link
                id="nav-services"
                href="/services"
                className={servicesActive ? "active" : ""}
                onClick={toggleDd("services")}
              >
                Services
              </Link>
              <div className="dd-menu" style={ddMenuStyle("services")}>
                {serviceSubLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              id="nav-industries"
              href="/industries"
              className={isActive(pathname, "/industries") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </Link>

            <div className="nav-dd">
              <Link
                id="nav-brands"
                href="/brands"
                className={brandsActive ? "active" : ""}
                onClick={toggleDd("brands")}
              >
                Brands
              </Link>
              <div className="dd-menu" style={ddMenuStyle("brands")}>
                {brandSubLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              id="nav-about"
              href="/about"
              className={isActive(pathname, "/about") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              id="nav-contact"
              className={`btn-nav-cta ${isActive(pathname, "/contact") ? "active" : ""}`}
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <button type="button" className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen((s) => !s)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {children}

      <footer>
        <div className="si">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link className="logo-wrap" href="/" style={{ marginBottom: "16px" }}>
                <img className="logo-img-footer" src="/assets/images/Shrotriya.png" alt="Shrotriya Industries Private Limited" />
              </Link>
              <p style={{ fontWeight: 600, color: "#fff", marginBottom: "8px" }}>Shrotriya Industries Private Limited</p>
              <p>Medical equipment supply for ICU, OT and emergency care. Trusted by 100+ hospitals across India.</p>
            </div>
            <div className="fc">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="/brands">Brands</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="fc">
              <h4>Offices</h4>
              <ul className="fc-office-block">
                <li>
                  <strong>Corporate</strong>
                  <br />
                  C-313, Beta 1, Greater Noida, Distt. Gautam Budh Nagar (U.P.) – 201306
                </li>
                <li>
                  <strong>Branch</strong>
                  <br />
                  B106, Sector-63, Noida, Distt. Gautam Budh Nagar (U.P.) – 201309
                </li>
              </ul>
            </div>
            <div className="fc">
              <h4>Contact</h4>
              <div className="fcl">
                <div className="fcr"><span className="fi">📞</span><span>0120-4196566<br />9310468210</span></div>
                <div className="fcr"><span className="fi">📱</span><span><a href="tel:9911411821" style={{ color: "inherit" }}>9911411821</a></span></div>
                <div className="fcr"><span className="fi">✉</span><span><a href="mailto:Sales@shrotriyaindustries.com" style={{ color: "inherit" }}>Sales@shrotriyaindustries.com</a><br /><a href="mailto:Info@shrotriyaindustries.com" style={{ color: "inherit" }}>Info@shrotriyaindustries.com</a></span></div>
                <div className="fcr"><span className="fi">🕒</span><span>Mon–Sat: 9:30 AM – 6:30 PM</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <span>© 2026 Shrotriya Industries Private Limited. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
