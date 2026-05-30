import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HotDrinks({ addToCart }) {
  const navigate = useNavigate();
  const drinks = [
    {name: "Hot Chocolate", price: 4, image: "/images/hot chocolate.png" },
    {name: "Cappuccino", price: 4, image: "/images/cappuccino.jpg"},
    {name: "Espresso", price: 3, image: "/images/espresso.webp" }
  ];

  return (
    <section className="menu">
      <h1 className="title">Hot Drinks</h1>

      <div className="menu-container">
        {drinks.map((item, index) => (
          <div className="box" key={index}>

            <div className="box-img">
              <img src={item.image} alt={item.name} />
            </div>

            <h2>{item.name}</h2>

            <span>${item.price}</span>

            <button className="menu-cart-btn" onClick={() => addToCart?.(item)} style={{ marginTop: "12px", fontSize: "22px", color: "#000000", cursor: "pointer"}} title="Add to cart">
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="btn" onClick={() => navigate("/cart")}>Finish My Order 🛍️</button>

        <a href="/menu" className="btn" style={{ marginLeft: "15px" }}>Back to Menu</a>
      </div>
    </section>
  );
}
export default HotDrinks;