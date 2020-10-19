import React from 'react';

export const LoginForm = () => {
  return (
    <form className="login-form">
      <h3 className="login-form-title">Sign In</h3>
      <label>
        Email
        <input type="text" name="email"></input>
      </label>
      <label>
        Password
        <input type="text" name="password"></input>
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
