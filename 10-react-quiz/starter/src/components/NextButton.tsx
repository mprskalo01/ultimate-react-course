import { Reducer } from '../App';
interface Props {
  dispatch: React.ActionDispatch<[action: Reducer]>;
  answer: number | null;
}

const NextButton = ({ dispatch, answer }: Props) => {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      {' '}
      Next
    </button>
  );
};

export default NextButton;
