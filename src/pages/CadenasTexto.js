import { useContext } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Menu from '../components/Menu'
import ThemeContext from '../context/ThemeContext'

const CadenasTexto = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div>
      <Container fluid className={theme}>
        <Row className={theme}>
          <Col sm={2} className="p-0">
            <Menu />
          </Col>
          <Col sm={10}>
          <div className="contenido">
              <h2>Cadenas de texto</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CadenasTexto
