import ServicesCard from "../ServicesCard/ServicesCard";
import "./ourServices.css";

const servicesData = [
  {
    img: "/assets/services-salad-icon.png",
    title: "CATERING",
    text: "Delight your guests with our flavors and presentation",
  },
  {
    img: "/assets/time-fast-icon.png",
    title: "FAST DELIVERY",
    text: "We deliver your order promptly to your door",
  },
  {
    img: "/assets/shopping-cart-icon.png",
    title: "ONLINE ORDERING",
    text: "Explore menu & order with ease using our Online Ordering ",
  },
  {
    img: "/assets/gift-icon.png",
    title: "GIFT CARDS",
    text: "Give the gift of exceptional dining with Foodi Gift Cards",
  },
];

const OurServices = () => {
  return (
    <div className="our--services">
      <div className="our--services__left">
        <span className="our--services__left__heading">
          OUR STORY & SERVICES
        </span>
        <span className="our--services__left__sub--heading">
          Our Culinary Journey And Services
        </span>
        <span className="our--services__left__text">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </span>

        <button>Explore</button>
      </div>
      <div className="our--services__right">
        {servicesData.map((data, i) => {
          return <ServicesCard {...data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default OurServices;
