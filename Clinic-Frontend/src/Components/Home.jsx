import Slider from "./Slider";
import Booking from "./Booking";
import About from "./About";
import Treatment from "./Treatment";
import Team from "./Team";
import Client from "./Client";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <Slider />
            <Booking />
            <About />
            <Treatment />
            <Team />
            <Client />
            <Contact />
        </>
    );
}
