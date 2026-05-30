function Home(){
    return(
        <>
            <section className="home" id="top">
                <div className="home-text">
                    <h1>DESSERTS</h1>
                    <h1>Chez Sarah 🌸</h1>

                    <h2>Sweet Delights Made Just <br/>For You</h2>

                    <a href="#discover" className="btn">Explore More</a>
                </div>

                <div className="home-img">
                    <img src="/images/chez sarah.png" alt="Chez Sarah" />
                </div>
            </section>

            <section className="home" id="discover">
                <div className="home-img">
                    <img src="/images/buying from chez sarah.png" alt="Discover" />
                </div>
                
                <div className="home-text">
                    <span>
                        <h1>Welcome</h1>
                    </span>

                    <h3>Discover Our Sweet World</h3>

                    <p>At Chez Sarah, every dessert is made with passion and creativity.We bring you a unique experience filled with flavor, freshness, and happiness.<br/>Scroll more or explore our menu to find your favorite sweet treat made just for you.</p>

                    <a href="/menu" className="btn" >Go to Menu</a>
                </div>
            </section>
        </>
    );
}
export default Home;