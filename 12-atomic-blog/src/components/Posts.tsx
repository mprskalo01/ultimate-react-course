import { Post } from '../App';
import List from './List';

interface Props {
  posts: Post[];
}

function Posts({ posts }: Props) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
