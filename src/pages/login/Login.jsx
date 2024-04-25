import "./login.scss";
import { Link } from "react-router-dom";
export const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    console.log(email, password);
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <button>Login Now</button>
          <span>Invalid Credentials </span>
        </form>
        <Link to="/register">Register Now</Link>
      </div>
    </div>
  );
};
