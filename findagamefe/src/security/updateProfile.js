import React, { useRef, useState } from "react";
import "./signUpPage-style.css";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const passwordconfirmRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const { emailUpdate, passwordUpdate, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const promises = [];
    if (passwordRef.current.value !== passwordconfirmRef.current.value) {
      return setError("passowrd does not match");
    }
    if (emailRef.current.value !== currentUser.email) {
      promises.push(emailUpdate(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(passwordUpdate(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <img
          className="form-img"
          src=""
          alt="ToDO App"
        />
        <p style={{ color: "red" }}>{error}</p>
        <p>{currentUser && currentUser.email}</p>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          defaultValue={currentUser.email}
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
          placeholder="Leave blank if don't want to change"
          name="psw"
          id="psw"
          ref={passwordRef}
        />
        <label htmlFor="pswconfirm">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Leave blank if don't want to change"
          name="pswconfirm"
          id="pswcon"
          ref={passwordconfirmRef}
        />

        <button className="sub-but" type="submit" disabled={loading}>
          Update
        </button>
      </form>
      <div className="signup-bar">
        <Link to="/">Log In</Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
