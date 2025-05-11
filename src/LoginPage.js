import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage({ ...props }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <MDBContainer {...props} fluid>
      <MDBRow className="d-flex align-items-center justify-content-center">
        {/* Left Side (Form) */}
        <MDBCol lg="4" md="4" sm="5" className="shadow-5-strong">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "loginForm" : "registerForm"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="d-flex flex-row ps-5 pt-5 align-items-center">
                <MDBIcon
                  fas
                  icon="school"
                  className={`fa-3x me-3 ${
                    isLogin ? "text-info" : "text-success"
                  } `}
                />
                <span
                  className={`h1 fw-bold mb-0 ${
                    isLogin ? "text-info" : "text-success"
                  } `}
                >
                  MySchool
                </span>
              </div>

              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {isLogin ? "Log in" : "Register"}
                </h3>

                {isLogin ? (
                  <>
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      label="Email address"
                      type="email"
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      label="Password"
                      type="password"
                      size="lg"
                    />
                  </>
                ) : (
                  <>
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      label="Full Name"
                      type="text"
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      label="Email"
                      type="email"
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      label="Password"
                      type="password"
                      size="lg"
                    />
                  </>
                )}

                <MDBBtn
                  className="mb-4 px-5 mx-5 w-100"
                  color={isLogin ? "info" : "success"}
                  size="lg"
                >
                  {isLogin ? "Login" : "Register"}
                </MDBBtn>

                {isLogin ? (
                  <>
                    <p className="small mb-5 pb-lg-3 ms-5">
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <p className="ms-5">
                      Don't have an account?{" "}
                      <span
                        className="link-info"
                        role="button"
                        onClick={() => setIsLogin(false)}
                      >
                        Register here
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="ms-5">
                    Already have an account?{" "}
                    <span
                      className="link-success"
                      role="button"
                      onClick={() => setIsLogin(true)}
                    >
                      Login here
                    </span>
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </MDBCol>

        {/* Right Side (Image) */}
        <MDBCol lg="4" md="4" sm="5" className="d-none d-sm-block px-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={isLogin ? "loginImage" : "registerImage"}
              src={isLogin ? "LoginImage.png" : "LoginImage.png"}
              alt={isLogin ? "Login" : "Register"}
              className="w-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
