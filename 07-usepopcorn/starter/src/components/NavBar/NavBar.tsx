import Logo from './Logo';
import Search from './Search';
import NumberOfResults from './NumberOfResults';
import { Movie } from '../MovieCard';

interface Props {
  movies: Movie[];
}
const NavBar = ({ movies }: Props) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumberOfResults movies={movies} />
    </nav>
  );
};

export default NavBar;
