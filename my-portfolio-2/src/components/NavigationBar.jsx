import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ukflag from '../assets/ukflag.png'
import estflag from '../assets/estflag.png'
import { useTranslation } from 'react-i18next';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    const changeLanguageEN = () => {
      i18n.changeLanguage("en");
      localStorage.setItem("keel","en")
    }

    const changeLanguageET = () => {
      i18n.changeLanguage("et");
      localStorage.setItem("keel","et")
    };
  return (
     <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">WEBSHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="#">Home</Nav.Link>
                <Nav.Link as={Link} to="#about">About</Nav.Link>
                <Nav.Link as={Link} to="#skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="#projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <img className='icon' src={ukflag} onClick={changeLanguageEN} alt="" />
                <img className='icon' src={estflag} onClick={changeLanguageET} alt="" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default NavigationBar;