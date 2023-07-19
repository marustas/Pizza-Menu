import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
const { name, ingredients, price, photoName } = pizzaData[0];
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza
        name={name}
        ingredients={ingredients}
        price={price}
        photoName={photoName}
      />
    </div>
  );
};

const Footer = () => {
  return <footer>{new Date().toLocaleTimeString()}We're currently open</footer>;
};

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
