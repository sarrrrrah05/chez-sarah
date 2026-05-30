import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ColdDrinks({ addToCart }) {

  const navigate = useNavigate();

  const drinks = [
    {name: "Iced Coffee", price: 3, image: "/images/Iced Coffee.avif"},
    {name: "Strawberry Milkshake", price: 4, image: "/images/strawberry milkshake.avif"},
    {name: "Chocolate Milkshake", price: 5, image: "/images/chocolate milkshake.png"}
  ];

  return (
    <section className="menu">
      <h1 className="title">Cold Drinks</h1>

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
export default ColdDrinks;