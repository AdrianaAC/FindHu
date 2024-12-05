import React from "react";
import "../../styles.css";

export default function CountRadio() {
  return (
    <div className="form-group content">
      <label>Contar *</label>
      <div className="radio-group">
        <label>
          <input type="radio" name="contar" value="Sim" defaultChecked /> Sim
        </label>
        <label>
          <input type="radio" name="contar" value="Não" /> Não
        </label>
      </div>
    </div>
  );
}
