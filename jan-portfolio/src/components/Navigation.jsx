import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
import ukflag from '../assets/ukflag.png'
import estflag from '../assets/estflag.png'


function Navigation() {
    const { t, i18n } = useTranslation();

    const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel","en")
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel","et")
  }

  return (
     <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Jan's portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#">Avaleht</Nav.Link>
            <Nav.Link as={Link} to="#about">{t("navigation.about")}</Nav.Link>
            <Nav.Link as={Link} to="#skills">{t("navigation.skills")}</Nav.Link>
            <Nav.Link as={Link} to="#projects">{t("navigation.projects")}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/kaart">Kaart</Nav.Link>
            <Nav.Link as={Link} to="/email">Email</Nav.Link>
            <img className='icon' src={ukflag} onClick={changeLanguageEN} alt="" />
            <img className='icon' src={estflag} onClick={changeLanguageET} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation