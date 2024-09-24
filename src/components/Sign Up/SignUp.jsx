import React, { useState } from "react";
import "./SignUp.css";
import { requestPostUser } from "../../helper/integration/SignIn";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await requestPostUser(username, password);

      const name = data.data;
      alert(`Admin ${name} created successfully`);
    } catch {
      alert("Failed to create an account");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="font-bold font-sans text-2xl">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username :</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>
            Already have an account?{" "}
            <a href="/signin" className="signin-link">
              Sign in
            </a>
          </p>
          <button type="submit" className="signup-button">
            Sign in
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Signup;
