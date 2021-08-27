import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function LogOut() {
    localStorage.clear();
    history.push("/login");
  }
  console.warn(user);
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
          {localStorage.getItem("user-info") ?
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.ItemText onClick={LogOut}>
                Logout
              </NavDropdown.ItemText>
            </NavDropdown>
          </Nav>
          : null  
        }
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
