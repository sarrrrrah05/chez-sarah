import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {

  // Group same items
  const groupedCart = cart.reduce((acc, item) => {

    const existing = acc.find(i => i.name === item.name);

    if (existing) {
      existing.qty += 1;
    } else {
      acc.push({ ...item, qty: 1 });
    }

    return acc;

  }, []);

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="cart-page">

      <h2 className="title">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>

          {groupedCart.map((item) => (

            <div className="cart-item" key={item.name}>

              <h3>
                {item.name}{" "}
                <span style={{ color: "#fc0685" }}>
                  ×{item.qty}
                </span>
              </h3>

              <p>${item.price} each</p>

              <p>
                Total: ${item.price * item.qty}
              </p>

              {/* FIXED DELETE */}
              <button
                onClick={() => removeFromCart(item.name)}
              >
                Delete
              </button>

            </div>

          ))}

          <h3 className="cart-total">
            Total: ${total}
          </h3>

          <div style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap"
          }}>

            <Link to="/menu">
              <button className="order-btn" style={{ background: "#7b5cff" }}>
                Back to Menu
              </button>
            </Link>

            <Link to="/checkout">
              <button className="order-btn">
                Order Now
              </button>
            </Link>

          </div>

        </div>
      )}

    </section>
  );
}

export default Cart;