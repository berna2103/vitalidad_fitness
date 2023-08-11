import Head from 'next/head'

import Hero from '../Components/Hero/Hero';
import NewsLetterContactForm from '../Components/NewsletterContactForm/NewsLetterContactForm';
import HomeCoachingBanner from '../Components/HomeCoachingBanner/HomeCoachingBanner';


export default function Index() {
  return (
    <div>
      <Head>
        <title>Vitalidad Fitness</title>
        <meta name="description" content="Vitalidad Fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Hero />
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 my-auto'>
              <h1 className='display-6'>Obten Informacion Gratuita!</h1>
              <p className='lead text-muted mt-2'>Aprende a calcular tus macros para perder grasa, construir musculo y hacerte mas fuerte! </p>
              <p className='lead mt-2'><i className="bi bi-patch-check-fill"></i>Recibe contenido exclusivo solo para subscriptores.</p>
              <p className='lead'><i className="bi bi-patch-check-fill"></i>Obten manual de dieta flexible (ebook) gratis!</p>
              <p className='lead'><i className="bi bi-patch-check-fill"></i>Recibe una rutina de ejercicio gratis (ebook)!</p>
              <p className='lead'><i className="bi bi-patch-check-fill"></i>Programas de entrenamientos y articulos de fitness.</p>
            </div>
            <div className='col-lg-6 col-sm-12 border border-left p-5 rounded-3 shadow-3'>
              <NewsLetterContactForm />
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <HomeCoachingBanner />
        </div>
      </main>
    </div>
  )
}
