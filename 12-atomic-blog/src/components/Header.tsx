// import { Post } from '../App';
import Results from './Results';
import SearchPosts from './SearchPosts';
import { usePostContext } from '../context/PostContext';

// interface Props {
//   posts: Post[];
//   onClearPosts: () => void;
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
// }

function Header() {
  const { onClearPosts } = usePostContext();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
