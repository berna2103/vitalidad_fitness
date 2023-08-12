import React from "react";
import styles from "./coaching.module.css";
import Image from "next/image"

export default function Coaching() {
  return (
    <>
      <div>
        <Image 
          className={`imagehero`}  
          priority={true}
          width={100}
          height={100}
          src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg"
          alt="coaching" />
        <div className="container mb-5">
          <h1 className="display-3 mt-4 mb-4">
            Servicios de Coaching Personalizado
          </h1>
          <p className="lead mt-4">
            ¡Bienvenido(a) a nuestro servicio de coaching personalizado! En
            nuestra aplicación, nos enfocamos en brindarte un plan de ejercicio
            y nutrición adaptado a tus necesidades individuales. Nuestro
            objetivo es ayudarte a alcanzar tus metas fitness de manera efectiva
            y segura, proporcionándote un enfoque personalizado y respaldado por
            expertos.
          </p>
          <div className="container text-center mt-4">
            <a href="/" className="btn btn-lg btn-dark ">
              Registrate hoy mismo!
            </a>
          </div>
        </div>
        <div className="container-fluid bg-dark">
          <div className="container text-light pt-5">
            <h2 className="display-3">¿Qué ofrecemos?</h2>
            <p className="lead">
              En nuestra aplicación de coaching personalizado, ofrecemos una
              variedad de servicios para ayudarte a lograr tus objetivos de
              salud y estado físico.
            </p>
          </div>
          <div className="container">
            <div className="row g-3">
              <div></div>
              <div className="container mt-5 mb-3">
                <div className="row bg-light shadow-lg mb-3">
                  <div className="col-lg-5 col-md-6 p-0 m-0">
                    <img
                      className={`${styles.imageContainer}`}
                      src="https://cdn.pixabay.com/photo/2020/01/29/04/48/food-4801581_1280.jpg"
                      alt="tacos"
                    />
                  </div>
                  <div className="col-lg-7 col-md-6 p-5 my-auto">
                    <h1 className="display-5 text-black">Plan de nutrición</h1>
                    <p className="lead mt-5">
                      Junto con el plan de ejercicio, recibirás un plan de
                      nutrición adaptado a tus necesidades individuales.
                      Nuestros nutricionistas te brindarán recomendaciones sobre
                      tu ingesta calórica diaria, macronutrientes adecuados
                      (proteínas, carbohidratos y grasas), así como consejos
                      sobre elecciones alimentarias saludables y recetas
                      deliciosas. Nos aseguraremos de que recibas la nutrición
                      adecuada para alcanzar tus metas y mejorar tu bienestar
                      general.
                    </p>
                  </div>
                </div>
              </div>{" "}
              :
              <div className="container mt-2 mb-2">
                <div className="row bg-light shadow-lg mb-3">
                  <div className="col-lg-7 col-md-6 p-5 my-auto order-lg-first order-md-first order-sm-last order-2">
                    <h1 className="display-5 text-dark">
                      Evaluación y análisis
                    </h1>
                    <p className="lead mt-5">
                      Comenzamos por recopilar información clave sobre ti, como
                      tu edad, peso, altura y metas fitness. Utilizando estos
                      datos, nuestros expertos realizarán una evaluación
                      detallada para comprender tus necesidades y limitaciones
                      individuales. Basándonos en esta evaluación, diseñaremos
                      un plan personalizado que se adapte a tu estilo de vida y
                      te ayude a alcanzar tus metas de forma segura y efectiva.
                    </p>
                  </div>
                  <div className="col-lg-5 col-md-6 p-0 m-0 order-lg-last order-md-last order-sm-first order-1">
                    <img
                      className={`${styles.imageContainer}`}
                      src="https://cdn.pixabay.com/photo/2016/03/18/13/52/form-1264999_1280.jpg"
                      alt="fitness"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className="container mt-5 mb-3">
              <div className="row bg-light shadow-lg mb-3">
                <div className="col-lg-5 col-md-6 p-0 m-0">
                  <img
                    className={`${styles.imageContainer}`}
                    src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
                    alt="tacos"
                  />
                </div>
                <div className="col-lg-7 col-md-6 p-5 my-auto">
                  <h1 className="display-5 text-black">Plan de ejercicio</h1>
                  <p className="lead mt-5">
                    Nuestro equipo de entrenadores diseñará un programa de
                    ejercicio personalizado teniendo en cuenta tus preferencias,
                    nivel de condición física y metas específicas. Ya sea que
                    prefieras entrenamientos en casa o en el gimnasio, te
                    proporcionaremos una rutina detallada que incluirá
                    ejercicios específicos, repeticiones, series y
                    recomendaciones de descanso. Además, te ayudaremos a
                    encontrar YouTube videos y tutoriales para asegurarnos de
                    que realices los ejercicios correctamente y evites lesiones.
                  </p>
                </div>
              </div>
            </div>{" "}
            :
            <div className="container mt-2 mb-2">
              <div className="row bg-light shadow-lg mb-3">
                <div className="col-lg-7 col-md-6 p-5 my-auto order-lg-first order-md-first order-sm-last order-2">
                  <h1 className="display-5 text-dark">
                    Seguimiento y apoyo continuo
                  </h1>
                  <p className="lead mt-5">
                    Nos comprometemos a brindarte un seguimiento constante y
                    apoyo durante tu viaje fitness. Nuestro equipo estará
                    disponible para responder a tus preguntas, proporcionarte
                    orientación adicional y ajustar tus planes según sea
                    necesario. Realizaremos un seguimiento semanal de tus
                    progresos y te motivaremos para que sigas adelante en tu
                    camino hacia una vida más saludable y en forma.
                  </p>
                </div>
                <div className="col-lg-5 col-md-6 p-0 m-0 order-lg-last order-md-last order-sm-first order-1">
                  <img
                    className={`${styles.imageContainer}`}
                    src="https://cdn.pixabay.com/photo/2017/04/25/20/18/woman-2260736_1280.jpg"
                    alt="fitness"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container text-light pb-5 mt-5">
            <h2 className="display-6">¡Comienza tu viaje fitness hoy mismo!</h2>
            <p className="lead">
              Si estás listo para dar el primer paso hacia una vida más
              saludable y alcanzar tus metas fitness, no esperes más. Únete a
              nuestra aplicación de coaching personalizado y comienza tu viaje
              hacia un mejor bienestar. ¡Estamos aquí para apoyarte en cada paso
              del camino!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
