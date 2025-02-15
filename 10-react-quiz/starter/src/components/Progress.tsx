interface Props {
  index: number;
  numberOfQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
}

const Progress = ({
  index,
  numberOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}: Props) => {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
