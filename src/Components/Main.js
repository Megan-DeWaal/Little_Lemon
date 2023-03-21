import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

import { Routes, Route, Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
                <Route path="/order online" element={<OrderOnline />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default Main;