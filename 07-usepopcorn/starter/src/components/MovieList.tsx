import MovieCard, { Movie } from './MovieCard';

interface Props {
  movies: Movie[];
  onMovieSelection: (id: string) => void;
}

const MovieList = ({ movies, onMovieSelection }: Props) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onMovieSelection={onMovieSelection}
        />
      ))}
    </ul>
  );
};

export default MovieList;
