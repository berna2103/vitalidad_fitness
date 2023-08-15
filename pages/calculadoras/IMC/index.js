// src/App.js
import React from "react";
import BMIForm from "../../../Components/BMIForm/BMIForm";
import Image from "next/image";

function BMI() {
  return (
    <div className="container-fluid g-0">
      <Image
        className="imagehero"
        src="https://cdn.pixabay.com/photo/2017/09/08/10/27/slimming-2728332_1280.jpg"
        alt="BMI"
        priority={true}
        width={100}
        height={100}
      />
      <div className="container g-5">
      <h1 className="mt-5">Calcula tu indice de masa corporal (IMC)</h1>
      <BMIForm />
   
        <h1>Comprendiendo el IMC y Manteniendo un Rango Saludable</h1>

        <p>
          El Índice de Masa Corporal (IMC) es una medida comúnmente utilizada
          para evaluar si el peso de una persona se encuentra dentro de un rango
          saludable en relación con su altura. Proporciona una manera rápida y
          sencilla de categorizar el estado de peso y los posibles riesgos para
          la salud asociados con estar bajo peso, peso normal, sobrepeso u
          obesidad.
        </p>

        <p>
          El IMC se calcula dividiendo el peso de una persona en kilogramos
          entre el cuadrado de su altura en metros. El valor resultante se
          categoriza de acuerdo a rangos establecidos:
        </p>

        <ul>
          <li>Bajo peso: IMC menor a 18.5</li>
          <li>Peso normal: IMC 18.5 a 24.9</li>
          <li>Sobrepeso: IMC 25 a 29.9</li>
          <li>Obesidad: IMC 30 o más alto</li>
        </ul>

        <p>
          Aunque el IMC es una herramienta útil para evaluaciones iniciales, es
          importante tener en cuenta que no mide directamente el porcentaje de
          grasa corporal ni considera factores como la masa muscular, la
          densidad ósea y la distribución de grasa. Por lo tanto, una persona
          con mayor masa muscular podría tener un IMC más alto sin estar
          excediendo en términos de grasa corporal.
        </p>

        <p>
          Mantener un IMC saludable es esencial para el bienestar general. Aquí
          hay algunos pasos que puedes seguir para mantenerse dentro del rango
          de peso normal:
        </p>

        <ol>
          <li>
            <strong>Llevar una Dieta Equilibrada:</strong> Consume una variedad
            de alimentos ricos en nutrientes, incluyendo frutas, verduras,
            proteínas magras, granos enteros y grasas saludables. Evita el
            consumo excesivo de snacks azucarados y alimentos altamente
            procesados.
          </li>
          <li>
            <strong>Mantenerse Activo:</strong> Participa en actividad física
            regular, como caminar, correr, nadar o andar en bicicleta. Apunta a
            al menos 150 minutos de ejercicio de intensidad moderada o 75
            minutos de ejercicio vigoroso por semana.
          </li>
          <li>
            <strong>Controlar el Tamaño de las Porciones:</strong> Presta
            atención al tamaño de las porciones para evitar comer en exceso.
            Observa las señales de hambre y saciedad, y evita comer frente a
            pantallas, lo cual puede llevar a comer de forma distraída.
          </li>
          <li>
            <strong>Mantenerse Hidratado:</strong> Bebe suficiente agua a lo
            largo del día. A veces la sed puede confundirse con el hambre.
          </li>
          <li>
            <strong>Dormir Suficiente:</strong> Apunta a 7-9 horas de sueño de
            calidad cada noche. Un sueño deficiente puede alterar las hormonas
            relacionadas con el hambre y el apetito.
          </li>
          <li>
            <strong>Manejar el Estrés:</strong> Practica técnicas de reducción
            de estrés como la meditación, la respiración profunda, el yoga o
            pasar tiempo en la naturaleza. Niveles altos de estrés pueden llevar
            a hábitos alimentarios poco saludables.
          </li>
        </ol>

        <p>
          Recuerda que cada individuo es único y factores como la genética, el
          metabolismo y las condiciones médicas pueden influir en el peso. Es
          importante enfocarse en la salud y el bienestar en general en lugar de
          centrarse únicamente en un número. Si tienes preocupaciones sobre tu
          peso o salud, considera consultar a un profesional de la salud o a un
          dietista registrado para obtener orientación personalizada.
        </p>

        <p>
          Mantener un IMC saludable es solo un aspecto de un enfoque holístico
          hacia el bienestar. Al adoptar hábitos alimentarios saludables,
          mantenerse activo y cuidar tu salud en general, puedes trabajar para
          lograr un estilo de vida equilibrado y gratificante.
        </p>
        <div>
      </div>
      </div>
    </div>
  );
}

export default BMI;
