import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand, NavDropdown } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap Analytics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
              <NavDropdown title="UI Template Design Team" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Who are we
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
