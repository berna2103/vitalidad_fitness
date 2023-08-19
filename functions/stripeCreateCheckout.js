// This is your test secret API key.
require("dotenv").config();
const stripe = require("stripe")('sk_test_51NeS7JLBE5phxtPhCKoDyePOoC3iOQ2CRWnJNpmoROb9ZElGJu1i7jwUUxYcFsAPIsWY7OZOk8fMtJ9tlh4BGTP400wCFbIZBs');
const { onCall } = require("firebase-functions/v2/https");
const YOUR_DOMAIN = 'https://vitalidadfitness.com/'
// const { items } = req.body;
exports.stripeCreatecheckout = onCall(async (data) => {

    // const { items } = req.body;
    console.log(data.data)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1NeSPNLBE5phxtPhUI5mIlYO',
          quantity: 1,
        },
      ],
      metadata: {download: 'https://firebasestorage.googleapis.com/v0/b/virtual-fitness-coach-2103.appspot.com/o/4dayworkoutsmall.pdf?alt=media&token=e320f716-4c4c-4126-a144-09acc032da74'},
      mode: 'payment',
      //success_url: `${YOUR_DOMAIN}success`,
      success_url: `${YOUR_DOMAIN}success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}canceled`,
      automatic_tax: {enabled: true},
    });
    console.log(session)
  
    return {
        id: session.id
    }
  });


