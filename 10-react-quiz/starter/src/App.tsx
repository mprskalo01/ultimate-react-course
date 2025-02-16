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
import FinishScreen from './components/FinishScreen';
import Timer from './components/Timer';
import Footer from './components/Footer';
import { questionsArray } from '../data/questions';

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
  highscore: number;
  secondsRemaining: number | null;
}
export interface Reducer {
  type: string;
  payload?: Question[] | number | null;
}

const SECONDS_PER_QUESTION = 15;

const initialState = {
  questions: [],
  status: 'loading', // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
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
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length
          ? state.questions.length * SECONDS_PER_QUESTION
          : 0,
      };
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
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        highscore: state.highscore ? state.highscore : 0,
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining
          ? state.secondsRemaining - 1
          : null,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    default:
      throw new Error('Action not recognized');
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numberOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  // USE THIS TO LOAD FROM TS FILE
  useEffect(() => {
    dispatch({ type: 'dataRecieved', payload: questionsArray });
  }, [dispatch]);

  // USE THIS WITH JSON SERVER
  // useEffect(function () {
  //   fetch('http://localhost:8000/questions')
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: 'dataRecieved', payload: data }))
  //     .catch((error) => {
  //       console.log(error, 'Error fetching data');
  //       dispatch({ type: 'dataFailed' });
  //     });
  // }, []);

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
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numberOfQuestions={numberOfQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
