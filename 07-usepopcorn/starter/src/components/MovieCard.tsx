export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  type?: string;
  runtime?: number;
  imdbRating?: number;
  userRating?: number;
}

interface Props {
  movie: Movie;
  onMovieSelection: (id: string) => void;
}

const MovieCard = ({ movie, onMovieSelection }: Props) => {
  const isWatchedMovie =
    movie?.imdbRating && movie?.runtime && movie?.userRating;
  return (
    <li key={movie.imdbID} onClick={() => onMovieSelection(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      {isWatchedMovie && (
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      )}
    </li>
  );
};

export default MovieCard;
