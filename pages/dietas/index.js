import React, { useState } from "react";
import styles from "./freebies.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function Dietas() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { addDocument, response } = useFirestore("newsletter");

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
  };
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-md-6 my-auto mx-auto p-5">
            <h1 className="display-6">¡Descarga tu ebook gratuito!</h1>
            <p className="lead text-muted mt-4 mb-4">
              En nuestro ebook "Nutrición y Fitness para una vida saludable",
              encontrarás una guía completa que cubre diversos temas
              relacionados con la nutrición y el fitness, diseñada para
              brindarte los conocimientos necesarios para tomar decisiones
              informadas sobre tu alimentación y lograr un estilo de vida
              activo.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  type="text"
                  className="form-control mt-2"
                  id="name"
                  placeholder="Nombre"
                />
              </div>
              <button type="submit" className="btn btn-dark btn-block mt-4">
                Mandame un ebook!
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1592588253414-887759037c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              className={`g-0 img-fluid ${styles.imagecontainer}`}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
