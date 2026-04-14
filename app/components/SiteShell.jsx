"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
              <a href="mailto:sales@shrotriyaindustries.com">sales@shrotriyaindustries.com</a>
            </div>
            <div className="ti">
              <span className="ic">✉</span>
              <a href="mailto:info@shrotriyaindustries.com">info@shrotriyaindustries.com</a>
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

            <Link
              id="nav-products"
              href="/products"
              className={isActive(pathname, "/products") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>

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

            <Link
              id="nav-brands"
              href="/brands"
              className={isActive(pathname, "/brands") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Brands
            </Link>

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
                  B 106, Sector-63, Noida, Distt. Gautam Budh Nagar (U.P.) – 201309
                </li>
              </ul>
            </div>
            <div className="fc">
              <h4>Contact</h4>
              <div className="fcl">
                <div className="fcr"><span className="fi">📞</span><span>0120-4196566<br />9310468210</span></div>
                <div className="fcr"><span className="fi">📱</span><span><a href="tel:9911411821" style={{ color: "inherit" }}>9911411821</a></span></div>
                <div className="fcr"><span className="fi">✉</span><span><a href="mailto:sales@shrotriyaindustries.com" style={{ color: "inherit" }}>sales@shrotriyaindustries.com</a><br /><a href="mailto:info@shrotriyaindustries.com" style={{ color: "inherit" }}>info@shrotriyaindustries.com</a></span></div>
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
