import CustomerFavorites from "../../components/CustomerFavorites/CustomerFavorites";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurServices from "../../components/OurServices/OurServices";
import SpecialDishes from "../../components/SpecialDishes/SpecialDishes";
import Splash from "../../components/Splash/Splash";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Splash />
        <CustomerFavorites />
        <SpecialDishes />
        <Testimonials />
        <OurServices />
        <Footer />
      </div>
    </>
  );
};

export default Home;
