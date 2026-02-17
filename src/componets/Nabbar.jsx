import { NavLink } from "react-router";

function NabBarComponenet() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-me">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/contact-me">Contact me</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NabBarComponenet;
