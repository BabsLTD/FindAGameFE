import React, { useRef, useState } from "react";
import "./signUpPage-style.css";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const passwordconfirmRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordconfirmRef.current.value) {
      return setError("passowrd does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
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
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <img className="form-img" src="" alt="ToDO App" />
        <p style={{ color: "red" }}>{error}</p>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter email address"
          name="email"
          id="email"
          ref={emailRef}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          ref={passwordRef}
        />
        <label htmlFor="pswconfirm">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="pswconfirm"
          id="pswcon"
          ref={passwordconfirmRef}
        />

        <button className="sub-but" type="submit" disabled={loading}>
          SignUp
        </button>
      </form>
      <div className="signup-bar">
        <p>Have an account.. </p>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
