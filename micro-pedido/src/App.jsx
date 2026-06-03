import React, { useState, useEffect } from "react";

export default function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function handler(event) {
      setItens((prev) => [...prev, event.detail]);
    }

    window.addEventListener("add-item", handler);

    return () => {
      window.removeEventListener("add-item", handler);
    };
  }, []);

  return (
    <div>
      <h2>Pedido</h2>

      {itens.length === 0 ? (
        <p className="pedido-vazio">
          Nenhum item adicionado ao pedido
        </p>
      ) : (
        <ul className="lista-pedido">
          {itens.map((item, index) => (
            <li key={index} className="item-pedido">
              <strong>{item.nome}</strong>
              <p>{item.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
