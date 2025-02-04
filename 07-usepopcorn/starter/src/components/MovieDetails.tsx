import { useEffect, useRef, useState } from 'react';
import StarRating from './StarRating/StarRating';
import Loader from './Loader';
import { Movie } from './MovieCard';
import { useKey } from '../../hooks/useKey';
const API_KEY = import.meta.env.VITE_API_KEY;

interface Props {
  selectedId: string;
  watchedMovies: Movie[];
  onMovieClose: () => void;
  onAddWatched: (movie: Movie) => void;
}

interface ResponseMovie {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
  userRating?: number;
  totalSeasons?: string;
}

const MovieDetails = ({
  selectedId,
  watchedMovies,
  onMovieClose,
  onAddWatched,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current = countRef.current + 1;
    },
    [userRating]
  );

  const isAlreadyWatched = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  const watchedUserRating = watchedMovies.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const [movie, setMovie] = useState<ResponseMovie>({
    Title: '',
    Year: '',
    Poster: '',
    Runtime: '',
    imdbRating: '',
    Plot: '',
    Released: '',
    Actors: '',
    Director: '',
    Genre: '',
  });

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `${year.includes('–') ? 'Series' : 'Movie'} | ${title}`;
      return function () {
        document.title = 'usePopcorn';
      };
    },
    [title, year]
  );

  useKey('Escape', onMovieClose);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime?.split(' ')[0]),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onMovieClose();
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onMovieClose}>
              &larr;
            </button>
            {poster ? <img src={poster} alt={`Poster of ${movie}`} /> : ''}
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isAlreadyWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                    defaultRating={userRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      {' '}
                      + Add to watched
                    </button>
                  )}
                </>
              ) : (
                `You rated this movie with ${watchedUserRating} 🌟`
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
