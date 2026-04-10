"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Products", href: "/products" },
  { id: "categories", label: "Categories", href: "/categories" },
  { id: "services", label: "Services", href: "/services" },
  { id: "industries", label: "Industries", href: "/industries" },
  { id: "brands", label: "Brands", href: "/brands" },
  { id: "about", label: "About", href: "/about" }
];

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
          <Link className="logo-wrap" href="/" aria-label="Shrotriya Industries home">
            <img className="logo-img" src="/assets/images/Shrotriya.png" alt="Shrotriya Industries" />
          </Link>
          <div className={`nav-menu ${menuOpen ? "open" : ""}`} id="navMenu">
            {navItems.map((item) => (
              <Link
                key={item.id}
                id={`nav-${item.id}`}
                className={isActive(pathname, item.href) ? "active" : ""}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              id="nav-contact"
              className={`btn-nav-cta ${isActive(pathname, "/contact") ? "active" : ""}`}
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen((s) => !s)}>
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
                {navItems.map((item) => (
                  <li key={item.id}><Link href={item.href}>{item.label}</Link></li>
                ))}
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
