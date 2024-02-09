import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <section class="navSection">
      <nav class="sidenav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>
    </section>
  );
}

export default NavBar;
