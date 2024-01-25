import "./servicesCard.css";

const ServicesCard = ({ img, title, text }) => {
  console.log(img, title, text);
  return (
    <div className="service--card">
      <img src={img} alt="img" />
      <span>{title}</span>
      <span>{text}</span>
    </div>
  );
};

export default ServicesCard;
