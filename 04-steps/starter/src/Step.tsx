import { useState } from 'react';
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const isActiveClass = (number: number) => {
    return `${step >= number ? 'active' : ''}`;
  };

  const handlePrevious = (): void => {
    if (step > 1) setStep((step: number) => step - 1);
  };
  const handleNext = (): void => {
    if (step < 3) setStep((step: number) => step + 1);
  };

  return (
    <div>
      <button
        className="close"
        onClick={(): void => setIsOpen((isOpen: boolean) => !isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={isActiveClass(1)}>1</div>
            <div className={isActiveClass(2)}>2</div>
            <div className={isActiveClass(3)}>3</div>
          </div>
          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step;
