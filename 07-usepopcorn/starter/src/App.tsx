import { useEffect, useState } from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar/NavBar';
import NumberOfResults from './components/NavBar/NumberOfResults';
import { Movie } from './components/MovieCard';
import MovieList from './components/MovieList';
import Search from './components/NavBar/Search';
import Box from './components/Box';
import WatchedSummary from './components/WatchedSummary';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
const API_KEY = import.meta.env.VITE_API_KEY;

const tempWatchedData: Movie[] = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const searchQuery = 'asdasdasdas';

  useEffect(function () {
    async function FetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`
        );
        // if (!res.ok)
        //   throw new Error('Something went wrong with fetching movies.');

        const data = await res.json();
        if (data.Response === 'False') throw new Error('No movies found');

        setMovies(data.Search);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occured');
        }
      } finally {
        setIsLoading(false);
      }
    }
    FetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Search />
        <NumberOfResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <MovieList movies={movies} />
          )}
        </Box>
        {/* <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box> */}
        <Box>
          <WatchedSummary movies={watched} />
          <MovieList movies={watched} />
        </Box>
      </Main>
    </>
  );
}

export default App;
