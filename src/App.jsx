import Navbar from "./components/Navbar";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart";
import "./index.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
