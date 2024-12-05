import React from "react";
import "../styles.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Opções</h3>
      <ul className="options-list">
        {Array.from({ length: 12 }, (_, index) => (
          <li
            key={index}
            className={`option ${
              index === 9 ? "active" : index < 9 ? "completed" : ""
            }`}
          >
            <span>Opção {index + 1}</span>
            {index < 9 && <span className="checkmark">✔</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
}
