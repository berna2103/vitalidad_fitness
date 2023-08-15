import React, { useState, useEffect } from "react";
import {
  getFunctions,
  httpsCallable,
} from "firebase/functions";
import { Form } from "react-bootstrap";


const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Tienda() {
  const functions = getFunctions();
    
  const [message, setMessage] = useState("");
  const createCheckout = httpsCallable(functions, "stripeCreateCheckout");

  const handleSubmit = (e) => {
    e.preventDefault();
    createCheckout({ text: "test" })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
      });
  };
 
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <Form onSubmit={handleSubmit}>
      <button type="submit">
        Checkout
      </button>
    </Form>
  </section>
  );
}