import { useState } from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ElectronicsIndex from "./pages/electronics/ElectronicsIndex";
import HomeIndex from "./pages/home/HomeIndex";
import JewelryIndex from "./pages/jewelry/JewelryIndex";
import MensClothingIndex from "./pages/mens-clothing/MensClothingIndex";
import WomensClothingIndex from "./pages/womens-clothing/WomensClothingIndex";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routers>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeIndex />}></Route>
        <Route path="/electronics" element={<ElectronicsIndex />}></Route>
        <Route path="/jewelery" element={<JewelryIndex />}></Route>
        <Route path="/men's clothing" element={<MensClothingIndex />}></Route>
        <Route
          path="/women's clothing"
          element={<WomensClothingIndex />}
        ></Route>
        <Route
          path="/electronics/:productId"
          element={<ProductDetails />}
        ></Route>
        <Route path="/jewelery/:productId" element={<ProductDetails />}></Route>
        <Route
          path="/men's clothing/:productId"
          element={<ProductDetails />}
        ></Route>
        <Route
          path="/women's clothing/:productId"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    </Routers>
  );
}

export default App;
