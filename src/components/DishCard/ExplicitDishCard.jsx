import "./dishcard.css";

const ExplicitDishCard = ({ img, name, description, price, rating }) => {
  return (
    <div className="explicit-dishcard">
      <div className="explicit-dishcard-heart__container">
        <img src="/assets/small-heart.png" alt="like" />
      </div>

      <img src={`/assets/big-sushi-dish-${img}.png`} alt="" />

      <div className="explicit-dish-info">
        <span className="explicit-dish-info-header">{name}</span>
        <span className="explicit-dish-desc-header">{description}</span>
      </div>

      <div className="explicit-dish-bottom">
        <div className="explicit-dish-bottom-left">
          <img src="/assets/dollar-sign.png" alt="$" />
          <span>{price}</span>
        </div>
        <div className="explicit-dish-bottom-right">
          <img src="/assets/full-star-icon.png" alt="Star" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ExplicitDishCard;
