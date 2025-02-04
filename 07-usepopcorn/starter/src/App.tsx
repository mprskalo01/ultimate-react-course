import { useState } from 'react';
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
import { useMovies } from '../hooks/useMovies';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

  const { movies, isLoading, error } = useMovies(query, API_KEY);

  const [watched, setWatched] = useLocalStorageState<Movie[]>(
    [],
    'watchedMovies'
  );

  function handleMovieSelection(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? '' : id));
  }
  function handleMovieClose() {
    setSelectedId('');
  }

  function handleAddWatched(watchedMovie: Movie) {
    setWatched((watched: Movie[]) => [...watched, watchedMovie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched: Movie[]) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumberOfResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onMovieSelection={handleMovieSelection}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
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
                onMovieSelection={() => console.log()}
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
