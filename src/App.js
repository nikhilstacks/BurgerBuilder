import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuider";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Container/Checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" exact element={<BurgerBuilder />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
