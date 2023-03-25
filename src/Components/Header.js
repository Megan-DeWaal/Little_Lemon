import Nav from "./Nav";
import { ImageAssets } from "../assets/ImageAssets";

function Header() {
    return (
        <div className="header">
            <img src={ImageAssets.logo1} className="logo1"></img>
            <Nav></Nav>
        </div>
    );
}

export default Header;