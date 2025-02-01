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
import MovieDetails from './components/MovieDetails';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

  function handleMovieSelection(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? '' : id));
  }
  function handleMovieClose() {
    setSelectedId('');
  }

  function handleAddWatched(watchedMovie: Movie) {
    setWatched((watched) => [...watched, watchedMovie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
            { signal: controller.signal }
          );
          // if (!res.ok)
          //   throw new Error('Something went wrong with fetching movies.');

          const data = await res.json();
          if (data.Response === 'False') throw new Error('No movies found');

          setMovies(data.Search);
          setError('');
        } catch (error) {
          if (error instanceof Error && error.name !== 'AbortError') {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }
      handleMovieClose();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumberOfResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <MovieList
              movies={movies}
              onMovieSelection={handleMovieSelection}
            />
          )}
        </Box>
        {/* <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box> */}
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              watchedMovies={watched}
              onMovieClose={handleMovieClose}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary movies={watched} />
              <MovieList
                movies={watched}
                onMovieSelection={handleMovieSelection}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
