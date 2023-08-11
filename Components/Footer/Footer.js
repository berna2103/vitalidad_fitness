import React from "react";
import NewsLetterContactForm from "../NewsletterContactForm/NewsLetterContactForm";

export default function Footer() {
  return (
    <>
      <div className="container-fluid border-top">
        <div className="container bg-light rounded-3 mt-5 mb-5 p-5">
          <NewsLetterContactForm />
        </div>

        <footer className="py-3 my-4">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/coaching" className="nav-link px-2 text-muted">
                Coaching
              </a>
            </li>
            <li className="nav-item">
              <a href="/dietas" className="nav-link px-2 text-muted">
                Dietas
              </a>
            </li>
            <li className="nav-item">
              <a href="/workouts" className="nav-link px-2 text-muted">
                Workouts
              </a>
            </li>
            <li className="nav-item">
              <a href="/articulos" className="nav-link px-2 text-muted">
                Articulos
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/calculadoras/nutrientes"
                className="nav-link px-2 text-muted"
              >
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a href="/tienda" className="nav-link px-2 text-muted">
                Tienda
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-center pb-3 mb-3  list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">
            &copy; 2022 Vitalidad Fitness.
          </p>
          <p className="text-center">
            <a href="https://barciastech.com">Powered by Barcias Tech.</a>
          </p>
        </footer>
      </div>
    </>
  );
}
