import Logo from './Logo';

interface Props {
  children: React.ReactNode;
}
const NavBar = ({ children }: Props) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default NavBar;
