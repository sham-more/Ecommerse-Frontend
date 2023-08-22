import "./App.css";
import Footer from "./customer/comp/Footer/Footer";
import Product from "./customer/comp/Product/Product";
import Navbar from "./customer/comp/navbar/Navbar";
import Home from "./customer/pages/Home";
function App() {
  return (
    <div className="mx">
      <Navbar />
      {/*<Home />*/}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
