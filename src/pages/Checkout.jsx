import { useState } from "react";

function Checkout({ cart }) {

  const [orderSent, setOrderSent] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderSent(true);
  };

  const handleKeyDown = (e, nextField) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const next = document.getElementById(nextField);

    if (next) next.focus();
  }
};

  return (
    <section className="checkout-page">
      <h2 className="title">Complete Your Order</h2>

      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <div className="checkout-container">
          <div className="order-summary">
            <h3>Your Order</h3>

            {Object.values(
              cart.reduce((acc, item) => {
                if (!acc[item.name]) {acc[item.name] = {...item, quantity: 1};}
                else {acc[item.name].quantity += 1;}
                return acc;
              }, {})
            ).map((item, index) => (
            
              <div key={index} className="summary-item">
                <p> {item.name}<span style={{ color:"#fc0685", fontWeight:"bold" }}>x{item.quantity}</span> </p>
                <p>${item.price * item.quantity}</p>
              </div>
            ))}

            

            <h3 className="total">Total: ${total}</h3>

          </div>

          <form className="checkout-form" onSubmit={handleSubmit}>

            <input id="fullname" type="text" placeholder="Full Name" onKeyDown={(e)=>handleKeyDown(e,"email")} required/>

            <input id="email" type="email" placeholder="Email" onKeyDown={(e)=>handleKeyDown(e,"phone")} required />

            <input id="phone" type="tel" placeholder="Phone Number" onKeyDown={(e)=>handleKeyDown(e,"location")} required />

            <input id="location" type="text" placeholder="Location / Address" onKeyDown={(e)=>handleKeyDown(e,"notes")} required />

            <textarea id="notes" placeholder="Additional Notes"></textarea>

            <button type="submit"> Confirm Order </button>

            {orderSent && (
              <div className="success-message">
                <h3>Your Order Has Been Sent Successfully 🌸</h3>
              </div>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
export default Checkout;