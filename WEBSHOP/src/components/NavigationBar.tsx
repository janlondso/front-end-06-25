import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ukflag from '../assets/ukflag.png'
import estflag from '../assets/estflag.png'
import { useContext } from 'react';
import { CartSumContext } from '../context/CartSumContext';
import { AuthContext } from '../context/AuthContext';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    const {cartSum} = useContext(CartSumContext);
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const changeLanguageEN = () => {
      i18n.changeLanguage("en");
      localStorage.setItem("keel","en")
    }

    const changeLanguageET = () => {
      i18n.changeLanguage("et");
      localStorage.setItem("keel","et")
    };

    const logout = () => {
      navigate("/");
      setLoggedIn(false);
      sessionStorage.removeItem("token");
    }

  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">WEBSHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{t("navigationbar.home")}</Nav.Link>
           {loggedIn ?
           <>
            <Nav.Link as={Link} to="/admin">{t("navigationbar.admin")}</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
           </> : 
           <>
            <Nav.Link as={Link} to="/cart">{t("navigationbar.card")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("navigationbar.shops")}</Nav.Link>
           </>
           }
            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">{t("navigationbar.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/login">{t("navigationbar.login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("navigationbar.signup")}</Nav.Link>
            <Nav.Link as={Link} to="/map">{t("navigationbar.map")}</Nav.Link>
            <img className='icon' src={ukflag} onClick={changeLanguageEN} alt="" />
            <img className='icon' src={estflag} onClick={changeLanguageET} alt="" />
            {cartSum}€
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;