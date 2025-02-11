import { Reducer } from '../App';

interface Props {
  numberOfQuestions: number;
  dispatch: React.ActionDispatch<[action: Reducer]>;
}
const StartScreen = ({ numberOfQuestions, dispatch }: Props) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
