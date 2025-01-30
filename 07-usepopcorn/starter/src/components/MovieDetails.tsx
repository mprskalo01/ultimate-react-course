interface Props {
  selectedId: string;
  onMovieClose: () => void;
}

const MovieDetails = ({ selectedId, onMovieClose }: Props) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onMovieClose}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
