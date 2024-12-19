import React, { useState } from "react";
import axios from "axios";
import api from "../config/api";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./Login.css"; // Tambahkan file CSS khusus untuk tambahan styling

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [cecked, setCecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCecked = () => setCecked((prev) => !prev);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordShow = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${api}/register`, {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors.map((error) => error.msg).join(", "));
      } else {
        setError(
          "Register failed: " + err.response?.data?.message || err.message
        );
      }
    }
  };

  const loginGoogle = async () => {
    try {
      window.location.href = `${api}/auth/google`;
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-side-panel">
        <h1>Welcome Back!</h1>
        <p>
          <b>To keep connected with us please login with your personal info</b>
        </p>
        <a href="/login">
          <button className="btn btn-outline-light btn-signin">Login</button>
        </a>
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="login-title">Create Account</h1>
          <p className="login-subtitle" style={{ marginBottom: "0" }}>
            Don't have an account yet?
          </p>
          <p className="login-subtitle">
            Let’s get you all set up so you can start creating your first
            onboarding experience.
          </p>
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="form-group mb-3">
              <div className="input-group">
                <span
                  className="input-group-text input_login"
                  style={{ borderRight: "none", color: "black" }}
                >
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control input_login"
                  placeholder="Name"
                  style={{ borderLeft: "none", color: "black" }}
                />
              </div>
            </div>
            {/* Email Input */}
            <div className="form-group mb-3">
              <div className="input-group">
                <span
                  className="input-group-text input_login"
                  style={{ borderRight: "none", color: "black" }}
                >
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control input_login"
                  placeholder="Email"
                  style={{ borderLeft: "none", color: "black" }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-group mb-3">
              <div className="input-group">
                <span
                  className="input-group-text input_login"
                  style={{ borderRight: "none", color: "black" }}
                >
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control input_login"
                  placeholder="Password"
                  style={{
                    borderRight: "none",
                    borderLeft: "none",
                    color: "black",
                  }}
                />
                <span
                  className="input-group-text input_login"
                  style={{ color: "black" }}
                  onClick={togglePasswordShow}
                >
                  {!passwordVisible ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </span>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  onChange={handleCecked}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  I accept TajaMentawai's{" "}
                  <a
                    style={{ cursor: "pointer" }}
                    className="text-decoration-none text-warning forgot-pass-text"
                    onClick={handleShow}
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {/* Login Button */}
            <button
              type="submit"
              disabled={!cecked}
              className="btn btn-primary w-100 button_login"
            >
              Sign Up
            </button>
          </form>
          {/* Social Media Login */}
          <p className="text-center mt-3">Or sign up using</p>
          <div className="d-flex justify-content-center gap-3">
            <button onClick={loginGoogle} className="btn btn-outline-secondary">
              <i className="bi bi-google"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-facebook"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-twitter"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i
              className="bi bi-file-text"
              style={{ fontSize: "24px", marginRight: "10px" }}
            ></i>
            Term and Conditions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">Last updated November 8, 2024</p>
          <hr />
          <div>
            <h5>1. Acceptance of Terms</h5>
            <p>
              By accessing Taja Mentawai, you agree to these Terms and
              Conditions. If you do not agree with any part of these terms,
              please refrain from using our platform.
            </p>
            <h5>2. Platform Overview</h5>
            <p>
              Taja Mentawai is a digital platform designed to help users
              discover essential information about tourism in the Mentawai
              islands. We provide destination guides, activity recommendations,
              and travel tips to enhance your experience of Mentawai’s natural
              beauty and unique culture.
            </p>
            <h5>3. Use of Information</h5>
            <p>
              All content on Taja Mentawai is intended for informational
              purposes only. While we strive for accuracy, we do not guarantee
              that all information is current or complete. Users should verify
              specific details (such as operating hours, prices, or
              availability) before making travel arrangements.
            </p>
            <h5>4. User Responsibilities</h5>
            <ul>
              <li>
                <strong>Compliance:</strong> Users agree to use the platform
                only for lawful purposes and in compliance with all applicable
                laws and regulations.
              </li>
              <li>
                <strong>Accuracy of Information:</strong> Users should ensure
                any information they provide to the platform is accurate and
                up-to-date.
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
