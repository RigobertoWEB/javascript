import { useContext } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Menu from '../components/Menu'
import ThemeContext from '../context/ThemeContext'

const Constantes = () => {
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
              <h2>Constantes</h2>
              <p>
                Una constante es un valor que el programador no puede cambiar,
                por ejemplo números (1, 2, 42). Con variables, por otra parte,
                el programador puede asignar un nuevo valor a una variable cuyo
                nombre ya esté en uso. Al igual que las variables, algunas
                constantes están unidas a identificadores. Por ejemplo, el
                identificador pi podría estar vinculado al valor 3.14... .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Constantes
