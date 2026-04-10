"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const productSubLinks = [
  { label: "Diagnostic Equipment", href: "/products" },
  { label: "Hospital Furniture", href: "/products" },
  { label: "Surgical Instruments", href: "/products" },
  { label: "ICU & Emergency", href: "/products" },
  { label: "Laboratory Equipment", href: "/products" },
  { label: "PPE & Safety", href: "/products" }
];

const brandSubLinks = [
  { label: "Philips Healthcare", href: "/brands" },
  { label: "GE Healthcare", href: "/brands" },
  { label: "Siemens Healthineers", href: "/brands" },
  { label: "3M Medical", href: "/brands" },
  { label: "Medtronic", href: "/brands" },
  { label: "BPL Medical", href: "/brands" }
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
  const brandsActive = isActive(pathname, "/brands");

  const ddMenuStyle = (key) =>
    menuOpen && mobileDd === key ? { display: "block" } : undefined;

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="tl">
            <div className="ti"><span className="ic">📞</span><a href="tel:+911234567890">+91-1234567890</a></div>
            <div className="ti"><span className="ic">✉</span><a href="mailto:info@shrotriyaindustries.com">info@shrotriyaindustries.com</a></div>
          </div>
          <div className="tr">
            <div className="ti"><span className="ic">🕒</span><span>Mon-Sat: 9:00 AM - 6:00 PM</span></div>
            <div className="ti"><span className="ic">📍</span><span>Greater Noida, UP, India</span></div>
          </div>
        </div>
      </div>

      <nav>
        <div className="nav-inner">
          <Link className="logo-wrap" href="/" aria-label="Shrotriya Industries home" onClick={() => setMenuOpen(false)}>
            <img className="logo-img" src="/assets/images/Shrotriya.png" alt="Shrotriya Industries" />
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
                onClick={(e) => {
                  if (menuOpen && isMobileNav()) {
                    e.preventDefault();
                    setMobileDd((m) => (m === "products" ? null : "products"));
                  } else {
                    setMenuOpen(false);
                  }
                }}
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

            <Link
              id="nav-categories"
              href="/categories"
              className={isActive(pathname, "/categories") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              id="nav-services"
              href="/services"
              className={isActive(pathname, "/services") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
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
                onClick={(e) => {
                  if (menuOpen && isMobileNav()) {
                    e.preventDefault();
                    setMobileDd((m) => (m === "brands" ? null : "brands"));
                  } else {
                    setMenuOpen(false);
                  }
                }}
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
                <img className="logo-img-footer" src="/assets/images/Shrotriya.png" alt="Shrotriya Industries" />
              </Link>
              <p>Leading supplier of medical equipment and healthcare solutions. Trusted by hospitals, clinics, and healthcare organizations nationwide.</p>
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
              <h4>Products</h4>
              <ul>
                <li><Link href="/products">Diagnostic Equipment</Link></li>
                <li><Link href="/products">Hospital Furniture</Link></li>
                <li><Link href="/products">Surgical Instruments</Link></li>
                <li><Link href="/products">ICU &amp; Emergency</Link></li>
              </ul>
            </div>
            <div className="fc">
              <h4>Contact Info</h4>
              <div className="fcl">
                <div className="fcr"><span className="fi">📞</span><span>+91-1234567890<br />+91-9876543210</span></div>
                <div className="fcr"><span className="fi">✉</span><span>info@shrotriyaindustries.com</span></div>
                <div className="fcr"><span className="fi">📍</span><span>Greater Noida - 201306, India</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <span>© 2026 Shrotriya Industries. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
