import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  // movies: Movie[];
}

const SearchResultsBox = ({ children }: Props) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && children}
    </div>
  );
};

export default SearchResultsBox;
