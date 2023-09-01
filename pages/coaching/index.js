import React from "react";
import styles from "./coaching.module.css";
import Image from "next/image";
import data from "../../Components/CoachingCard/coachingdata.json";
import CoachingCard from "../../Components/CoachingCard/CoachingCard";

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
          alt="coaching"
        />

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
              <div className="container mt-5 mb-3">
                {data.map((item, index) => (
                  <CoachingCard
                    index={index + 1}
                    title={item.title}
                    description={item.description}
                    imgUrl={item.imgUrl}
                  />
                ))}
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
