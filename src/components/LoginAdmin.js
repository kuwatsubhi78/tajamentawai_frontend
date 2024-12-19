import React, { useState } from "react";
import "./Login.css";
import api from "../config/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

const LoginAdmin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { fetchProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const togglePasswordShow = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      // Mengirimkan request login dengan credentials
      const res = await axios.post(
        `http://localhost:5000/login`,
        { username, password },
        {
          withCredentials: true, // Mengirimkan cookie bersama request
        }
      );

      // Setelah login berhasil, refresh data
      if (res.status === 200) {
        const user = await axios.get(`http://localhost:5000/users/me`, {
          withCredentials: true,
        });
        if (user.data.role === "admin") {
          navigate("/admin");
          return;
        }
        navigate("/home-login");
      }
    } catch (err) {
      // Menangani error respons dari server
      const errorMessage =
        err.response?.data?.errors?.map((error) => error.msg).join(", ") ||
        err.response?.data?.message ||
        "Terjadi kesalahan. Coba lagi.";
      setError(errorMessage);
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
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="login-title">Login to Admin TajaMentawai</h1>
          <p className="login-subtitle">
            Welcome back! Please login to your account.
          </p>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control input_login"
                  placeholder="user_name"
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
                  className="form-control input_login"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <a
                href="/reset-password"
                className="text-decoration-none text-warning forgot-pass-text"
              >
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 button_login"
            >
              Login
            </button>
          </form>

          {/* Social Media Login */}
          <p className="text-center mt-3">Or login using</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-secondary" onClick={loginGoogle}>
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

      <div
        className="login-side-panel"
        style={{
          background:
            "linear-gradient(rgb(166 166 166 / 50%), rgb(0 0 0 / 50%)), url(http://localhost:3000/admin-login-bg.png) no-repeat center center",
        }}
      >
        <h1>Hello, Everyone!</h1>
        <p>
          <b>Enter your personal details and start your journey with us</b>
        </p>
        <a href="/admin/register">
          <button className="btn btn-outline-light btn-signin">Sign Up</button>
        </a>
      </div>
    </div>
  );
};

export default LoginAdmin;
