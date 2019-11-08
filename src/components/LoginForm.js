import React from "react";

function LoginForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          onChange={props.onChange}
          value={props.values.email}
          name="email"
          placeholder="email"
        />
        <input
          onChange={props.onChange}
          value={props.values.password}
          name="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
