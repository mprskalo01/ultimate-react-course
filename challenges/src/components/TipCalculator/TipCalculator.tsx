import { useState } from 'react';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [userTip, setUserTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tips = bill * (userTip / 100) + bill * (friendTip / 100);
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        onChange={(event) => setBill(Number(event.target.value))}
      />

      <div>
        <label>How did you like the service?</label>
        <select onChange={(event) => setUserTip(Number(event.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </div>
      <div>
        <label>How did your friend like the service?</label>
        <select onChange={(event) => setFriendTip(Number(event.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </div>
      <p>
        Total bill is: {bill + tips}$ {bill} + {tips} in tips
      </p>
    </div>
  );
};

export default TipCalculator;
