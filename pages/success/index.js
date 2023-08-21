import React, { useEffect, useState } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import { useRouter } from "next/router";
import { getFunctions, httpsCallable } from "firebase/functions";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default function success() {
  const router = useRouter();
  const [orderDetail, setOrderDetail] = useState("");

  const functions = getFunctions();
  const orderDetails = httpsCallable(functions, "getOrderForSuccessPage");

  useEffect(() => {
    if (router.asPath !== router.route) {
      orderDetails({ session_id: router.query.session_id })
        .then((result) => {
          setOrderDetail(result.data);
        })
        .catch((error) => {
          const code = error.code;
          const message = error.message;
          const details = error.details;
        });
    }
  }, [router]);

  return (
    <>
      {!orderDetail ? (
        <LoadingSpinner />
      ) : (
        <Jumbotron
          title={`Gracias ${orderDetail.customer_details.name}!`}
          message="Checa tu email to download your ebook!"
          link={orderDetail.metadata.download}
          buttonText="Descarga tu ebook!"
        />
      )}
    </>
  );
}
