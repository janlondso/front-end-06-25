import { MenuIcon } from 'lucide-react';
import { useState } from "react";
import '../css/navbar.css';
import ukflag from '../assets/ukflag.png';
import estflag from '../assets/estflag.png';
import { useTranslation } from 'react-i18next';

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  };

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  };

  return (
    <div className="container-navbar">
    <div className='navbar'>
      <div className="navbar-inner">
        <h3 className='logo'>Jan's Portfolio</h3>

        {/* Desktop Navigation */}
        <nav className='menu-nav desktop-nav'>
          <ul>
            {navItems.map((item, key) => (
              <li key={key}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="flag-icons">
            <img onClick={changeLanguageET} src={estflag} alt="Estonian" />
            <img onClick={changeLanguageEN} src={ukflag} alt="English" />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className='mobile-menu'>
          <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className='menu-nav mobile-nav'>
          <ul>
            {navItems.map((item, key) => (
              <li key={key}>
                <a href={item.href} onClick={closeMenu}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="flag-icons mobile-flags">
            <img onClick={changeLanguageET} src={estflag} alt="Estonian" />
            <img onClick={changeLanguageEN} src={ukflag} alt="English" />
          </div>
        </nav>
      )}
    </div>
    </div>
  );
}

export default NavBar;

