import Nav from "./Nav";
import { ImageAssets } from "../assets/ImageAssets";

function Header() {
    return (
        <>
            <img src={ImageAssets.logo1}></img>
            <Nav></Nav>
        </>
    );
}

export default Header;