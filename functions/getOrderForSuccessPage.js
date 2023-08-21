const { onCall } = require("firebase-functions/v2/https");
require("dotenv").config();
const stripe = require("stripe")(
  process.env.STRIPE_KEY
);


exports.getOrderForSuccessPage = onCall(async (request) => {
    const session_id = request.data.session_id
    const session = await stripe.checkout.sessions.retrieve(session_id)

    return (session)

})