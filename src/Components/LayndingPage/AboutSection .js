import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-5 bg-light">
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold mb-3">About Our Attendance System</h2>
              <p className="text-muted">
                Our Student Attendance Management System is designed to simplify and automate attendance tracking for schools, colleges, and coaching centers. It helps teachers mark attendance quickly, generates reports, and keeps parents informed in real-time.
              </p>
              <p className="text-muted">
                With role-based access, intuitive dashboards, and secure cloud storage, this system ensures transparency, saves time, and improves student accountability.
              </p>
              <MDBBtn color="primary">Learn More</MDBBtn>
            </motion.div>
          </MDBCol>
          <MDBCol md={6}>
            <motion.img
              src="dashboardImg.png"
              alt="Attendance System Overview"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              lazyload={true}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default AboutSection;
