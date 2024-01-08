import DishCard from "../DishCard/DishCard";
import "./customerFavorites.css";

const CustomerFavorites = () => {
  const sushiData = [
    {
      name: "Sake Nigiri",
      numberOfPieces: "24 Pieces",
      img: "2",
    },
    {
      name: "California Roll",
      numberOfPieces: "30 Rolls",
      img: 1,
    },
    {
      name: "Ebi Sashimi",
      numberOfPieces: "18 Pieces",
      img: 3,
    },
    {
      name: "Rainbow Maki",
      numberOfPieces: "20 Rolls",
      img: 4,
    },
  ];

  return (
    <div className="customer-favorites">
      <span className="customer-favorites__heading">CUSTOMER FAVORITES</span>
      <span className="customer-favorites-sub__heading">
        Popular Categories
      </span>

      <div className="customer-favorites__dishes">
        {sushiData.map((sushi) => {
          return <DishCard key={sushi.name} {...sushi} />;
        })}
      </div>
    </div>
  );
};

export default CustomerFavorites;
