import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';

import { posts } from '@/db/schema';

export const PostSchema = createInsertSchema(posts, {
  title: z
    .string({
      required_error: 'required field',
      invalid_type_error: 'Title is required',
    })
    .trim()
    .min(3, { message: 'Title is too short' })
    .max(100, { message: 'Title is too long' }),
  content: z
    .string({
      required_error: 'required field',
      invalid_type_error: 'Content is required',
    })
    .trim()
    .min(1, { message: 'Content is too short' })
    .max(3000, { message: 'Content is too long' }),
}).omit({ id: true, createdAt: true });
