import React, { Component } from "react";
import Button from "../../../Components/Ui/Button/Button";
import Contact from "./ContactData.module.css";

export class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postal: " ",
    },
  };
  render() {
    return (
      <div className={Contact.ContactData}>
        <h1>Thankyou for choosing us confirm your details!!!</h1>
        <form>
          <input
            className={Contact.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={Contact.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={Contact.Input}
            type="text"
            name="street"
            placeholder="Your Street"
          />
          <input
            className={Contact.Input}
            type="text"
            name="postal"
            placeholder="Your Postal Code"
          />
        </form>
        <Button btnType="Success">Order</Button>
      </div>
    );
  }
}

export default ContactData;
