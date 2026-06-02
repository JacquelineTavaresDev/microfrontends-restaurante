import React from "react";

export default function CardPrato({ prato }) {

  function adicionar() {

    window.dispatchEvent(
      new CustomEvent("add-item", {
        detail: prato
      })
    );

  }

  return (
    <div>
      <h3>{prato.nome}</h3>

      <p>{prato.descricao}</p>

      <button onClick={adicionar}>
        Adicionar ao pedido
      </button>
    </div>
  );
}
