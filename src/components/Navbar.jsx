import { NavLink, Link } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">My Portfolio</Link>
        <nav className="menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
