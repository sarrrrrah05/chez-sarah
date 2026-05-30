import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <h1 className="logo">Chez Sarah🌸</h1>

      <nav className="navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>

        <NavLink to="/about" className="nav-link">About</NavLink>

        <NavLink to="/menu" className="nav-link">Menu</NavLink>

        <NavLink to="/services" className="nav-link">Services</NavLink>

        <NavLink to="/contact" className="nav-link">Contact</NavLink>

        <NavLink to="/cart" className="nav-link">Cart</NavLink>

        <NavLink to="/checkout" className="nav-link">Check Out</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;