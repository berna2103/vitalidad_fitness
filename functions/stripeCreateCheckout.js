// This is your test secret API key.
require("dotenv").config();
const stripe = require("stripe")('sk_test_51NeS7JLBE5phxtPhCKoDyePOoC3iOQ2CRWnJNpmoROb9ZElGJu1i7jwUUxYcFsAPIsWY7OZOk8fMtJ9tlh4BGTP400wCFbIZBs');
const { onRequest } = require("firebase-functions/v2/https");
const YOUR_DOMAIN = 'https://vitalidadfitness.com/'
// const { items } = req.body;
exports.stripeCreatecheckout = onRequest(async (req, res) => {

    // const { items } = req.body;
    console.log(`Request custom payload:${req}`)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1NeSPNLBE5phxtPhUI5mIlYO',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      automatic_tax: {enabled: true},
    });
  
    res.redirect(303, session.url);
  });


