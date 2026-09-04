import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';  

function NavBarBR() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">
            <img src='../logo.png' alt='logo' style={{width:'5rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
            
            <NavDropdown.Item href="/action/3.2">
                Ofertas
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                
                <NavDropdown.Item href="/action/3.4">
                Separated link
                </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            <CartWidgetRI/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBarBR;