interface Props {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
}

const FinishScreen = ({ points, maxPossiblePoints, highscore }: Props) => {
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
    </>
  );
};

export default FinishScreen;
