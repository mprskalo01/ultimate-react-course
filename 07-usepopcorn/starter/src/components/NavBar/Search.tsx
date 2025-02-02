import { useEffect, useRef } from 'react';

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: Props) => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(
    function () {
      function callback(event: KeyboardEvent) {
        if (document.activeElement === inputEl.current) return;
        if (event.code === 'Enter') {
          (inputEl.current as HTMLElement).focus();
          setQuery('');
        }
      }

      document.addEventListener('keydown', callback);
      return () => document.addEventListener('keydown', callback);
    },
    [setQuery]
  );

  /* NOT OPTIMAL WAY 
  useEffect(function () {
    const element = document.querySelector('.search') as HTMLElement;
    console.log(element);
    element.focus();
  }, []); 
  */

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
