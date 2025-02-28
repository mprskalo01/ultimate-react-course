import { createContext, useContext } from 'react';
import { Post } from '../App';

interface Props {
  posts: Post[];
  onAddPost: (post: Post) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with an initial value of null
const PostContext = createContext<Props | null>(null);

// Create a custom hook to safely use the context
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};

export default PostContext;
