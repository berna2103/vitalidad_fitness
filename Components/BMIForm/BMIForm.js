// src/BMIForm.js
import React, { useState } from "react";
import "firebase/functions";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BMIForm = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [categoria, setCategoria] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const functions = getFunctions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      weight: weight,
      height: height,
    };

    const calculateMacros = httpsCallable(functions, "calculateBMI");
    calculateMacros({ text: data })
      .then((result) => {
        setLoading(true)
        const response = result.data;

        const { BMI, Category, Message } = response;

        setBMI(BMI);
        setCategoria(Category);
        setMessage(Message);
        setLoading(false)
      }).catch((error) => {
        const code = error.code;
        // const message = error.message;
        const details = error.details;
      });

    // setShowModal(true);
  };

  return (
    <div className="container bg-light text-center p-3 mt-5 mb-5">
      <form className="form" onSubmit={handleSubmit}>
        <div className="from-group">
          <label for="validationServer01">
            Peso (kg):
            <input
              required
              placeholder="75"
              id="validationServer01"
              className="form-control"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div className="from-group">
          <label>
            Altura (m):
            <input
              required
              placeholder="1.7"
              className="form-control"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <br />
        </div>

        <br />

        <button className="btn btn-dark" type="submit">
          Calcula IMC
        </button>
      </form>
      <div className="card mt-5 p-3">
        <h3>Resultados</h3>
        <hr></hr>
        <p>
          <span className="fw-bold">IMC:</span> {bmi}%
        </p>
        <p>{message}</p>
        {loading  ? <LoadingSpinner/> : <></>}

        <p className="fw-bold">{categoria}</p>
      </div>
    </div>
  );
};

export default BMIForm;
