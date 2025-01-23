import { useState } from 'react';
import './dateCounter.css';

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + step);
  };
  const decreaseCount = () => {
    setCount((count) => count - step);
  };
  const increaseStep = () => {
    setStep((step) => step + 1);
  };
  const decreaseStep = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  const todayDate = new Date('january 23 2025');
  todayDate.setDate(todayDate.getDate() + count);

  return (
    <div className="date-counter">
      <div>
        <button onClick={decreaseCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div>
        <button onClick={decreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <span>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{todayDate.toDateString()}</span>
    </div>
  );
}

export default DateCounter;
