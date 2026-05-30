import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cakes({ addToCart }) {
  const navigate = useNavigate();
  const desserts = [
    { name: "Chocolate Cake", price: 5, image: "/images/chocolate-cake-white-background_665280-28460.avif"},
    {name: "Nutella cake", price: 6, image: "/images/delicious-chocolate-brownies-isolated-on-transparent-background-png.webp"},
    {name: "Strawberry Cheesecake", price: 8, image: "/images/perfect-angled-slice-of-fridge-strawberry-cheesecake-with-strawberry-topping-png.webp"}
  ];

  return (
    <section className="menu">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "40px", color: "#fc0685" }}>Sweet Menu</h2>

        <h3 style={{ fontSize: "28px", margin: "10px 0" }}>Chez Sarah</h3>

        <p style={{ fontSize: "18px", color: "#555" }}>Weekly Specials</p>
      </div>

      <div className="menu-container">
        {desserts.map((item, index) => (

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
export default Cakes;