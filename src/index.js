import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";
const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};

const Menu = () => {
  return (
    <div>
      <h2>Our menu</h2>
      {pizzaData.map((pizza, i) => {
        return (
          <Pizza
            key={i}
            name={pizzaData[i].name}
            ingredients={pizzaData[i].ingredients}
            price={pizzaData[i].price}
            photoName={pizzaData[i].photoName}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
};

const Pizza = ({ name, ingredients, price, photoName }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{price}</p>
      <img alt="Pizza" src={photoName} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
