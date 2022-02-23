import { useContext, useState } from 'react'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import { DarkMode } from './DarkMode'

let moon = '🌙',
  sun = '☀️'

const Header = () => {
  const [themeMode, setThemeMode] = useState(false);
  const {theme, burgerMenu, icono, handleTheme} = useContext(ThemeContext);

  return (
    <div>
      {/* <button className={theme} onClick={handleTheme}>Dark mode</button> */}
      <Navbar expand="lg" id="modo-oscuro" className={theme} border="dark">
        {/* <button onClick={() => setThemeMode(!themeMode)}>Click Me</button> */}
        <Container fluid className={theme}>
          <Navbar.Brand href="#" className={theme}>
            JavaScript
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className={burgerMenu} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Link to="/" className="nav-link">
                <span className={theme}>Home</span>
              </Link>
              <Link to="/CaracteristicasGramatica" className="nav-link">
                <span className={theme}>Características y gramática</span>
              </Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
              <Nav className="nav-link">
                <button onClick={handleTheme} className="icono-theme">
                  {icono}
                </button>
                {/* <label htmlFor="">Light</label>{' '} */}
                {/* <input
                  type="radio"
                  id="light-context"
                  onClick={handleTheme}
                  value="light"
                  checked
                />
                <label htmlFor="">Dark</label>{' '}
                <input
                  type="radio"
                  id="dark-context"
                  className={theme}
                  onClick={handleTheme}
                  value="dark"
                /> */}
              </Nav>
              <Nav className="nav-link">
                <DarkMode label="Click Me" />
              </Nav>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
