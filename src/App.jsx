import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPopup from "./components/loginPopup/LoginPopup";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
