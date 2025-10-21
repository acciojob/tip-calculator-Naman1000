

import './../styles/App.css';

import React, { useState } from "react";


const App = () => {
  const [bill, setBill] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [people, setPeople] = useState(1);

  // Calculate tip per person
  const totalTip = bill * (tipPercent / 100);
  const tipPerPerson = (totalTip / people).toFixed(2);

  return (
    <div id="container">
      <h2>Tip Calculator</h2>

      <div>
        <label>
          Bill:
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Tip Percentage:
          <input
            type="number"
            value={tipPercent}
            onChange={(e) => setTipPercent(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Number of People:
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
        </label>
      </div>

      <p>Tip Per Person: ${tipPerPerson}</p>
    </div>
  );
};

export default App;

