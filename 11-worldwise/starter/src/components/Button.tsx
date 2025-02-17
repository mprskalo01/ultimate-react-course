import styles from './Button.module.css';
interface Props {
  children: React.ReactNode;
  onClick: (event: React.SyntheticEvent) => void;
  type: string;
}

const Button = ({ children, onClick, type }: Props) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
