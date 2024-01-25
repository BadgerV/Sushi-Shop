import "./review.css";

const Review = ({ name, rating, price, image }) => {
  const maxStar = 5;
  return (
    <div className="review">
      <div className="review-left">
        <img src={image} alt="Dish" />
      </div>
      <div className="review-right">
        <span className="dish-name">{name}</span>
        <div className="dish-rating">
          {Array.from({ length: +rating }).map((_, index) => (
            <img src="/assets/full-star-icon.png" alt="" key={index} />
          ))}

          {Array.from({ length: maxStar - +rating }).map((_, index) => (
            <img
              src="/assets/empty-star-icon.png"
              alt=""
              key={index + +rating}
            />
          ))}
        </div>

        <span className="dish-price">
          <img src="/assets/dollar-sign.png" alt="$" />
          <span>{price}</span>
        </span>
      </div>
    </div>
  );
};

export default Review;
