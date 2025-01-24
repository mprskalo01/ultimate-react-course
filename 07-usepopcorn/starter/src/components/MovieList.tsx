import MovieCard, { Movie } from './MovieCard';

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
