
const sgMail = require("@sendgrid/mail");
const apiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(apiKey);

// // // The Firebase Admin SDK to access Firestore.
// const { initializeApp } = require("firebase-admin/app");
// initializeApp();
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

exports.createNewsletter = onDocumentCreated("newsletter/{docId}", (event) => {
  
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data associated with the event");
      return;
    }
    const data = snapshot.data();
  
    const name = data.name;
    const email = data.email;
  
    const msg = {
      to: email, 
      from: "sales@barciastech.com",
      subject: "Tu AI Fitness ebook gratis",
      text: `Hola ${name} cada semana recibiras tips de alta calidad para que cumplas tus metas.`,
      html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Descarga tu ebook gratuito</title>
      </head>
      <body>
        <h1 className='text-uppercase'>¡Hola ${name}!</h1>
        <p>Gracias por registrarte para recibir nuestras actualizaciones de nutrición y fitness. Como agradecimiento, nos complace ofrecerte un ebook completamente gratuito que contiene información valiosa y consejos prácticos para ayudarte a alcanzar tus metas de salud y bienestar.</p>
        
        <h2>Ebook: Nutrición y Fitness para una vida saludable</h2>
        <p>En nuestro ebook encontrarás una guía completa que cubre diversos temas relacionados con la nutrición y el fitness, diseñada para brindarte los conocimientos necesarios para tomar decisiones informadas sobre tu alimentación y lograr un estilo de vida activo.</p>
        
        <h3>Contenido destacado:</h3>
        <ol>
          <li>Fundamentos de la nutrición</li>
          <li>Planificación de comidas saludables</li>
          <li>Suplementos nutricionales</li>
          <li>Rutinas de ejercicio efectivas</li>
          <li>Gestión del peso</li>
        </ol>
        
        <p>Para descargar tu copia gratuita del ebook "Nutrición y Fitness para una vida saludable", simplemente haz clic en el siguiente enlace: <a href="https://firebasestorage.googleapis.com/v0/b/virtual-fitness-coach-2103.appspot.com/o/4dayworkoutsmall.pdf?alt=media&token=e320f716-4c4c-4126-a144-09acc032da74">Descargar Ebook</a>.</p>
        
        <p>Además, te invitamos a seguir conectado con nosotros a través de nuestro boletín mensual, donde recibirás consejos actualizados, recetas saludables y novedades relacionadas con el mundo de la nutrición y el fitness.</p>
        
        <p>¡Esperamos que disfrutes de nuestro ebook y que te sea de gran utilidad en tu camino hacia una vida saludable!</p>
        
        <p>Saludos saludables,</p>
        <p>AI Fitness</p>
      </body>
      </html>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  });