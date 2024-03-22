import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notfound-page">
      <span className="big">404</span>
      <h1>
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <Link to={"/"}>Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default Notfound;