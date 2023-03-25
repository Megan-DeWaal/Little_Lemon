import { Link } from "react-router-dom";
import { ImageAssets } from "../assets/ImageAssets";

function Footer() {
    return (
        <div className="footer">
            <img src={ImageAssets.logo2} className="logo2"></img>
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
                <li><img src={ImageAssets.facebook} className="icon"></img></li>
                <li><img src={ImageAssets.instagram} className="icon"></img></li>
                <li><img src={ImageAssets.twitter} className="icon"></img></li>
                <li><img src={ImageAssets.youtube} className="icon"></img></li>
            </ul>
        </div>
        
    );
}

export default Footer;