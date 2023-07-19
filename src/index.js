import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
const { name, ingredients, price, photoName } = pizzaData[0];
function App() {
  return (
    <div>
      <h1>Hello, React</h1>
      <Pizza
        name={name}
        ingredients={ingredients}
        price={price}
        photoName={photoName}
      />
    </div>
  );
}

const Header = () => {};

const Menu = () => {};

const Footer = () => {};

function Pizza({ name, ingredients, price, photoName }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{price}</p>
      <img alt="Pizza" src={photoName} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
