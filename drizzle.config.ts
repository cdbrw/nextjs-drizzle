import type { Config } from 'drizzle-kit';

export default {
  dialect: 'sqlite',
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config;
