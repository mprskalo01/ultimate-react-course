import { Post } from '../App';

interface Props {
  posts: Post[];
}

function Results({ posts }: Props) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
