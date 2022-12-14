import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        <Button variant="outline-primary">Cart <span>4</span></Button>
      </Container>
    </NavbarBs>
  );
};
