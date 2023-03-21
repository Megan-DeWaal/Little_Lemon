import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Home() {
    return (
        <>
            <Hero prompt={"Reserve A Table"} link={"/reservations"}></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About></About>
        </>
    )
}

export default Home;