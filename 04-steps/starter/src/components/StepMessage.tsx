interface Props {
  step: number;
  children: React.ReactNode;
}

export default function StepMessage({ step, children }: Props) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
