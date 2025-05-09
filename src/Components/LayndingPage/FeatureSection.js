import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { FaClock, FaFileAlt, FaBell, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaClock size={40} className="text-primary mb-2" />,
    title: "Real-time Tracking",
    description: "Track attendance instantly and accurately across all classes.",
  },
  {
    icon: <FaFileAlt size={40} className="text-primary mb-2" />,
    title: "Automated Reports",
    description: "Generate detailed attendance reports with just one click.",
  },
  {
    icon: <FaBell size={40} className="text-primary mb-2" />,
    title: "Smart Notifications",
    description: "Instant alerts for absentees or late entries to parents and staff.",
  },
  {
    icon: <FaLock size={40} className="text-primary mb-2" />,
    title: "Secure Access Control",
    description: "Different access levels for Admin, Teachers, and Students.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-5 bg-white">
      <MDBContainer className="text-center">
        <h2 className="mb-5 fw-bold">Awesome Features</h2>
        <MDBRow>
          {features.map((feature, idx) => (
            <MDBCol md={6} lg={3} className="mb-4" key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <MDBCard className="shadow-sm h-100">
                  <MDBCardBody>
                    {feature.icon}
                    <h5 className="fw-semibold text-primary">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </MDBCardBody>
                </MDBCard>
              </motion.div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default FeatureSection;
