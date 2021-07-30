import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__media">
        <img src={logo} alt="eazybank logo" />
        {/* social media */}
        <ul className="footer__socials">
          <li>
            <a href="eazyfb">
              <img src={fb} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="eazytwitter">
              <img src={youtube} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="eazyyoutube">
              <img src={twitter} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="eazypinterest">
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
          <li>
            <a href="eazyinstagram">
              <img src={insta} alt="insta" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__nav">
        <a href="aboutus">About Us</a>
        <a href="contact">Contact</a>
        <a href="blog">Blog</a>
      </div>
      <div className="footer__nav">
        <a href="careers">Careers</a>
        <a href="support">Support</a>
        <a href="privacy">Privacy Policy</a>
      </div>
      <div>
        <div className="footer__cta">
          <Button />
        </div>
        <p className="footer__copyright">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
