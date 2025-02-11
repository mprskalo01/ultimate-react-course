import { useReducer } from 'react';

interface Reducer {
  type: string;
  payload?: number;
}

interface InitialState {
  count: number;
  step: number;
}
function reducer(state: InitialState, action: Reducer): InitialState {
  console.log(state, action);

  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - 1 };
    case 'inc':
      return { ...state, count: state.count + 1 };
    case 'setCount':
      return { ...state, count: action.payload ?? state.count };
    case 'setStep':
      return { ...state, step: action.payload ?? state.step };
    case 'reset':
      return { count: 0, step: 0 };
    default: {
      throw new Error('Unknown action');
    }
  }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  const date = new Date();
  date.setDate(date.getDate() + count);

  const decrease = function () {
    dispatch({ type: 'dec' });
  };

  const increase = function () {
    dispatch({ type: 'inc' });
  };

  const defineCount = function (event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'setCount',
      payload: Number((event.target as HTMLInputElement).value),
    });
  };

  const defineStep = function (event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'setStep',
      payload: Number((event.target as HTMLInputElement).value),
    });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
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
