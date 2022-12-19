import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import "./App.css";
import Nav from "./Components/Nav";
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
