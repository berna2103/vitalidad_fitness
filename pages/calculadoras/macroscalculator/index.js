import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./macros.module.css";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";
import ElModal from "../../../Components/Modal/ElModal";
import MacrosCard from "../../../Components/MacrosCard/MacrosCard";

const MacroCalculatorForm = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [proteinCals, setProteinCals] = useState("");
  const [carbsCals, setCarbsCals] = useState("");
  const [fatCals, setFatCals] = useState("");
  const [bmr, setBMR] = useState("");
  const [showModal, setShowModal] = useState(false);
  const functions = getFunctions();
  // connectFunctionsEmulator(functions, "127.0.0.1", 5001);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      weight: weight,
      height: height,
      age: age,
      gender,
      activityLevel,
      goal,
    };

    const calculateMacros = httpsCallable(functions, "calculateMacros");
    calculateMacros({ text: data })
      .then((result) => {
        const data = result.data;

        const { protein, proteinCals, carbCals, fatCals, carbs, fat, bmr } =
          data;

        setProtein(protein);
        setCarbs(carbs);
        setFat(fat);
        setProteinCals(proteinCals);
        setCarbsCals(carbCals);
        setFatCals(fatCals);
        setBMR(bmr);
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
      });
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
    setActivityLevel("");
    setGoal("");
    setShowModal(true);
  };

  return (
    <>
      <img
        className={`imagehero`}
        src="https://cdn.pixabay.com/photo/2016/04/17/12/10/grilled-chicken-1334632_1280.jpg"
        alt="macros"
      />
      <div className="container g-0">

        <div className="container  p-5">
          <h1 className="display-3">Que son los macro nutrientes?</h1>
          <p className="lead">
            Hay tres tipos de macronutrientes: carbohidratos, proteínas y
            grasas.
          </p>
          <p className="lead">
            <span className="fw-bold">Carbohidratos: </span>Los carbohidratos
            son como nuestra gasolina. Son como la energía rápida que nos da
            fuerzas para correr, saltar y jugar. Los encontramos en cosas
            deliciosas como el pan, la pasta, las papas y las frutas. ¡Son muy
            importantes para tener la energía necesaria para divertirnos y
            aprender!
          </p>
          <p className="lead">
            <span className="fw-bold">Proteinas: </span> Las proteínas son como
            los bloques de construcción para nuestro cuerpo. Ayudan a que
            nuestros músculos crezcan grandes y fuertes, como si fueran
            ladrillos para construir un fuerte castillo. Las proteínas están en
            alimentos como la carne, el pollo, el pescado y también en las
            legumbres como los frijoles y las lentejas.
          </p>
          <p className="lead">
            <span className="fw-bold">Grasas: </span>Las grasas son como
            nuestros superhéroes reservas. Nos ayudan a guardar energía extra
            para cuando la necesitemos. También son como nuestros amigos escudos
            que protegen nuestros órganos. Encontramos grasas en cosas como el
            aceite, la mantequilla y los aguacates.
          </p>
          <p className="lead">
            Es importante tener una dieta balanceada, un optimo consumo de cada
            macro nutriente te ayuda a mantener tu cuerpo saludable y a perder o
            ganar peso segun tus necesidades. Nuestra calculadora de macros te
            ayudara a encontrar el balance perfecto de macro nutrientes para tu
            cuerpo y metas especificas.
          </p>

          <p className="lead">
            <span className="fw-bold">BMR: </span>BMR significa "Basal Metabolic
            Rate", que en español se traduce como "Tasa Metabólica Basal". Se
            refiere a la cantidad mínima de energía que necesita el cuerpo para
            mantener sus funciones vitales en reposo, es decir, la cantidad de
            calorías que el cuerpo quema para mantener sus funciones básicas
            mientras está en un estado de completa tranquilidad. Las funciones
            vitales básicas que consumen energía en el cuerpo incluyen la
            respiración, la circulación sanguínea, la regulación de la
            temperatura corporal, la función cerebral y la renovación celular,
            entre otras. 
            </p>
            <p className="lead">
            El BMR es importante porque representa una gran parte
            del gasto calórico total de una persona. Calcular el BMR es útil
            para planificar dietas y programas de pérdida o ganancia de peso, ya
            que proporciona una estimación de la cantidad mínima de calorías que
            una persona debe consumir para mantener su peso actual. Factores
            como la edad, el sexo, el peso, la altura y el nivel de actividad
            física influyen en el BMR de cada individuo.
          </p>
        </div>
      </div>
      <div className="row my-auto bg-light g-0">
        <div className="col-lg-6 p-3 my-auto order-2">
          <h1 className="display-6 mt-3">Calcula tus macros </h1>
          <Form className="bg-light p-5 border-bottom" onSubmit={handleSubmit}>
            <Form.Group controlId="weight">
              <Form.Label>Peso (kg)</Form.Label>
              <Form.Control
                type="number"
                value={weight}
                placeholder="75"
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="height">
              <Form.Label>Altura (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                value={age}
                placeholder="29"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="Genero">
              <Form.Label>Genero</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                placeholder="Mujer/Hombre"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Genero</option>
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="activityLevel">
              <Form.Label>Nivel de actividad</Form.Label>
              <Form.Control
                as="select"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                required
              >
                <option value="">Selecciona tu nivel de actividad</option>
                <option value="sedentary">Sedentario (no ejercicio)</option>
                <option value="light">
                  Un poco activo(a) (light exercise/ejercisio 1-3 dias/semana)
                </option>
                <option value="moderate">
                  Moderadamente activo(a) (ejercicio moderado/ 3-5 dias/semana)
                </option>
                <option value="veryActive">
                  Muy activo(a) (ejercicio extremo/6-7 dias/semana)
                </option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="goal">
              <Form.Label>Meta</Form.Label>
              <Form.Control
                as="select"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              >
                <option value="">Cual es tu meta</option>
                <option value="loseWeight">Perder Peso</option>
                <option value="maintain">Mantenerte</option>
                <option value="gainWeight">Ganar Peso</option>
              </Form.Control>
            </Form.Group>

            <Button className="mt-3" variant="dark" type="submit">
              Calcular Macros
            </Button>
          </Form>

          {protein &&
            proteinCals &&
            carbs &&
            carbsCals &&
            fat &&
            fatCals &&
            bmr && (
              <div className="container card p-3 mt-3">
                <MacrosCard
                  protein={protein}
                  proteinCals={proteinCals}
                  carbs={carbs}
                  carbsCals={carbsCals}
                  fat={fat}
                  fatCals={fatCals}
                  bmr={bmr}
                />
              </div>
            )}
        </div>
        <div className="col-lg-6 order-1">
          <img
            className={`g-0 mb-5 img-fluid ${styles.imagecontainer}`}
            src="https://cdn.pixabay.com/photo/2016/04/19/17/07/eat-1339061_1280.jpg"
            alt="macros"
          />
        </div>
      </div>
      {showModal && (
        <ElModal
          showModal={showModal}
          title="Tus Macros!"
          onClose={() => setShowModal(false)}
        >
          {protein &&
            proteinCals &&
            carbs &&
            carbsCals &&
            fat &&
            fatCals &&
            bmr && (
              <MacrosCard
                protein={protein}
                proteinCals={proteinCals}
                carbs={carbs}
                carbsCals={carbsCals}
                fat={fat}
                fatCals={fatCals}
                bmr={bmr}
              />
            )}
        </ElModal>
      )}
    </>
  );
};

export default MacroCalculatorForm;
