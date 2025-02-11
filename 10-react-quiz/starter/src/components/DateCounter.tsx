import { useReducer, useState } from 'react';

interface Reducer {
  type: string;
  payload?: number;
}
function reducer(state: number, action: Reducer) {
  console.log(state, action);
  if (action.type === 'inc') return state + 1;
  if (action.type === 'dec') return state - 1;
  if (action.type === 'setCount') return action.payload ?? state;
  return state;
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const decrease = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: 'dec' });
  };

  const increase = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: 'inc' });
  };

  const defineCount = function (event: React.ChangeEvent<HTMLInputElement>) {
    // setCount(Number((event.target as HTMLInputElement).value));
    dispatch({
      type: 'setCount',
      payload: Number((event.target as HTMLInputElement).value),
    });
  };

  const defineStep = function (event: React.ChangeEvent<HTMLInputElement>) {
    setStep(Number((event.target as HTMLInputElement).value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decrease}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increase}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
