import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import StartScreen from './components/StartScreen';
import Question from './components/Question';

interface Question {
  correctOption: number;
  id: string;
  options: string[];
  points: number;
  question: string;
}

interface State {
  questions: Question[];
  status: string;
}
export interface Reducer {
  type: string;
  payload?: Question[];
}

const initialState = {
  questions: [],
  status: 'loading', // 'loading', 'error', 'ready', 'active', 'finished'
};

function reducer(state: State, action: Reducer) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload ?? state.questions,
        status: 'ready',
      };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    default:
      throw new Error('Action not recognized');
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numberOfQuestions = questions.length;

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
        {status === 'active' && <Question />}
      </Main>
    </div>
  );
}

export default App;
