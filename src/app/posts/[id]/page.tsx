import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

import { db } from '@/db';
import { posts } from '@/db/schema';
import Title from '@/components/title';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  return {
    title: `Post ${params.id} | cdbrw`,
  };
}

export default async function Page({ params }: PostPageProps) {
  const { id } = params;

  const results = await db
    .select()
    .from(posts)
    .where(eq(posts.id, parseInt(id, 10)));

  if (results.length === 0) {
    notFound();
  }

  const post = results[0];

  return (
    <section className="flex flex-col items-center">
      <Title text={post.title} />

      <div className="w-1/2 mb-12">
        <p>{post.content}</p>
      </div>
    </section>
  );
}
