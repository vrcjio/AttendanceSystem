import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function NavigationBar({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MDBNavbar {...props} expand="lg" dark bgColor="dark" fixed="top">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <NavLink to="/" className="text-white text-decoration-none">
            MyApp
          </NavLink>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          type="button"
          aria-label="Toggle navigation"
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={isOpen}>
          <MDBNavbarNav className="ms-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/" className="text-white text-decoration-none">
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/Login" className="text-white text-decoration-none">
                  Login
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/about" className="text-white text-decoration-none">
                  About
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
