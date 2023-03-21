import { Routes, Route, Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <img src="logo2.png"></img>
            <ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/order online" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li><img src="facebook.png"></img></li>
                <li><img src="instagram.png"></img></li>
                <li><img src="twitter.png"></img></li>
                <li><img src="youtube.png"></img></li>
            </ul>
        </>
        
    );
}

export default Footer;