import React, { SetStateAction } from 'react';
interface Props {
  num: number;
  title: string;
  curOpen: number;
  onOpen: React.Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
}

const AccordionItem = ({ num, title, curOpen, onOpen, children }: Props) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? 0 : num);
  };
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
