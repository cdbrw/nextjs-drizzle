import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';

import { posts } from '@/db/schema';

export const PostSchema = createInsertSchema(posts, {
  title: z.string().trim().min(1).max(100),
  content: z.string().trim().min(1).max(3000),
}).omit({
  id: true,
  createdAt: true,
});
