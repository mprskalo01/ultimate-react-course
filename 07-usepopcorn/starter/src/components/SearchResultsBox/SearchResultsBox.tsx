import { useState } from 'react';
import { Movie } from '../MovieCard';
import MovieList from '../MovieList';

interface Props {
  movies: Movie[];
}

const SearchResultsBox = ({ movies }: Props) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default SearchResultsBox;
