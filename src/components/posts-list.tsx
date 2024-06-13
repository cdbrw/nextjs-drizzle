import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Subscribe to CodeBrew!',
    content: 'For more content like this',
  },
  {
    id: 2,
    title: 'Like the video',
    content: 'Helps the channel!',
  },
  {
    id: 3,
    title: 'Leave a comment',
    content: "Let me know what else you'd like to see!",
  },
];

export default function PostsList() {
  return (
    <ul>
      {posts.map((post) => (
        <Link
          className="hover:underline ali"
          key={post.id}
          href={`/posts/${post.id}`}
        >
          <li className="hover:pl-2 ">
            <h2>{post.title}</h2>
          </li>
        </Link>
      ))}
    </ul>
  );
}
