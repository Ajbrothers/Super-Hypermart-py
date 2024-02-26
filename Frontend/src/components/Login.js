import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { username, password });
      // Save JWT token to local storage or cookies
      // Redirect user to appropriate page after successful login
      history.push("/customer-panel");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
