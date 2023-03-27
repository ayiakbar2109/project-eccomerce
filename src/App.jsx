import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </Routers>
  );
}

export default App;
