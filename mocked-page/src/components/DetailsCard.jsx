import React from "react";
import TaxDropDown from "./detailedComponents/TaxDropDown";
import CardHeader from "./detailedComponents/CardHeader";
import CountRadio from "./detailedComponents/CountRadio";
import TaxTable from "./detailedComponents/TaxTable";

export default function DetailsCard() {
  return (
    <div>
      <CardHeader />

      {/* Tipo de Taxa */}
      <TaxDropDown />

      {/* Contar */}
      <CountRadio />

      {/* Taxa */}
      <TaxTable />
    </div>
  );
}
