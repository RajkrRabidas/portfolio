import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import { navLinks } from "../../data/navigationData";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header id="header">
      <button
        id="nav-toggle"
        type="button"
        aria-expanded={isNavOpen}
        aria-controls="navbar"
        aria-label="Toggle navigation"
        onClick={() => setIsNavOpen((open) => !open)}
      >
        <span className="hamburger">
          <i className="ri-menu-line"></i>
        </span>
      </button>
      <nav id="navbar" aria-expanded={isNavOpen}>
        <button
          className="nav-close"
          type="button"
          aria-label="Close navigation"
          onClick={closeNav}
        >
          <i className="ri-close-line"></i>
        </button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                className="text"
                to={link.to}
                aria-label={link.label}
                onClick={closeNav}
              >
                <AnimatedText label={link.label} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
