
interface Props {
  children: React.ReactNode;
  // movies: Movie[];
}

const Main = ({ children }: Props) => {
  return (
    <main className="main">
      {children}
    </main>
  );
};

export default Main;
