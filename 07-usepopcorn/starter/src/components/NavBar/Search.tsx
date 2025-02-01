interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: Props) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default Search;
