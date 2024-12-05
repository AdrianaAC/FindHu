import React from "react";
import "../styles.css";

export default function TopNavBar() {
  return (
    <div className="top-navbar">
      <div className="left-section">
        <div className="logo-placeholder">
          <img src="https://via.placeholder.com/25" alt="logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Avisos</a>
          <a href="#">Entidades</a>
          <a href="#">Candidaturas</a>
          <a href="#">Operações</a>
        </nav>
      </div>
      <div className="right-section">
        <i className="icon search-icon"></i>
        <i className="icon notifications-icon"></i>
        <i className="icon settings-icon"></i>
        <div className="user-profile">
          <span>Erik Frings</span>
          <small>Perfil 1 - Entidade 0</small>
        </div>
      </div>
    </div>
  );
}
