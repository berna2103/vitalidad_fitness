import React from "react";

export default function Jumbotron({ title, message, link, buttonText}) {
  return (
    <>
        <div className="jumbotron bg-light p-4 mt-5 mb-5">
         {!title ? <h1 className="display-4">Disculpa!</h1> : <h1>{title}</h1> }
         {!message ? <h3 className="lead">Aun no hay articulos en esta categoria.</h3> : <h3>{message}</h3>}
          <hr></hr>
          <p className="mt2">
            <a href={link}>{buttonText}</a>
          </p>
        </div>
    </>
  );
}
