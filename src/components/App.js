

import './../styles/App.css';

import React, { useState } from "react";


export default function App() {
  const [bill, setBill] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [people, setPeople] = useState(1);

  const tipPerPerson = ((bill * (tipPercent / 100)) / people).toFixed(2);

  return (
    <div id="container">
      <h1>Tip Calculator</h1>

      <label htmlFor="billAmt">Bill:</label>
      <input
        id="billAmt"
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <br />

      <label htmlFor="serviceQual">Tip Percentage:</label>
      <input
        id="serviceQual"
        type="number"
        value={tipPercent}
        onChange={(e) => setTipPercent(Number(e.target.value))}
      />

      <br />

      <label htmlFor="peopleAmt">Number of People:</label>
      <input
        id="peopleAmt"
        type="number"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />

      <p id="tipPerPerson">Tip Per Person: ${tipPerPerson}</p>
    </div>
  );
}
