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
    if (step < 10) setStep((step) => step + 1);
  };
  const decreaseStep = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const todayDate = new Date('january 23 2025');
  todayDate.setDate(todayDate.getDate() + count);

  return (
    <div className="date-counter">
      <div>
        <button onClick={decreaseStep}>-</button>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <span>Count: {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{todayDate.toDateString()}</span>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DateCounter;
