import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { FaSignInAlt, FaCheckCircle, FaChartLine, FaEnvelope } from "react-icons/fa";

const steps = [
  {
    icon: <FaSignInAlt size={40} className="text-primary mb-3" />,
    title: "Login to Dashboard",
    description: "Admins, teachers, and students login with secure credentials.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-success mb-3" />,
    title: "Mark Attendance",
    description: "Teachers quickly mark attendance with just a few clicks.",
  },
  {
    icon: <FaChartLine size={40} className="text-warning mb-3" />,
    title: "Get Reports",
    description: "Instant generation of daily, weekly, or monthly reports.",
  },
  {
    icon: <FaEnvelope size={40} className="text-danger mb-3" />,
    title: "Send Notifications",
    description: "Automated alerts to students and parents on absences or delays.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-5 bg-white">
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="fw-bold">How It Works</h2>
          <p className="text-muted">Simple steps to manage and track attendance efficiently.</p>
        </div>
        <MDBRow>
          {steps.map((step, index) => (
            <MDBCol md="6" lg="3" className="mb-4" key={index}>
              <motion.div
                className="text-center px-3"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {step.icon}
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </motion.div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default HowItWorksSection;
