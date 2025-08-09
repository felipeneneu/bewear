import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { categoryTable } from './categoryTable';

export const productTable = pgTable('product', {
  id: uuid().primaryKey().defaultRandom(),
  categoryId: uuid()
    .notNull()
    .references(() => categoryTable.id, { onDelete: 'set null' }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});
