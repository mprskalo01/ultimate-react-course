import { Movie } from '../MovieCard';

interface Props {
  movies: Movie[];
}
const NumberOfResults = ({ movies }: Props) => {
  return (
    <p className="num-results">
      {/* Found <strong>{movies.length}</strong> results */}
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumberOfResults;
