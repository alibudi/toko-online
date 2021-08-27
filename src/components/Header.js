import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Toko Online</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
