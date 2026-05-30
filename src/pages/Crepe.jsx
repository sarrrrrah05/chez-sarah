import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Crepe({ addToCart }) {

  const navigate = useNavigate();

  const desserts = [
    {name: "Nutella Crepe", price: 6, image: "/images/nutella crepe.jpg"},
    {name: "Strawberry Crepe", price: 6, image: "/images/strawbery crepe.jpg"},
    {name: "Lotus Crepe", price: 7, image: "/images/lotus crepe.png"}
  ];

  return (
    <section className="menu">
      <h1 className="title">Crepe Menu</h1>

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
      </div>
    </section>
  );
}
export default Crepe;