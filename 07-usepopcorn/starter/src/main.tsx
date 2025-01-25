import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import StarRating from './components/StarRating/StarRating';
// import App from './App.tsx'
import TestMovieRating from './components/StarRating/TestMovieRating';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    <TestMovieRating />
  </StrictMode>
);
