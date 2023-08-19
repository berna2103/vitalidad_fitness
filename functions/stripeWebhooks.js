require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const { onRequest } = require("firebase-functions/v2/https");

const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const webhookSecret = process.env.WEBHOOK_SECRET;

exports.stripeWebhooks = onRequest(async (request, response) => {
  const eventType = request.headers["stripe-signature"];

  console.log(request.body);

  try {
    // Verify the Stripe webhook event
    const event = stripe.webhooks.constructEvent(
      request.rawBody,
      eventType,
      webhookSecret
    );
    const data = event.data.object;


    if (event.type === "checkout.session.completed") {
      const session = event;

      const id = session.id;
      const email = data.customer_details.email;
      const name = data.customer_details.name;
      const downloadLink = data.metadata.download;

      const product = await stripe.checkout.sessions.listLineItems(
        "cs_test_a19ppO3smCk4FVOWliZ10M3Oq61RFHNGJwtoLq9YKAfWdNegfRsLSGNz1S",
        { limit: 5, expand: ["data.price.product"] }
      );

      // Generate a unique download link for the user's purchased ebook
      //const downloadLink = await generateDownloadLink(session.customer_email, session.line_items.data[0].price.product);

      // Send email with download link to customer
     await sendDownloadLinkEmail(email, name, downloadLink);

      response
        .status(200)
        .send({
          sessionId: id,
          customerEmail: email,
          customerName: name,
          downloadLink: downloadLink,
        });
    }
  } catch (error) {
    console.error(error);
    response.status(400).send("Webhook Error");
  }
});

async function createOrder(customerEmail, productId) {
  // Generate download link logic here and store it in Firestore
}

async function sendDownloadLinkEmail(customerEmail, name, downloadLink) {
  const msg = {
    to: customerEmail,
    from: "sales@barciastech.com",
    subject: "Your Ebook Download Link",
    html: `Thank you for your purchase ${name}! Here is your <a href="${downloadLink}">download link</a>.`,
  };

  try {
    await sendgrid.send(msg);
  } catch (error) {
    console.error(error);
  }
}
