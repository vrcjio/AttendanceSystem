import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "School Principal",
    review: "This system has simplified our attendance process. Reports are just a click away now!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Singh",
    role: "Teacher",
    review: "Very easy to use! Marking attendance now takes less than a minute.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ankit Mehta",
    role: "Parent",
    review: "I get instant updates if my child is absent — this adds a lot of transparency.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-5 bg-white">
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="fw-bold">What People Say</h2>
          <p className="text-muted">Real feedback from users of our attendance system.</p>
        </div>
        <MDBRow>
          {testimonials.map((item, index) => (
            <MDBCol md={6} lg={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <MDBCard className="h-100 shadow-sm text-center p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <MDBCardBody>
                    <MDBCardText>"{item.review}"</MDBCardText>
                    <h6 className="mb-0 mt-3 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
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

export default TestimonialSection;
