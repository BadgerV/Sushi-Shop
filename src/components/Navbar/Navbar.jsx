import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-left__first">S</span>
        <span className="navbar-left__other">ushi</span>
      </div>
      <div className="navbar-middle">
        <span>Home</span>
        <span>
          Menu
          <img src="/assets/dropdown-icon.svg" alt="down" />
        </span>
        <span>
          Services
          <img src="/assets/dropdown-icon.svg" alt="down" />
        </span>
        <span>About Us</span>
        <span>Offers</span>
      </div>
      <div className="navbar-right">
        <div className="navbar-right__bag">
          <img src="/assets/shopping-bag-icon.svg" alt="bag" />
          <span className="number-of-products">8</span>
        </div>

        <div className="navbar-right__contact">
            <img src="/assets/phone-icon.svg" alt="phone" />
            <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
