import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export function Menu() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Menu </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <NavDropdown title="Deportes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Eventos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Equipos</NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="https://www.fifa.com/fifaplus/es/tournaments/mens/worldcup/qatar2022"> Mundial </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Nosotros</Nav.Link>
            <Nav.Link href="/Registro">Registro</Nav.Link>
           
            <Nav.Link href="#" disabled>Mas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button 
            variant="outline-success">Buscar</Button>
          </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;