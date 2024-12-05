import React, { useState } from "react";
import "../../styles.css";
import Footer from "../Footer";
import Pagination from "../Pagination";

export default function TaxTable() {
  const [taxas, setTaxas] = useState([
    { id: 1, nutsII: "Norte", nutsIII: "Ave", concelho: "Fafe", taxa: "25%" },
    {
      id: 2,
      nutsII: "Norte",
      nutsIII: "Área Metropolitana do Porto",
      concelho: "Matosinhos",
      taxa: "75%",
    },
  ]);

  const handleDelete = (id) => {
    setTaxas(taxas.filter((taxa) => taxa.id !== id));
  };

  const handleAddTaxa = () => {
    setTaxas([
      ...taxas,
      { id: Date.now(), nutsII: "", nutsIII: "", concelho: "", taxa: "" },
    ]);
  };

  return (
    <div className="form-group content">
      <label>Taxa *</label>
      <div className="toggle-group">
        <label className="toggle-label">
          Adicionar taxa por localização
          <input type="checkbox" className="toggle-switch" />
        </label>
        <button className="add-taxa-button" onClick={handleAddTaxa}>
          + Adicionar Taxa
        </button>
      </div>

      <table className="taxa-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>NUTS II</th>
            <th>NUTS III</th>
            <th>Concelho</th>
            <th>Taxa (%)</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {taxas.map((taxa) => (
            <tr key={taxa.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{taxa.nutsII}</td>
              <td>{taxa.nutsIII}</td>
              <td>{taxa.concelho}</td>
              <td>{taxa.taxa}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(taxa.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
