import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import BrandTitle from "../../atoms/header/brandTitle";
import NavLink from "../../atoms/header/navLink";

const NavBarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <BrandTitle title="First-App" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink link="/estudiantes" page="Estudiantes" />
              <NavLink link="/personajes" page="Personajes" />
              <NavLink link="/personajesForm" page="Personajes Form" />
              <NavLink link="/contact" page="Contacto" />
              <NavLink link="https://github.com/hectorf25" target="_blank" page="GitHub" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBarComponent;
