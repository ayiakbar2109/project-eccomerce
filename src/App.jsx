import { useState } from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ElectronicsIndex from "./pages/electronics/ElectronicsIndex";
import HomeIndex from "./pages/home/HomeIndex";
import JewelryIndex from "./pages/jewelry/JewelryIndex";
import MensClothingIndex from "./pages/mens-clothing/MensClothingIndex";
import WomensClothingIndex from "./pages/womens-clothing/WomensClothingIndex";
function App() {
  return (
    <Routers>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeIndex />}></Route>
        <Route path="/electronics" element={<ElectronicsIndex />}></Route>
        <Route path="/jewelry" element={<JewelryIndex />}></Route>
        <Route path="/men's" element={<MensClothingIndex />}></Route>
        <Route path="/womensclothing" element={<WomensClothingIndex />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;
