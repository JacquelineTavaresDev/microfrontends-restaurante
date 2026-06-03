# Micro Frontends - Sistema de Pedidos

## Descrição

Este projeto demonstra a implementação da arquitetura de Micro Frontends utilizando React e Webpack Module Federation.

A aplicação foi dividida em três partes independentes:

* **Container App**: aplicação principal responsável por integrar os micro frontends.
* **Micro Cardápio**: exibe a lista de pratos disponíveis.
* **Micro Pedido**: exibe os itens adicionados ao pedido.

O objetivo é simular um ambiente de desenvolvimento distribuído, onde cada micro frontend pode ser desenvolvido e executado de forma independente.

---

## Tecnologias Utilizadas

* React
* Webpack 5
* Module Federation
* JavaScript
* Babel

---

## Estrutura do Projeto

microfrontends-restaurante/
│
├── container/
├── micro-cardapio/
└── micro-pedido/

---

## Como Executar o Projeto

Antes de iniciar, instale as dependências em cada aplicação:

### Micro Cardápio

cd micro-cardapio  
npm install  

### Micro Pedido

cd micro-pedido  
npm install  

### Container

cd container  
npm install  

---

## Como Rodar Cada Aplicação

### 1. Iniciar o Micro Cardápio

cd micro-cardapio  
npm start  

Aplicação disponível em:
http://localhost:3001  

---

### 2. Iniciar o Micro Pedido

cd micro-pedido  
npm start  

Aplicação disponível em:
http://localhost:3002  

---

### 3. Iniciar o Container

cd container  
npm start  

Aplicação disponível em:
http://localhost:3000  

---

## Como Funciona a Comunicação Entre os Micros

A comunicação entre os micro frontends é realizada utilizando eventos globais do navegador.

Quando o usuário clica no botão "Adicionar ao pedido" no Micro Cardápio, é disparado um evento customizado utilizando:

window.dispatchEvent()

O Micro Pedido fica escutando esse evento através de:

window.addEventListener()

Ao receber o evento, o Micro Pedido atualiza sua lista de itens automaticamente.

### Fluxo da Comunicação

1. O usuário seleciona um prato no Micro Cardápio.
2. O Cardápio dispara um evento global contendo os dados do prato.
3. O Micro Pedido captura o evento.
4. O item é adicionado à lista de pedidos exibida na tela.

Essa abordagem permite que os micros permaneçam independentes, reduzindo o acoplamento entre as aplicações.

---

## Module Federation

O Container utiliza o Webpack Module Federation para importar os micros dinamicamente em tempo de execução.

### Remotes

* cardapio
* pedido

### Exposed Modules

Micro Cardápio:

"./Cardapio"

Micro Pedido:

"./Pedido"

Dessa forma, cada micro frontend pode ser desenvolvido e implantado de forma independente, mantendo a integração através do Container.

---

## Funcionalidades

* Listagem de pratos
* Adição de itens ao pedido
* Atualização dinâmica do pedido
* Integração entre micros utilizando eventos globais
* Carregamento remoto com Module Federation

---

## Autor

Francisca Jacqueline Ribeiro Tavares
