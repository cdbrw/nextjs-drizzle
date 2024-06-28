'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(data: FormData) {
  const newPost = {
    title: data.get('title') as string,
    content: data.get('content') as string,
  };

  // 1. validate new post schema

  // 2. insert new post into database

  revalidatePath('/posts');
}
