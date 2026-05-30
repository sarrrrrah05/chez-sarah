function Services (){
    return(
        <>
            <section className="services">
                <div style={{textAlign: "center", marginTop: "40px", marginBottom: "50px"}}>
                    <h2 style={{fontSize: "40px", color: "#fc0685", marginBottom: "10px"}}>Our Services</h2>

                    <h3 style={{fontSize: "22px", fontWeight: "400" }}>We provide the best dessert experience for you</h3>
                </div>

                <div className="services-container">
                    <div className="s-box">
                        <img src="/images/ai-businesswoman-talking-on-phone-3d-illustration-png-download-jpg-13188312.webp" alt="Order"/>

                        <h3>Your Order</h3>
                        <p>Browse, choose, and order your favorite desserts in just a few clicks.</p>
                    </div>

                    <div className="s-box">
                        <img src="/images/ai-delivery-girl-holding-parcel-3d-icon-png-download-jpg-13185650.webp" alt="Preparation"/>

                        <h3>Preparation & Packaging</h3>

                        <p>We carefully prepare your desserts with fresh ingredients and love.</p>
                    </div>

                    <div className="s-box">
                        <img src="/images/pngtree-delivery-girl-on-scooter-png-image_21024890.png" alt="Delivery" />

                       <h3>Delivery</h3>

                       <p>Fast delivery straight to your door, fresh and safe.</p>
                    </div>
                </div>

                <section className="connect">
                   <div className="connect-text">
                       <span>Let's Talk</span>

                       <h2>Connect now</h2>
                   </div>
                   <a href="/contact" className="btn">Contact Us</a>
                </section>
            </section>
        </>
    );
}
export default Services;