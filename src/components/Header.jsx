import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Chi siamo</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contatti</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
