import { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const user = true;

  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span>AbuHasan Blogs</span>
            <p>let's Learn</p>
          </Link>
        </div>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">JavaScript</NavLink>
          <NavLink to="/">React Js</NavLink>
          <NavLink to="/">MERN Stack</NavLink>
          {user ? (
            <div onClick={() => setOpen(!open)} className="userInfo">
              <img
                src="../../../src/assets/user.png"
                alt="user"
              />
              <span>AbuHasan Sarkar</span>
              {open && (
                <div className="moreInfo">
                  <li>
                    <NavLink to="/write">Write</NavLink>
                  </li>
                  <li>Log Out</li>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
