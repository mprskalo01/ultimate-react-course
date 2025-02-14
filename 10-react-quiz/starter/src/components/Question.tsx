import { Question as QuestionInterface, Reducer } from '../App';
import Options from './Options';

interface Props {
  question: QuestionInterface;
  dispatch: React.ActionDispatch<[action: Reducer]>;
  answer: number | null;
}
const Question = ({ question, dispatch, answer }: Props) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
