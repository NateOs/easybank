import "../styles/App.scss";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* logo */}
      <a href="#" className="nav__logo">
        <img src={logo} alt="eazybank" />
      </a>
      {/* nav links */}
      <ul className="nav__links">
        <li className="nav__link-item">
          <a href="#">Home</a>
        </li>
        <li className="nav__link-item">
          <a href="">About</a>
        </li>
        <li className="nav__link-item">
          <a href="">Contact</a>
        </li>
        <li className="nav__link-item">
          <a href="">Blog</a>
        </li>
        <li className="nav__link-item">
          <a href="">Careers</a>
        </li>
        <li>
          {/* <Button /> */}
          <Button />
        </li>
      </ul>
      {/* menu icon */}
      <img src={hamburger} alt="menu" className="nav__menu" />
    </nav>
  );
}
