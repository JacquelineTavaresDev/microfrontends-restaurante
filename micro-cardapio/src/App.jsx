import React from "react";
import CardPrato from "./components/CardPrato";
import { pratos } from "./data/pratos";

export default function App() {

  return (
    <div>

      <h2>Cardápio</h2>

      {pratos.map((prato) => (
        <CardPrato
          key={prato.id}
          prato={prato}
        />
      ))}

    </div>
  );
}
