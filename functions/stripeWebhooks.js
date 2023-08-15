
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_KEY)

const { onRequest } = require("firebase-functions/v2/https");

const sendgrid = require('@sendgrid/mail')

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
const webhookSecret = process.env.WEBHOOK_SECRET

exports.stripeWebhooks = onRequest(async (request, response) => {

    const eventType = request.headers['stripe-signature'];

    try {
        // Verify the Stripe webhook event
        const event = stripe.webhooks.constructEvent(request.rawBody, eventType, webhookSecret);
       
    
        if (event.type === 'checkout.session.completed') {
          const session = event

          
          const id = session.id
          const email = ''
          const productId = ''

          const product = await stripe.checkout.sessions.listLineItems(
            'cs_test_a19ppO3smCk4FVOWliZ10M3Oq61RFHNGJwtoLq9YKAfWdNegfRsLSGNz1S',  {limit:5, expand:['data.price.product']},
            function(err, line_items){
              console.log(err)
              console.log(line_items.object)
            }
          )
          


          // Generate a unique download link for the user's purchased ebook
          // const downloadLink = await generateDownloadLink(session.customer_email, session.line_items.data[0].price.product);
    
          // Send email with download link to customer
          // await sendDownloadLinkEmail(session.customer_email, downloadLink);
    
          response.status(200).send('Webhook Handled Successfully');
        }
      } catch (error) {
        console.error(error);
        response.status(400).send('Webhook Error');
      }

})

async function generateDownloadLink(customerEmail, productId) {
    // Generate download link logic here and store it in Firestore
    console.log(customerEmail)
    console.log(productId)
  }

async function sendDownloadLinkEmail(customerEmail, downloadLink) {
    const msg = {
      to: customerEmail,
      from: 'your@email.com',
      subject: 'Your Ebook Download Link',
      html: `Thank you for your purchase! Here is your <a href="${downloadLink}">download link</a>.`,
    };
    
    try {
      await sendgrid.send(msg);
    } catch (error) {
      console.error(error);
    }
  }