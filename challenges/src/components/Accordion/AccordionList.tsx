import { useState } from 'react';
import './accordion.css';
import AccordionItem from './AccordionItem';

interface Faq {
  title: string;
  text: string;
}

const faqs: Faq[] = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

const AccordionList = () => {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i + 1}
          num={i + 1}
          title={faq.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default AccordionList;
