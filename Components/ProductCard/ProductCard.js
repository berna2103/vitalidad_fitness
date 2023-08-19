import React from "react";
import styles from "./productcard.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import BlogPostWithRichText from "../BlogPostWithRichText/BlogPostWithRichText";

export default function ProductCard({ product }) {
  const { title, price, downloadLink, imgUrl, description, subtitle } = product.fields;

  const tooltip = (
    <Tooltip id="tooltip">
      <p>{subtitle}</p>
    </Tooltip>
  );

  return (
    <div className={`${styles.product_card} card blogcard`}>
      <img className={`${styles.product_image}`} src={imgUrl} alt={title} />

      <p className={`${styles.product_title}`}>
        {title}{" "}
        <OverlayTrigger placement="right" overlay={tooltip}>
          <i class="bi bi-info-circle-fill"></i>
        </OverlayTrigger>
      </p>

      <a className={`btn btn-dark`} href={downloadLink}>
        <i class="bi bi-cart-check-fill"></i> $
        <span className={`${styles.product_price}`}> {price}</span>
      </a>
    </div>
  );
}
