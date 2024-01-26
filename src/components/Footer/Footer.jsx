import FacebookIcon from "../CustomIcons/FacebookIcon";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--top">
        <div className="footer__first">
          <div className="navbar-left">
            <span className="navbar-left__first">S</span>
            <span className="navbar-left__other">ushi</span>
          </div>

          <span className="footer__first--text">
            Savor the artistry where every dish is a culinary masterpiece
          </span>
        </div>
        <div className="footer__second">
          <ul>
            <li>Useful Links</li>
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQS</li>
          </ul>
        </div>
        <div className="footer__third">
          <ul>
            <li>Main menu</li>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservations</li>
          </ul>
        </div>
        <div className="footer__fourth">
          <ul>
            <li>Contact Us</li>
            <li>example@gmail.com</li>
            <li>+64 958 248 966</li>
            <li>Social Media</li>
          </ul>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="footer-bottom__left">
          <div className="footer-icon">
            <img src="/assets/facebook-icon.svg" alt="" />
          </div>
          <div className="footer-icon">
            <img src="/assets/instagram-icon.svg" alt="" />
          </div>
          <div className="footer-icon">
            <img src="/assets/twitter-icon.svg" alt="" />
          </div>
          <div className="footer-icon">
            <img src="/assets/youtube-icon.svg" alt="" />
          </div>
        </div>

        <span className="copyright-text">
          Copyright 2023 Dscode | All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
