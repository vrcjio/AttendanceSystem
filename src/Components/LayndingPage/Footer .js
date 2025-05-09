import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <MDBContainer>
        <MDBRow className="mb-4">
          <MDBCol md={4}>
            <h5 className="fw-bold mb-3">Attendance System</h5>
            <p className="text-light">
              A smart solution for managing student attendance with ease and transparency.
            </p>
          </MDBCol>

          <MDBCol md={4}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled text-light">
              <li>
                <a href="#about" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-decoration-none text-light">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-decoration-none text-light">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md={4}>
            <h6 className="fw-bold mb-3">Connect With Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
              <a href="mailto:support@attendance.com" className="text-white">
                <FaEnvelope />
              </a>
            </div>
          </MDBCol>
        </MDBRow>

        <hr className="border-light" />
        <MDBRow>
          <MDBCol className="text-center">
            <small className="text-light">
              © {new Date().getFullYear()} Attendance System. All rights reserved.
            </small>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </footer>
  );
};

export default Footer;
