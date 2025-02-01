import MovieCard, { Movie } from './MovieCard';

interface Props {
  movies: Movie[];
  onMovieSelection: (id: string) => void;
  onDeleteWatched?: (id: string) => void;
}

const MovieList = ({ movies, onMovieSelection, onDeleteWatched }: Props) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onMovieSelection={onMovieSelection}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default MovieList;
