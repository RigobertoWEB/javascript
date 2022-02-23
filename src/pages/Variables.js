import { useContext } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Menu from '../components/Menu'
import ThemeContext from '../context/ThemeContext'

const Variables = () => {
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
              <h2>Variables</h2>
              <p>
                Una variable es un contenedor para un valor, como un número que
                podríamos usar en una suma, o una cadena que podríamos usar como
                parte de una oración. Pero una cosa especial acerca de las
                variables es que los valores que contienen pueden cambiar.
                Veamos un sencillo ejemplo:
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Variables
