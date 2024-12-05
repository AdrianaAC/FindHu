import React from "react";
import "../styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <button className="save-button">Guardar Alterações</button>
      <button className="validate-button">Validar</button>
      <button className="publish-button" disabled>
        Publicar
      </button>
    </div>
  );
}
