import Review from "../Review/Review";
import "./splash.css";

const Splash = () => {
  const props = [
    {
      name: "Makizushi",
      price: "18.00",
      rating: 5,
      image: "/assets/sushi-dish-1.png",
    },
    {
      name: "Faozy Special",
      price: "22.50",
      rating: 3,
      image: "/assets/sushi-dish-2.png",
    },
  ];
  return (
    <div className="splash">
      <div className="splash-left">
        <span className="splash-left__main-text">
          Sushi Bliss, Every Roll a Flavorful
          <span className="green-text"> Kiss</span>
        </span>

        <span className="splash-left__small-text">
          Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations,
          Where Tradition Meets Innovation!
        </span>

        <div className="button-container">
          <button className="splash-first__button">Order Now</button>
          <button className="splash-second__button">
            Watch Video
            <span>
              <img src="/assets/play-icon.png" alt="Play" />
            </span>
          </button>
        </div>
      </div>
      <div className="splash-right">
        <div className="splash-image">
          <img src="/assets/splash-image.png" alt="Big Sushi Image" />
        </div>
        <img
          src="/assets/best-sushi-image.png"
          alt="Best Suchi Ever"
          className="best-sushi-text"
        />
        <div className="splash-right-bottom">
          {props.map((prop, index) => {
            return <Review {...prop} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Splash;
