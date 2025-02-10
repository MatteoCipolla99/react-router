import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <ul>
          <div className="logo">Blog 138</div>
          <div className="nav-links">
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Chi siamo</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contatti</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
