import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { productTable } from './productTable';

export const productVariantTable = pgTable('product_variant', {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid()
    .notNull()
    .references(() => productTable.id, { onDelete: 'cascade' }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  color: text().notNull(),
  imageUrl: text().notNull(),
  priceInCents: integer().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
