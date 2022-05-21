import React from "react";
import {
  Navbar,
  Button,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Web Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <div className="d-flex align-items-center">
            <img
              className="user-profile"
              style={{ width: "40px" }}
              src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
              alt=""
            />
            <span className="ms-2 text-white">Deby Trisandi</span>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
