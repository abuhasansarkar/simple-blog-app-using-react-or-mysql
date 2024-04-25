import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <span>AbuHasan Blogs</span>
              <p>let's Learn</p>
            </Link>
          </div>
        </div>
        <div className="right">
          <span>Develop By Abu Hasan using ❤️ React :)</span>
        </div>
      </div>
    </div>
  );
};
