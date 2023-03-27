import { ImageAssets } from "../assets/ImageAssets";

function About() {
    return(
        <div className="about">
            <div>
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
            </div>
            <div>
                <img src={ImageAssets.MarioandAdrian} alt="Mario and Adrian" className="himage roundedimage"></img>
            </div>
        </div>
    );
}

export default About;