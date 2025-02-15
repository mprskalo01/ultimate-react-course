import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';

export interface Question {
  correctOption: number;
  id: string;
  options: string[];
  points: number;
  question: string;
}

interface State {
  questions: Question[];
  status: string;
  index: number;
  answer: null | number;
  points: number;
}
export interface Reducer {
  type: string;
  payload?: Question[] | number | null;
}

const initialState = {
  questions: [],
  status: 'loading', // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state: State, action: Reducer): State {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: Array.isArray(action.payload)
          ? action.payload
          : state.questions,
        status: 'ready',
      };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer': {
      const question = state.questions[state.index];
      return {
        ...state,
        answer:
          typeof action.payload === 'number' ? action.payload : state.answer,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    default:
      throw new Error('Action not recognized');
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numberOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataRecieved', payload: data }))
      .catch((error) => {
        console.log(error, 'Error fetching data');
        dispatch({ type: 'dataFailed' });
      });
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <ErrorComponent />}
        {status === 'ready' && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numberOfQuestions={numberOfQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
