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
    <div className="prato-card">
      <h3 className="prato-nome">{prato.nome}</h3>

      <p className="prato-descricao">
        {prato.descricao}
      </p>

      <button className="btn-adicionar" onClick={adicionar}>
        Adicionar ao pedido
      </button>
    </div>
  );
}
