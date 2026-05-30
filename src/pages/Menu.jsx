import { useNavigate } from "react-router-dom";

function Menu(){
    const navigate=useNavigate();
    return(
        <section className="menu">
            <h1 className="title">Our Sweet Menu</h1>

            <div className="menu-container">
                <div className="box">
                    <div className="box-img">
                        <img src="/images/cake.png" alt="cake"/>
                    </div>

                    <h2>cakes</h2>

                    <button className="btn" onClick={()=> navigate("/menu/cakes")}> View cakes </button>
                </div>
                
                <div className="box">
                    <div className="box-img">
                        <img src="/images/crepe.avif" alt="crepe"/>
                    </div>

                    <h2>crepe</h2>

                    <button className="btn" onClick={()=> navigate("/menu/crepe")}> View Crepe </button>
                </div>

                <div className="box">
                    <div className="box-img">
                        <img src="/images/cold drink.jpg" alt="cold drink"/>
                    </div>

                    <h2>Cold Drinks</h2>

                    <button className="btn" onClick={()=>navigate("/menu/cold-drinks")}>View Drinks</button>
                </div>

                <div className="box">
                    <div className="box-img">
                        <img src="/images/hot drink.png" alt="hot drink"/>
                    </div>

                    <h2>Hot Drinks</h2>

                    <button className="btn" onClick={()=>navigate("/menu/hot-drinks")}>View Drinks</button>
                </div>
            </div>
        </section>
    );
}
export default Menu;