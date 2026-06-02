import React, { lazy, Suspense } from "react";
import "./styles.css";

const Cardapio = lazy(() =>
  import("cardapio/Cardapio")
);

const Pedido = lazy(() =>
  import("pedido/Pedido")
);

export default function App() {
  return (
    <div className="app">
      <h1 className="titulo">🍽️ Sistema de Pedidos</h1>

      <Suspense fallback={<h2>Carregando Micro Frontends...</h2>}>
        <div className="container-micros">
          <div className="card">
            <Cardapio />
          </div>

          <div className="card">
            <Pedido />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
