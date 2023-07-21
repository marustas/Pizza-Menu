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
//Menu is Parent

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {
        // Example of list rendering- creating one component for each element of array
        pizzaData.map((pizza) => {
          return (
            //Pizza is child, therefore: name, ingredients, price and photoName are its props
            <div className="pizza">
              <Pizza pizzaObj={pizza} key={pizza.name} />
            </div>
          );
        })
      }
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

const Pizza = (props) => {
  const { name, ingredients, photoName, price } = props.pizzaObj;
  return (
    <div>
      <img alt={name} src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
