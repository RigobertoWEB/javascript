import { useContext } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Menu from '../components/Menu'
import ThemeContext from '../context/ThemeContext'
const CaracteristicasGramatica = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <Container fluid className={theme}>
        <Row className={theme}>
          <Col sm={2} className="p-0">
            <Menu />
          </Col>
          <Col sm={10}>
            <div className="contenido">
              <h2>Caracteristicas Gramatica</h2>

              <h3>ISOMORFISMO</h3>
              <p>
                JavaScript, es el único lenguaje capaz de ejecutarse en las 3
                capas de una aplicación:
                <ol>
                  <li>Frontend (JavaScript)</li>
                  <li>Backend (Node.js)</li>
                  <li>
                    Persistencia de datos (MongoDB, CouchDB, Firebase, etc).
                  </li>
                </ol>
              </p>

              <p>Con Javascript puedes:</p>
              <ul>
                <li>Diseño y desarrollo web</li>
                <li>Hcer Videojuegos</li>
                <li>Experiencias 3D, Realidad Aumentada, Realidad virtual.</li>
                Controlar Hardware (drones, robots, electrodomésticos,
                wereables. etc).
                <li>Aplicaciones Híbridas y Móviles</li>
                <li>Aprendizaje automático.</li>
              </ul>

              <h3>Características</h3>
              <ul>
                <li>Lenguaje de Alto Nivel</li>
                <li>Interpretádo</li>
                <li>Dinámico</li>
                <li>Débilmente tipado</li>
                <li>Multi paradigma.</li>
                <li>Sensible a MAYÚSCULAS Y minúsculas.</li>
                <li>No necesita los puntos y coma al final de cada línea</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CaracteristicasGramatica
