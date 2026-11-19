import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-container">

        {/* Brand */}
        <a href="#home" className="brand" onClick={closeMenu}>
          NH<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#about" onClick={closeMenu}>About</a>
        </div>

        {/* CTA */}
        <a href="#contact" className="nav-cta">
          Let's talk
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        

      </nav>
    </header>
  );
}

export default Navbar;