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
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {
        /*
        Short circuiting: The result of operation will be the condition value if False,
        if condition is True/False, React will not render it
        Short circuiting example: ConditionVariable > 0 && (Component)
        */
        pizzaNum > 0 ? (
          /*
          Using <> creates a React Fragment
          /React Fragment allows to return several childern Components,
           without messing their logic and styling 
           */
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicicous.
            </p>
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
          </>
        ) : (
          <p>We're still working on our menu. Please come back later.</p>
        )
      }
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {
        //condition is false renders nothing, if true renders the JSX after the &&
        isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welome you between {openHour}:00 and {closeHour}:00.
          </p>
        )
      }
    </footer>
  );
};

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 till {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const Pizza = (props) => {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img alt={name} src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
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
