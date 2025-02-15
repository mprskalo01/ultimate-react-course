import { Reducer } from '../App';

interface Props {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: React.ActionDispatch<[action: Reducer]>;
}

const FinishScreen = ({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: Props) => {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '😄';
  if (percentage >= 0 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '😢';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored{' '}
        <strong>
          {points} out of {maxPossiblePoints} ({percentage}%)
        </strong>
      </p>
      <p className="highscore"> (Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        {' '}
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
