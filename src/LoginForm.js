import React, { useState } from "react";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password", password);
    alert(`Login Successful for ${email}`);
  };

  return (
    <div className="login-form-container">
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
        {/*Email Field*/}
        <div className='form-group'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
        </div>
        {/*Password field*/}
        <div className='form-group'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
        </div>

        {/*Submit button*/}
        <button type="submit">Login </button>
      </form>
    </div>
  );
}

export default LoginForm;
