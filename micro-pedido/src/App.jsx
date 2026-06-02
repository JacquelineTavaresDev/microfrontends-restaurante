import React from "react";
import { useState, useEffect } from "react";

export default function App() {

  const [itens, setItens] = useState([]);

  useEffect(() => {

    function handler(event) {

      setItens(prev => [
        ...prev,
        event.detail
      ]);

    }

    window.addEventListener(
      "add-item",
      handler
    );

    return () => {
      window.removeEventListener(
        "add-item",
        handler
      );
    };

  }, []);

  return (
    <div>

      <h2>Pedido</h2>

      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.nome}
          </li>
        ))}
      </ul>

    </div>
  );
}
