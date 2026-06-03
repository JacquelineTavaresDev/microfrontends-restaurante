import React from "react";
import CardPrato from "./components/CardPrato";
import { pratos } from "./data/pratos";

export default function App() {
  return (
    <div className="cardapio">
      <h2 className="titulo-cardapio">Cardápio</h2>

      <div className="lista-pratos">
        {pratos.map((prato) => (
          <CardPrato key={prato.id} prato={prato} />
        ))}
      </div>
    </div>
  );
}
