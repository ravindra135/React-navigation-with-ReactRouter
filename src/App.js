import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Card from "./components/Card";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} exact/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/card/:user' element={<Card />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;