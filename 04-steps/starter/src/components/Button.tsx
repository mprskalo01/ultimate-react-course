interface Props {
  textColor: string;
  bgColor: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({
  textColor,
  bgColor,
  onClick,
  children,
}: Props) {
  return (
    <button
      onClick={onClick}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}
