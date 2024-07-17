import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <section class="navSection">
      <nav class="sidenav">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/projects" className="navlink">
          Projects
        </NavLink>
        <NavLink to="/contact" className="navlink">
          Contact
        </NavLink>
      </nav>
    </section>
  );
}

export default NavBar;
