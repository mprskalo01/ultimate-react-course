import { useEffect, useRef } from 'react';
import { useKey } from '../../../hooks/useKey';

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: Props) => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(
    function () {
      inputEl.current?.focus();
    },
    [setQuery]
  );

  useKey('Enter', function () {
    if (document.activeElement === inputEl.current) return;

    (inputEl.current as HTMLElement).focus();
    setQuery('');
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
