import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <label>Username:</label>
        <input type="text" required />
        <br />
        <label>Email:</label>
        <input type="email" required />
        <br />
        <label>Password:</label>
        <input type="password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
