import CustomerFavorites from "../../components/CustomerFavorites/CustomerFavorites";
import Navbar from "../../components/Navbar/Navbar";
import Splash from "../../components/Splash/Splash";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Splash />
        <CustomerFavorites />
      </div>
    </>
  );
};

export default Home;
