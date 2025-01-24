interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <button className="button">{children}</button>;
};

export default Button;
