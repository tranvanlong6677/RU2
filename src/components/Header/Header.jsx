import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.scss'

const Header = () => {
  const navigate = useNavigate();
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">TL</Navbar.Brand> */}
        <NavLink className="nav-link navbar-brand" to="/">
          TL
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <div className="button-block">
                <button className="btn" onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="btn">Signup</button>
              </div>
            ) : (
              <>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
