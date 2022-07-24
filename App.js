import "./App.css";
import Navigation from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderChild from "./components/HeaderChild";
import Pics from "./components/Pics";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <center>
          <HeaderChild></HeaderChild>
        </center>
        <Pics></Pics>
        <Gallery></Gallery>
        <Reviews></Reviews>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
