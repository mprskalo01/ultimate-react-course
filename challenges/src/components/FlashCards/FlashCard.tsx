import { useState } from 'react';

interface Props {
  // id: number;
  question: string;
  answer: string;
}

function FlashCard({ question, answer }: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelection = () => setIsSelected((isSelected) => !isSelected);
  return (
    <div
      onClick={toggleSelection}
      className={`${isSelected ? 'selected' : ''}`}
    >
      <span>{isSelected ? answer : question}</span>
    </div>
  );
}

export default FlashCard;
