import React from "react";
import "../styles.css";

export default function Pagination() {
  return (
    <div className="pagination">
      <span>1 de 2 páginas (23 itens)</span>
      <div className="page-controls">
        <button>{"<<"}</button>
        <button>{"<"}</button>
        <button>{">"}</button>
        <button>{">>"}</button>
      </div>
    </div>
  );
}
