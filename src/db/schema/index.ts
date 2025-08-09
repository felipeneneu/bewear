import { categoryTable } from './categoryTable';
import { productTable } from './productTable';
import { productVariantTable } from './productVariantTable';
import {
  categoryRelations,
  productRelations,
  productVariantRelations,
} from './relations';
import { accountTable, sessionTable, userTable } from './userTable';

export const schema = {
  userTable,
  accountTable,
  sessionTable,
  productTable,
  productRelations,
  categoryRelations,
  productVariantRelations,
  productVariantTable,
  categoryTable,
};
