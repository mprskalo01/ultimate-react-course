import Logo from './Logo';
import Search from './Search';
import NumberOfResults from './NumberOfResults';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumberOfResults />
    </nav>
  );
};

export default NavBar;
