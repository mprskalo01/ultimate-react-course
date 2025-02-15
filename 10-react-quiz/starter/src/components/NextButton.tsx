import { Reducer } from '../App';
interface Props {
  dispatch: React.ActionDispatch<[action: Reducer]>;
  answer: number | null;
  index: number;
  numberOfQuestions: number;
}

const NextButton = ({ dispatch, answer, index, numberOfQuestions }: Props) => {
  if (answer === null) return null;

  if (index < numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        {' '}
        Next
      </button>
    );

  if (index === numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        {' '}
        Finish
      </button>
    );
};

export default NextButton;
