import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
          <meta name="description" content="Descubre un camino hacia una vida más saludable con Vitalidad Fitness. Nuestra página te ofrece consejos expertos sobre dietas y entrenamientos, diseñados para ayudarte a alcanzar tus objetivos de bienestar. Sumérgete en un mundo de información en español, donde encontrarás orientación confiable para mejorar tu salud y transformar tu estilo de vida. Únete a nuestra comunidad dedicada a impulsar tu vitalidad y lograr un equilibrio perdurable en tu viaje hacia el fitness." />
          <meta name="keywords" content="fitness, blog, dietas, workouts, salud, vitalidad, ejercicios" />
          <meta name="author" content="Vitalidad Fitness" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://vitalidadfitness.com/" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        {/* Firebase UI Authentication */}
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />

        {/* {* Bootstrap Icons *} */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        ></link>
        {/* {* Google Fonts *} */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet"></link>

        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,900;1,100;1,200;1,900&display=swap" rel="stylesheet"></link>
        <Script 
          async 
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
          strategy="lazyOnload"
          crossOrigin="anonymous">
        </Script>
        
        {/* Font Awesome */}
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        <script
          src="https://kit.fontawesome.com/e20sdfsd9.js"
          crossOrigin="anonymous"
        ></script> */}
      </Head>
      <body>
        <Main />

    
        <NextScript />
      </body>
    </Html>
  );
}
