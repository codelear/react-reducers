import { Nav, Navbar } from "react-bootstrap";

function Navigation(props) {
  function loginHandler() {
    props.onLoginClick();
  }

  function logoutHandler() {
    props.onLogoutClick();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Reducers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          {props.loggedIn && (
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          )}
          {props.loggedIn || <Nav.Link onClick={loginHandler}>Login</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
  );
}

export default Navigation;
