'use server';

import { db } from '@/db';
import { posts } from '@/db/schema';
import { PostSchema } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function createPost(data: unknown) {
  const result = PostSchema.safeParse(data);
  if (!result.success) {
    return {
      error: 'Invalid data',
    };
  }

  await db.insert(posts).values(result.data);

  revalidatePath('/posts');
}
