import React from "react";
import { motion } from "framer-motion";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";

const HeroSection = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e3f2fd, #90caf9)",
      }}
    >
      <MDBContainer className="text-center">
        <motion.h1
          className="display-4 fw-bold text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Student Attendance Management System
        </motion.h1>

        <motion.p
          className="lead mt-3 text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Automate your attendance with ease and accuracy.
        </motion.p>

        <motion.div
          className="mt-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MDBBtn color="primary" size="lg">
            Get Started
          </MDBBtn>
        </motion.div>
      </MDBContainer>
    </div>
  );
};

export default HeroSection;
