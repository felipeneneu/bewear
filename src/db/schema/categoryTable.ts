import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const categoryTable = pgTable('category', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  createdAt: timestamp().notNull().defaultNow(),
});
