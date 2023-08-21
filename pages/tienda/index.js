import React, { useEffect, useState } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import { createClient } from "contentful";
import ProductCard from "../../Components/ProductCard/ProductCard";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Tienda() {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((response) => {
        setProducts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 mb-5">Nuestras publicaciones</h1>
      {!products ? (
        <Jumbotron
          title="Regresa pronto!"
          message="Muy pronto tendremos productos que te ayudaran en tu camino a una vida saludable"
        />
      ) : (
        <div className="row g-2 mb-5">
          <div className="col col-lg-3 col-md-4 col-sm-6">
            {products.map((product) => (
              <ProductCard key={product.sys.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
