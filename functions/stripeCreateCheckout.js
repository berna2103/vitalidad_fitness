// This is your test secret API key.
require("dotenv").config();
const stripe = require("stripe")(
  process.env.STRIPE_KEY
);
const { onCall } = require("firebase-functions/v2/https");
const YOUR_DOMAIN = "https://vitalidadfitness.com/";

exports.stripeCreatecheckout = onCall(async (data) => {
  const { title, imgUrl, price, downloadLink, subtitle } = data.data.text;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          tax_behavior: "exclusive",
           
          unit_amount: Number(price) * 100,
          product_data: {
            name: title,
            description: subtitle,
            images: [imgUrl],
            tax_code: 'txcd_10302000',
          }
        },
        quantity: 1,
      },
    ],
    metadata: { download: downloadLink },
    mode: "payment",
    //success_url: `${YOUR_DOMAIN}success`,
    success_url: `${YOUR_DOMAIN}success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}canceled`,
    automatic_tax: { enabled: true },
  });
  console.log(session);

  return {
    id: session.id,
    title: title,
  };
});
