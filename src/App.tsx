import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPageVid/MainPageVid";

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainPage />
        </div>
    );
}

export default App;
