import React from "react";
import "../styles.css";
import Footer from "./Footer";

export default function Header() {
  return (
    <div className="page-header">
      <p>AVISOS</p>
      <h1>NOVO AVISO</h1>
      <span className="status">EM PREENCHIMENTO</span>
      <Footer />
    </div>
  );
}
