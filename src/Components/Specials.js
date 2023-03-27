import { ImageAssets } from "../assets/ImageAssets";
import { Link } from "react-router-dom";

function Specials() {
    const items = [
        {image: ImageAssets.greeksalad,
        name: "Greek Salad",
        price: 12.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {image: ImageAssets.bruchetta,
        name: "Bruchetta",
        price: 5.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {image: ImageAssets.lemondessert,
        name: "Lemon Dessert",
        price: 12.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
    ]

    return ( 
        <div className="specials">
            <div>
                <h1 className="black">Specials</h1>
                <button className="menubutton"> <Link to="/menu" className="nav-item">Online Menu</Link></button>
            </div>
            <div>
                {items.map((item, i) => (
                    <article key={i}>
                        <img src={item.image} alt="dish" className="himage"></img>
                        <div className="specialstext">
                            <div className="dishnameline">
                                <h3>{item.name}</h3>
                                <h3 className="price">${item.price}</h3>
                            </div>
                            <p className="black">{item.description}</p>
                            <h3>Order A Delivery</h3>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Specials;