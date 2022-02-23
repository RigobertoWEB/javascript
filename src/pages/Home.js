import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Colaps from "../components/Colaps";
import Collapse from "../components/Colaps";
import Menu from "../components/Menu";
import Variables from "./Variables";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import logoJavascript from '../img/logo-javascript.png';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Container fluid className={theme}>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center menu-javascript-b"
          >
            <Colaps className="menu-javascript-b" />
          </Col>
        </Row>

        <Row className={theme}>
          <Col xs={2} className="menu-javascript-a p-0 h-100">
            <Menu className={theme}/>
          </Col>
          <Col xs={10}>
            <div className="contenido">
              <h1 className="text-center font-weight-bold">JavaScript</h1>

              <img src={logoJavascript} className="d-block m-auto w-25"></img>

              <p>
                JavaScript (JS) es un lenguaje de programación ligero,
                interpretado, o compilado justo-a-tiempo (just-in-time) con
                funciones de primera clase. Si bien es más conocido como un
                lenguaje de scripting (secuencias de comandos) para páginas web,
                y es usado en muchos entornos fuera del navegador, tal como
                Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un
                lenguaje de programación basada en prototipos, multiparadigma,
                de un solo hilo, dinámico, con soporte para programación
                orientada a objetos, imperativa y declarativa (por ejemplo
                programación funcional).
              </p>

              <p>
                El estándar para JavaScript es ECMAScript (ECMA-262) y la
                especificación de la API para la Internacionalización de
                ECMAScript (ECMA-402). La documentación en MDN está basada
                enteramente en las últimas versiones preliminares de ECMA-262 y
                ECMA-402. Y en algunos casos donde algunas propuestas para
                nuevas funciones para ECMAScript ya hayan sido implementadas en
                los navegadores, la documentación y algunos artículos de MDN
                pueden hacer uso de algunas de estas funciones.
              </p>

              <p>
                No confundas JavaScript con el lenguaje de programación Java.
                Ambos "Java" y "JavaScript" son marcas o marcas registradas de
                Oracle en los Estados Unidos y otros países, Sin embargo, los
                dos lenguajes de programación tienen sintaxis, semántica y usos
                muy diferentes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
