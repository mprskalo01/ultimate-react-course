import { useState, useEffect } from 'react';
import { Movie } from '../types/interfaces';

export function useMovies(
  query: string,
  API_KEY: string
  // callback?: () => void
) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      // callback?.();
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
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query, API_KEY]
  );

  return { movies, isLoading, error };
}
