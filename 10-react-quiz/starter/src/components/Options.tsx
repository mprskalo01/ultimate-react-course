import { Question as QuestionInterface } from '../App';
import { Reducer } from '../App';
interface Props {
  question: QuestionInterface;
  dispatch: React.ActionDispatch<[action: Reducer]>;
  answer: number | null;
}

const Options = ({ question, dispatch, answer }: Props) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
