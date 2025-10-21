

import './../styles/App.css';

import React, { useState } from "react";


const App = () => {
  const [bill, setBill] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = bill * (tipPercent / 100);
  const tipPerPerson = (totalTip / people).toFixed(2);

  return (
    <div id="container">
      <h2>Tip Calculator</h2>

      <div>
        <label htmlFor="billamt">Bill:</label>
        <input
          id="billamt"
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="tipamt">Tip Percentage:</label>
        <input
          id="tipamt"
          type="number"
          value={tipPercent}
          onChange={(e) => setTipPercent(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="peopleamt">Number of People:</label>
        <input
          id="peopleamt"
          type="number"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </div>

      <p>Tip Per Person: ${tipPerPerson}</p>
    </div>
  );
};

export default App;
