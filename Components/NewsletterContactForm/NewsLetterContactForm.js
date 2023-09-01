import React, { useState } from "react";
import "firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";
import ElModal from "../Modal/ElModal";
import { animated, useInView } from "@react-spring/web";

const NewsLetterContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { addDocument, response } = useFirestore("newsletter");

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
      rootMargin: "-15% 0%",
    },
    {
      delay: 200
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new contact object
    const contact = {
      name,
      email,
    };

    // Add the contact object to Firestore
    addDocument(contact);

    // Reset the form fields
    setName("");
    setEmail("");

    //Show Modal
    setShowModal(true);
  };

  return (
    <animated.div ref={ref} style={springs}>
      <div className="text-center border border-left p-5 rounded-3 shadow-3">
        <h3 className="display-6">Obten ebooks gratis!</h3>
        <p className="text-muted lead">
          Llena el formulario para tener accesso inmediato.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mt-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Nombre"
            />
          </div>

          <button
            className="btn btn-dark btn-block mt-2 rounded-3"
            type="submit"
          >
            Enviar
          </button>
        </form>
        <p className="lead text-muted mt-3">
          Solo recibiras contenido de alta calidad.
        </p>
        {showModal && (
          <ElModal
            showModal={showModal}
            title="Gracias!"
            onClose={() => setShowModal(false)}
          >
            <div className="text-center">
              <h1 className="text-success display-1">
                <i className="bi bi-check2-circle"></i>
              </h1>
              <p className="lead pb-5">
                Checa tu email, descarga tu ebook GRATIS y comienza el camino a
                una vida saludable!
              </p>
              {/* <img
              className="img-thumbnail"
              src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
              alt="workout"
            /> */}
            </div>
          </ElModal>
        )}
      </div>
    </animated.div>
  );
};

export default NewsLetterContactForm;
