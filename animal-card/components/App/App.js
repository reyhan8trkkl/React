import React from "react";
import AnimalCard from "../AnimalCard/AnimalCard";
import data from "./data";
import "./App.css";

export default function App() {
  function showAdditional(additional) {
    let x =
      additional !== undefined
        ? Object.entries(additional)
            .map((i) => `${i[0]}:${i[1]}`)
            .join("\n")
        : " asd ";
    alert(x);
  }

  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {
        data.map((animal) => (
          <AnimalCard
            additional={animal.additional}
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            showAdditional={showAdditional}
          />
        ))
      }
    </div>
  );
}
