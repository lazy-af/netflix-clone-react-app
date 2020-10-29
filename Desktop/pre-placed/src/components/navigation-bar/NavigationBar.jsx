import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = (props) => {
  const favClickHandler = () => {
    props.favourite("fav");
  };

  const intClickHandler = () => {
    props.favourite("");
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand style={{ cursor: "pointer" }} onClick={intClickHandler}>
        Integrations
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={favClickHandler}>Favourites</Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item>Category1</NavDropdown.Item>
            <NavDropdown.Item>Category2</NavDropdown.Item>
            <NavDropdown.Item>Category3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Filter" id="basic-nav-dropdown">
            <NavDropdown.Item>Filter1</NavDropdown.Item>
            <NavDropdown.Item>Filter2</NavDropdown.Item>
            <NavDropdown.Item>Filter3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
