import { useState } from "react";
import ExplicitDishCard from "../DishCard/ExplicitDishCard";
import "./specialDishes.css";

const SpecialDishes = () => {
  const sushiMenu = [
    {
      img: 2,
      name: "Dragon Roll",
      description: "Delicious eel and avocado",
      price: "15.99",
      rating: 4.5,
    },
    {
      img: 1,
      name: "Spicy Tuna Roll",
      description: "Perfectly spiced tuna",
      price: "12.99",
      rating: 4.2,
    },
    {
      img: 1,
      name: "Salmon Nigiri",
      description: "Fresh salmon on rice",
      price: "9.99",
      rating: 4.8,
    },
    {
      img: 3,
      name: "Tempura Uramaki",
      description: "Crispy tempura goodness",
      price: "14.99",
      rating: 4.3,
    },
    {
      img: 2,
      name: "Rainbow Sashimi",
      description: "A colorful assortment",
      price: "17.99",
      rating: 4.6,
    },
    {
      img: 3,
      name: "California Roll",
      description: "Classic with a twist",
      price: "11.99",
      rating: 4.1,
    },
    {
      img: 1,
      name: "Ebi Hand Roll",
      description: "Shrimp delight",
      price: "8.99",
      rating: 4.0,
    },
    {
      img: 2,
      name: "Vegetarian Maki",
      description: "Fresh veggies, pure joy",
      price: "10.99",
      rating: 4.4,
    },
    {
      img: 1,
      name: "Tuna Sashimi",
      description: "Simple and exquisite",
      price: "13.99",
      rating: 4.7,
    },
    {
      img: 1,
      name: "Crispy Crab Roll",
      description: "Crunchy goodness",
      price: "16.99",
      rating: 4.2,
    },
    {
      img: 3,
      name: "Avocado Nigiri",
      description: "Creamy avocado delight",
      price: "9.99",
      rating: 4.6,
    },
    {
      img: 2,
      name: "Spicy Scallop Roll",
      description: "Scallop with a kick",
      price: "15.99",
      rating: 4.3,
    },
    {
      img: 3,
      name: "Sesame Tofu Sushi",
      description: "Vegetarian delight",
      price: "12.99",
      rating: 4.5,
    },
    {
      img: 1,
      name: "Smoked Salmon Hand Roll",
      description: "Smoky and savory",
      price: "14.99",
      rating: 4.1,
    },
    {
      img: 2,
      name: "Mango Tango Maki",
      description: "Sweet and savory fusion",
      price: "18.99",
      rating: 4.7,
    },
  ];

  //just another comment

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(sushiMenu.length / itemsPerPage);

  const visibleSushiMenu = sushiMenu.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //just another comment

  return (
    <div className="special-dishes">
      <div className="special-dishes-top">
        <span className="special-dishes-text">SPECIAL DISHES</span>
      </div>
      <div className="special-dishes-middle">
        <div className="special-dishes-middle__left">
          <span className="special-dishes-best-text">
            Best Dishes <br /> From Our Menu
          </span>
        </div>
        <div className="special-dishes-middle__right">
          {totalPages > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    prevPage > 1 ? prevPage - 1 : 1
                  )
                }
              >
                <img src="/assets/prev-button.png" alt="prev" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    prevPage < totalPages ? prevPage + 1 : totalPages
                  )
                }
              >
                <img src="/assets/next-button.png" alt="prev" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="special-dishes-bottom">
        {visibleSushiMenu.map((dish, index) => (
          <ExplicitDishCard key={index} {...dish} />
        ))}
        {sushiMenu.length === 0 && <p>No special dishes available</p>}
      </div>
    </div>
  );
};

export default SpecialDishes;
