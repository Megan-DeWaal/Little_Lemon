import { Routes, Route, Link } from "react-router-dom";

function Hero(prompt, link) {
    return (
        <>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
                et dolore magna aliqua. 
            </p>
            <button><Link to={link} className="nav-item">{prompt}</Link></button>
            <img src="./images/chef.png"></img>
        </>
    )
}

export default Hero;