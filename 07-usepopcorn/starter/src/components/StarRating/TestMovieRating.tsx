import { useState } from 'react';
import StarRating from './StarRating';

const TestMovieRating = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
};

export default TestMovieRating;
