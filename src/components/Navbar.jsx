import "../styles/App.scss";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="nav">

      {/* logo */}
      <a href="localhost:3000/" className="nav__logo">
        <img src={logo} alt="eazybank" />
      </a>

      {/* nav links */}
      <div className="nav__links">
        <p className="nav__link-item">
          <a href="localhost:3000/">Home</a>
        </p>
        <p className="nav__link-item">
          <a href="localhost:3000/">About</a>
        </p>
        <p className="nav__link-item">
          <a href="localhost:3000/">Contact</a>
        </p>
        <p className="nav__link-item">
          <a href="localhost:3000/">Blog</a>
        </p>
        <p className="nav__link-item">
          <a href="localhost:3000/">Careers</a>
        </p>
      </div>
      
      {/* button */}
      <div className="nav__button">
        <Button />
      </div>

      {/* menu icon */}
      <img src={hamburger} alt="menu" className="nav__menu" />
    </nav>
  );
}
