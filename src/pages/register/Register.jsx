import { Link } from "react-router-dom";
import "./register.scss";

export const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password, reTypePassword } =
      Object.fromEntries(formData);

    if (password !== reTypePassword) {
      return "not match your password";
    }
    console.log(username, email, password);
  };

  return (
    <div className="register">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleRegister}>
          <input type="file" />
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <input type="text" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <input
            type="password"
            name="reTypePassword"
            placeholder="Re-type password"
          />

          <button>Register Now</button>
         <span>Invalid Credentials </span>
        </form>

        <Link to="/login">Login Now</Link>
      </div>
    </div>
  );
};
