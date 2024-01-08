import "./dishCard.css";

const DishCard = () => {
  return (
    <div className="dish-card">
      <div className="dish-card__img">
        <img src="/assets/big-dish-img-3.png" alt="" />
      </div>
      <div className="dish-card__main-text">Main Dish</div>
      <div className="dish-card__sub-text">(86 Dishes)</div>
    </div>
  );
};

export default DishCard;
