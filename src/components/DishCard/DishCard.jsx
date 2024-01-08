import "./dishCard.css";

const DishCard = ({ name, numberOfPieces, img }) => {
  return (
    <div className="dish-card">
      <div className="dish-card__img-cont">
        <img src={`/assets/big-dish-image-${img}.png`} alt="Sushi Image" />
      </div>
      <div className="dish-card__main-text">{name}</div>
      <div className="dish-card__sub-text">{numberOfPieces}</div>
    </div>
  );
};

export default DishCard;
