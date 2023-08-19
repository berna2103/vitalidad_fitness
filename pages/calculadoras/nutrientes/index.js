import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  getFunctions,
  httpsCallable,
} from "firebase/functions";
import styles from "./nutrientes.module.css";
import IngredientTable from "../../../Components/IngredientTable/IngredientTable";

export default function NutrientesCalculator() {
  const functions = getFunctions();
  // connectFunctionsEmulator(functions, "127.0.0.1", 5001)

  const calculateNutrients = httpsCallable(functions, "generateInfo");
  const [nutritionFacts, setNutritionFacts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    calculateNutrients({ items: data })
      .then((result) => {
        const data = result.data;
        const arrayOfObjects = JSON.parse(data);
        setNutritionFacts(arrayOfObjects);
        setLoading(false);
        setData("");
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
        console.log(error)
      });
  };
  return (
    <div className="container mb-5">
      <h1 className="display-3 mt-5">Calculadora de nutrientes.</h1>
      <div className="bg-light shadow-lg">
        <img
          className={`g-0 mb-3 img-fluid shadow-sm ${styles.imagehero}`}
          src="https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="scale"
        />
        <div className="px-5">
          <p className="lead">
            {" "}
            Ingresa los ingredientes y cantidades de tu receta favorita, y en
            cuestión de segundos, obtendrás un análisis detallado de los
            nutrientes presentes en tu plato. Descubre las calorías, proteínas,
            grasas, carbohidratos, que aporta cada ingrediente, así como la
            información nutricional total de tu deliciosa creación culinaria.
            ¡Comienza a cocinar de manera saludable y equilibrada con nuestro
            práctico y preciso calculador de nutrientes!
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="data">
              {/* <Form.Label>Comida</Form.Label> */}
              <Form.Control
                as="textarea"
                type="text"
                placeholder="1 cup of milk, 1 oz butter, 1 oz chorizo"
                value={data}
                rows={10}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </Form.Group>
            {loading ? (
              <>
                <Button className="btn-dark mt-3 btn-block mb-5" type="submit">
                  Cargando . . .{" "}
                  <span>
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </span>
                </Button>
              </>
            ) : (
              <>
                <Button className="btn-dark mt-3 btn-block mb-5" type="submit">
                  Calcula nutrientes
                </Button>
              </>
            )}
          </Form>
        </div>

        <div className="container pb-5">
          {!nutritionFacts ? (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="card p-3">
              <h1 className="display-6">Informacion Nutricional</h1>
              <IngredientTable ingredients={nutritionFacts} />
              {/* <p className="lead">{nutritionFacts}</p> */}
              <hr></hr>
              <p>Crea una cuenta para comenzar tu vida saludable.</p>
              <button className="btn btn-dark">Sign up</button>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
