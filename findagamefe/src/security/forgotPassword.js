import React, { useRef, useState } from "react";
import "./login-form.css";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")
  const navigate = useNavigate();
  const { passwordReset } = useAuth();
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await passwordReset(emailRef.current.value);
      setMessage("check your inbox for further instructions")
    } catch (error) {
      const errorMessage = error.message
        .replace("Firebase: Error (auth/", "")
        .replace(").", "")
        .replace("Firebase:", "")
        .replace("(auth/", "");
      setError(errorMessage);
    }
    setLoading(false);
  }

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <img
          className="form-img"
          src=""
          alt="ToDO App"
        />
        <p style={{ color: "red" }}>{error}</p>
        <p>{message}</p>
        <p>{currentUser && currentUser.email}</p>

        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter email address"
          name="email"
          id="email"
          ref={emailRef}
          required
        />
        <button className="sub-but" type="submit" disabled={loading}>
          Reset Password /
        </button>
        <Link to="/login" className="forgot-link">Log In</Link>
      </form>
      <div className="signup-bar">
        <p>Dont have account.. </p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
