'use server';

import { db } from '@/db';
import { posts } from '@/db/schema';
import { PostSchema } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function createPost(data: FormData) {
  const newPost = {
    title: data.get('title') as string,
    content: data.get('content') as string,
  };

  const result = PostSchema.safeParse(newPost);
  if (!result.success) {
    return {
      error: 'Invalid data',
    };
  }

  await db.insert(posts).values(result.data);

  revalidatePath('/posts');
}
