import Head from "next/head";
import Hero from "../Components/Hero/Hero";
import NewsLetterContactForm from "../Components/NewsletterContactForm/NewsLetterContactForm";
import HomeCoachingBanner from "../Components/HomeCoachingBanner/HomeCoachingBanner";
import Programs from "./workouts";
import { animated, useInView } from "@react-spring/web";

export default function Index() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
        background: "white",
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );

  return (
    <div>
      <Head>
        <title>Vitalidad Fitness</title>
        <meta name="description" content="Vitalidad Fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12 my-auto">
              <animated.div ref={ref} style={springs}>
                <h1 className="display-6">Newsletter Semanal!</h1>
                <p className="lead text-muted mt-2">
                  Aprende a calcular tus macros para perder grasa, construir
                  musculo y hacerte mas fuerte!{" "}
                </p>
                <p className="lead mt-2">
                  <i className="bi bi-patch-check-fill"></i> Recibe contenido
                  exclusivo solo para subscriptores.
                </p>
                <p className="lead">
                  <i className="bi bi-patch-check-fill"></i> Obten manual de
                  dieta flexible (ebook) gratis!
                </p>
                <p className="lead">
                  <i className="bi bi-patch-check-fill"></i> Recibe una rutina
                  de ejercicio gratis (ebook)!
                </p>
                <p className="lead">
                  <i className="bi bi-patch-check-fill"></i> Programas de
                  entrenamientos y articulos de fitness.
                </p>
              </animated.div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <NewsLetterContactForm />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="bg-light pt-4 pb-4">
            <Programs />
          </div>
          <div>
            <HomeCoachingBanner />
          </div>
        </div>
        {/* <div className='container mt-4'>
          <Blog title='Articulos recientes' description=' ' />
        </div> */}
      </main>
    </div>
  );
}
