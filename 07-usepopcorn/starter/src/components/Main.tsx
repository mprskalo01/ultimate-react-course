import { Movie } from './MovieCard';
import SearchResultsBox from './SearchResultsBox/SearchResultsBox';
import WatchedBox from './WatchedBox/WatchedBox';

interface Props {
  movies: Movie[];
}

const Main = ({ movies }: Props) => {
  return (
    <main className="main">
      <SearchResultsBox movies={movies} />
      <WatchedBox />
    </main>
  );
};

export default Main;
