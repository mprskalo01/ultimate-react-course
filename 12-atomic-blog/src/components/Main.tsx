import { Post } from '../App';
import FormAddPost from './FormAddPost';
import Posts from './Posts';

interface Props {
  posts: Post[];
  onAddPost: (post: Post) => void;
}

function Main({ posts, onAddPost }: Props) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
