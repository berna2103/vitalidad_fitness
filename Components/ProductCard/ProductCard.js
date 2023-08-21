import React, { useEffect } from "react";
import styles from "./productcard.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import BlogPostWithRichText from "../BlogPostWithRichText/BlogPostWithRichText";
import { Form } from "react-bootstrap";
import { loadStripe } from '@stripe/stripe-js';
import {
    getFunctions,
    httpsCallable,
  } from "firebase/functions";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );


export default function ProductCard({ product }) {
  const { title, price, downloadLink, imgUrl, description, subtitle } = product.fields;
  const functions = getFunctions();
  const createCheckout = httpsCallable(functions, "stripeCreateCheckout");

  const tooltip = (
    <Tooltip id="tooltip">
      <p>{subtitle}</p>
    </Tooltip>
  );

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise
    createCheckout({ text: product.fields})
      .then((result) => {
        const sessionId = result.data.id
        console.log(result)
        stripe.redirectToCheckout({ sessionId: sessionId })
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
      });
  };

  return (
    <div className={`${styles.product_card} card blogcard`}>
      <img className={`${styles.product_image}`} src={imgUrl} alt={title} />

      <p className={`${styles.product_title}`}>
        {title}{" "}
        <OverlayTrigger placement="right" overlay={tooltip}>
          <i class="bi bi-info-circle-fill"></i>
        </OverlayTrigger>
      </p>
      
      <Form onSubmit={handleSubmit}>
      <button className={`btn btn-dark`}>
        <i class="bi bi-cart-check-fill"></i> $
        <span className={`${styles.product_price}`}> {price}</span>
      </button>
      </Form>

    </div>
  );
}
