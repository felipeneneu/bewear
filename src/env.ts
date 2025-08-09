import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3355),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  BETTER_AUTH_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
