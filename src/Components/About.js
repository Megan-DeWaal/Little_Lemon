import { ImageAssets } from "../assets/ImageAssets";

function About() {
    return(
        <>
            <h1>Little Lemon</h1>
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Habitasse
                platea dictumst vestibulum rhoncus
                est pellentesque elit ullamcorper
                dignissim.
            </p>
            <img src={ImageAssets.MarioandAdrian}></img>
        </>
    );
}

export default About;