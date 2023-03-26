import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Journey, Product, Store, Team } from "./pages";
import { NavBar } from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Store />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
