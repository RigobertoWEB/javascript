import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

<i class="fas fa-home"></i>

const element = <FontAwesomeIcon icon={faHome} />



const Menu = () => {
    const {themeMenu} = useContext(ThemeContext)
    

 
    return (
        <div>
        {/* <Nav className="flex-column menu"> */}
        <Nav className={themeMenu}>

        <Link to="/" className="enlaces-menu ml-3" >{element}</Link>
            <Link to="/CaracteristicasGramatica" className="enlaces-menu ml-3">Características y Gramática</Link>
            <Link to="/Variables" className="enlaces-menu">Variables</Link>
            <Link to="/Constantes" className="enlaces-menu">Constantes</Link>
            <Link to="/CadenasTexto" className="enlaces-menu">Cadenas de texto</Link>
            <Link to="/TemplatesStrings" className="enlaces-menu">Templates Strings</Link>
            <Link to="/Numeros" className="enlaces-menu">Números</Link>
            {/* <a href="#section1" className="enlaces-menu">Gramática</a>
            <a href="#section1" className="enlaces-menu">Variables</a>
            <a href="#section1" className="enlaces-menu">Constantes</a>
            <a href="#section1" className="enlaces-menu">Cadenas de texto</a>
            <a href="#section1" className="enlaces-menu">Templates Strings</a>
            <a href="#section1" className="enlaces-menu">Números</a> */}
            
        </Nav>


        </div>
    )
}

export default Menu
