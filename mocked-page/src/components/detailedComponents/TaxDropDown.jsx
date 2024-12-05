import React from "react";
import "../../styles.css";

export default function TaxDropDown() {
  return (
    <div className="form-group content">
      <label htmlFor="tipo-de-taxa">Tipo de taxa</label>
      <br />
      <p>Adicionar o tipo de taxa</p>
      <select id="tipo-de-taxa" className="dropdown">
        <option>Selecionar</option>
        {/* Add options as necessary */}
      </select>
    </div>
  );
}
