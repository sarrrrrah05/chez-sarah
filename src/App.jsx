import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Cakes from "./pages/Cakes.jsx";
import Crepe from "./pages/Crepe.jsx";
import ColdDrinks from "./pages/ColdDrinks.jsx";
import HotDrinks from "./pages/HotDrinks.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (name) => {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Routes>

        <Route path="/"  element={<Home />}/>

        <Route path="/about" element={<About />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/menu/cakes"  element={<Cakes addToCart={addToCart} />} />

        <Route path="/menu/crepe" element={<Crepe addToCart={addToCart} />} />

        <Route path="/menu/cold-drinks" element={<ColdDrinks addToCart={addToCart} />} />

        <Route path="/menu/hot-drinks" element={<HotDrinks addToCart={addToCart} />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={ <Cart cart={cart} removeFromCart={removeFromCart} /> } />

        <Route path="/checkout" element={ <Checkout cart={cart} /> } />
      </Routes>
      
      <Footer />
    </div>

  );
}

export default App;