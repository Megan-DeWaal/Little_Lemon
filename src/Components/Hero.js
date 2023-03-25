import { Link } from "react-router-dom";
import { ImageAssets } from "../assets/ImageAssets";

function Hero(props) {
    return (
        <div className="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. 
                </p>
                <button><Link to={props.link} className="nav-item">{props.prompt}</Link></button>
            </div>
            <div>
                <img src={ImageAssets.chef} className="himage roundedimage"></img>
            </div>
        </div>
    )
}

export default Hero;