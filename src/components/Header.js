import { Navbar, Container,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update product</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
