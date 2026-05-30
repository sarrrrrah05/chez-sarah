function About (){
    return(
        <>
            <section className="about" id="top">
                <div className="about-text">
                    <h1 style={{fontSize: "50px", color: "#fc0685", marginBottom: "10px", fontWeight: "700"}}>Our Story</h1>

                    <h3 style={{ fontSize: "28px", margin: "10px 0" }}> We make delicious and tasty desserts</h3>

                    <a href="#more" className="btn"> Explor More</a>
                </div>

                <div className="about-img">
                   <img src="/images/assorted-mini-cakes-with-raspberries-and-blueberries-on-pink-background-photo.webp" alt="About Chez Sarah"/>
                </div>
            </section>

            <section className="about" id="more">

                <div className="about-img">
                    <img src="/images/female-pastry-chef_132453-37383.avif" alt="chef"/>
                </div>

                <div className="about-text">
                    <h3 style={{ fontSize: "28px", margin: "10px 0" }}> Hello!</h3>
                    <p >What started as a small passion for baking at home turned into something truly special.I began by making desserts for family and friends, experimenting with flavors and recipes,and quickly discovered how much joy a simple sweet treat can bring.</p>
                    <br/>
                    <p>Today, Chez Sarah is a growing dessert shop dedicated to creating fresh, high-quality sweets made with love and care. Every dessert is crafted to deliver happiness in every bite.</p>

                    <a href="/" className="btn"> Back Home</a>
                </div>
        
            </section>
        </>
    );
}
export default About;