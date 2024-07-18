import { Suspense } from 'react';

import PostsList from '@/components/posts-list';
import Title from '@/components/title';

export const metadata = {
  title: 'Posts | cdbrw',
};

export default async function Page() {
  return (
    <section>
      <Title text="All Blog Posts" />

      <Suspense fallback={<p>Loading...</p>}>
        <PostsList />
      </Suspense>
    </section>
  );
}
