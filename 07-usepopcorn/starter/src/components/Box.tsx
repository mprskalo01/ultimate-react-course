import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Box = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Box;
