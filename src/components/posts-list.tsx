import Link from 'next/link';

import { db } from '@/db';
import { posts } from '@/db/schema';

export default async function PostsList() {
  const blogPosts = await db.select().from(posts);

  if (blogPosts.length === 0) {
    return <p>No posts found</p>;
  }

  return (
    <ul>
      {blogPosts.map((post) => (
        <Link
          className="hover:underline ali"
          key={post.id}
          href={`/posts/${post.id}`}
        >
          <li>
            <h2>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span> -{' '}
              <span>{post.title}</span>
            </h2>
          </li>
        </Link>
      ))}
    </ul>
  );
}
