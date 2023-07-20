import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.map((pizza, i) => {
        return (
          <Pizza
            name={pizzaData[i].name}
            ingredients={pizzaData[i].ingredients}
            price={pizzaData[i].price}
            photoName={pizzaData[i].photoName}
          />
        );
      })}
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
};

const Pizza = ({ name, ingredients, price, photoName }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{price}</p>
      <img alt={name} src={photoName} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
