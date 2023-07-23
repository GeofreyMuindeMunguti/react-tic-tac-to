import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import App from "../App"
import './Wrapper.css'

export default function Wrapper(){
    return (
        <div className="container">
            <div className="sidebar"> 
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/tic">Tic Tac Toe</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tic" element={<App/>} />
                </Routes>
            </div>
        </div>
    )
}