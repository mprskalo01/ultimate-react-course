import { Question as QuestionInterface } from '../App';

interface Props {
  question: QuestionInterface;
}

const Options = ({ question }: Props) => {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
