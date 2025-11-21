import React from 'react';
import { useState } from "react";
import thumpsup from '/src/assets/thumbsup.svg';
import thumpsdown from '/src/assets/thumbsdown.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showthumpsup, setShowthumpsup] = useState(false);
  const [showthumpdown, setShowthumpdown] = useState(false);

  const thumpsupclick = () => {
    setCount(count + 1);
    setShowthumpsup(true);
    setTimeout(() => {
      setShowthumpsup(false);
    }, 1000);
  };

  const thumpdownclick = () => {
    setCount(count - 1);
    setShowthumpdown(true); 
    setTimeout(() => {
      setShowthumpdown(false); 
    }, 1000);
  };

  return (
    <>
      <h1>Increment: {count}</h1>

      {/* Increase Button Wrapper */}
      <div className="btn-wrapper">
        <button type="button" id="increaseBtn" onClick={thumpsupclick}>
          Increase count
        </button>

        {showthumpsup && (
          <img src={thumpsup} id="thumpsupimg" alt="thumps up" />
        )}
      </div>

      {/* Decrease Button Wrapper */}
      <div className="btn-wrapper">
        <button type="button" id="decreaseBtn" onClick={thumpdownclick}>
          Decrease count
        </button>

        {showthumpdown && (
          <img src={thumpsdown} id="thumpsdownimg" alt="thumps down" />
        )}
      </div>
    </>
  );
}

export default App;
