import { useEffect, useState } from 'react';
import StarRating from './StarRating/StarRating';
import Loader from './Loader';
const API_KEY = import.meta.env.VITE_API_KEY;

interface Props {
  selectedId: string;
  onMovieClose: () => void;
}

interface ResponseMovie {
  Title: string | null;
  Year: string | null;
  Poster: string | null;
  Runtime: string | null;
  imdbRating: string | null;
  Plot: string | null;
  Released: string | null;
  Actors: string | null;
  Director: string | null;
  Genre: string | null;
}

const MovieDetails = ({ selectedId, onMovieClose }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<ResponseMovie>({
    Title: null,
    Year: null,
    Poster: null,
    Runtime: null,
    imdbRating: null,
    Plot: null,
    Released: null,
    Actors: null,
    Director: null,
    Genre: null,
  });

  const {
    Title: title,
    // Year: year,
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
            <img src={poster ? poster : undefined} alt={`Poster of ${movie}`} />
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
              <StarRating maxRating={10} size={24} />
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
