import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuider";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Container/Checkout/Checkout";
import ContactData from "./Container/Checkout/ContanctData/ContactData";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/checkout/contact-data"
              element={[
                <Checkout key="checkout" />,
                <ContactData key="contactData" />,
              ]}
            />
            <Route path="/" exact element={<BurgerBuilder />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
