import DishCard from "../DishCard/DishCard";
import "./customerFavorites.css";

const CustomerFavorites = () => {
  return (
    <div className="customer-favorites">
      <span className="customer-favorites__heading">CUSTOMER FAVORITES</span>
      <span className="customer-favorites-sub__heading">
        Popular Categories
      </span>

      <div className="customer-favorites__dishes">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </div>
  );
};

export default CustomerFavorites;
