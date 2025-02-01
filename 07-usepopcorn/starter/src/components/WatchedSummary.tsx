import { Movie } from './MovieCard';

interface Props {
  movies: Movie[];
}

const average = (arr: number[]) =>
  arr.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({ movies }: Props) => {
  const avgImdbRating = average(movies.map((movie) => movie.imdbRating || 0));
  const avgUserRating = average(movies.map((movie) => movie.userRating || 0));
  const avgRuntime = average(movies.map((movie) => movie.runtime || 0));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{movies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
