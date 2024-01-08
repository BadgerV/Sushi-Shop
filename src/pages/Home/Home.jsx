import CustomerFavorites from "../../components/CustomerFavorites/CustomerFavorites";
import Navbar from "../../components/Navbar/Navbar";
import SpecialDishes from "../../components/SpecialDishes/SpecialDishes";
import Splash from "../../components/Splash/Splash";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Splash />
        <CustomerFavorites />
        <SpecialDishes />
      </div>
    </>
  );
};

export default Home;
