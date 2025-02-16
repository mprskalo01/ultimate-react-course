import { useEffect } from 'react';
import { Reducer } from '../App';

interface Props {
  dispatch: React.ActionDispatch<[action: Reducer]>;
  secondsRemaining: number | null;
}

const Timer = ({ dispatch, secondsRemaining }: Props) => {
  const minutes = Math.floor(Number(secondsRemaining) / 60);
  const seconds = Number(secondsRemaining) % 60;

  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: 'tick' }), 1000);

      return () => clearInterval(id);
    },

    [dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 && '0'}
      {minutes}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
};

export default Timer;
