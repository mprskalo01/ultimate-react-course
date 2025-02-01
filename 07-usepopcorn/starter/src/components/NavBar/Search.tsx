import { useState } from 'react';

interface Props {
  setQuery: (query: string) => void;
}

const Search = ({ setQuery }: Props) => {
  const [inputQuery, setInputQuery] = useState('');
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={inputQuery}
      onChange={(event) => setInputQuery(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          setQuery(inputQuery);
        }
      }}
    />
  );
};

export default Search;
