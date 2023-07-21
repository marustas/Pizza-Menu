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
      <ul className="pizzas">
        {
          // Example of list rendering: creating one component for each element of array
          //Instead of .map((item)=>{return(Component)}) do .map((item)=>(Component))
          pizzaData.map((pizza) => (
            //Pizza is child, therefore: name, ingredients, price and photoName are its props,
            // but since they're in an object, we pass this object as props and get props.pizzaObj
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))
        }
      </ul>
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours;
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen && (
        <p>We're open until {closeHour}:00. Come visit us or order online</p>
      )}
      .
    </footer>
  );
};

const Pizza = (props) => {
  const { name, ingredients, photoName, price } = props.pizzaObj;
  return (
    <li className="pizza">
      <img alt={name} src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
