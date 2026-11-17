import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logo from "../../assets/logo.png";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Platform", href: "#platform" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">

        {/* Company Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="ConnectStream Logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="navbar-cta">
          Book a Demo
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-nav-cta"
              onClick={closeMenu}
            >
              Book a Demo
              <ArrowUpRight size={17} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;