import { MenuIcon, XIcon } from 'lucide-react';
import { useState, useEffect } from "react";
import '../css/navbar.css';
import ukflag from '../assets/ukflag.png';
import estflag from '../assets/estflag.png';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: t("navigationbar.home"), href: "#hero" },
    { name: t("navigationbar.about"), href: "#about" },
    { name: t("navigationbar.skills"), href: "#skills" },
    { name: t("navigationbar.projects"), href: "#projects" },
    { name: t("navigationbar.contact"), href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300); // match CSS transition
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("keel", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("keel");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 100;
      const windowBottom = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;

      if (windowBottom >= documentHeight - 5) {
        setActiveSection("contact");
        return;
      }

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className='navbar'>
        <div className="navbar-inner">
          <a href="#hero" className="logo">
            {t("navigationbar.logo")}
          </a>

          {/* Desktop Navigation */}
          <nav className='menu-nav desktop-nav'>
            <ul>
              {navItems.map((item, key) => (
                <li key={key}>
                  <a
                    href={item.href}
                    className={item.href === `#${activeSection}` ? "active" : ""}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flag-icons">
              <img onClick={() => changeLanguage("et")} src={estflag} alt="Switch to Estonian" />
              <img onClick={() => changeLanguage("en")} src={ukflag} alt="Switch to English" />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className={`mobile-menu ${isOpen ? "hidden" : ""}`}>
            <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
              <MenuIcon size={24} />
            </button>
         </div>


        {/* Mobile Navigation */}
        {isVisible && (
          <nav className={`menu-nav mobile-nav ${isOpen ? "open" : "closing"}`}>
            <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
              <XIcon size={28} />
            </button>
            <ul>
              {navItems.map((item, key) => (
                <li key={key}>
                  <a
                    href={item.href}
                    className={item.href === `#${activeSection}` ? "active" : ""}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flag-icons mobile-flags">
              <img onClick={() => changeLanguage("et")} src={estflag} alt="Switch to Estonian" />
              <img onClick={() => changeLanguage("en")} src={ukflag} alt="Switch to English" />
            </div>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
}

export default NavBar;
