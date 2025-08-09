import { categoryTable } from './categoryTable';
import { productTable } from './productTable';
import { productVariantTable } from './productVariantTable';
import {
  categoryRelations,
  productRelations,
  productVariantRelations,
} from './relations';
import { userTable } from './userTable';

export const schema = {
  userTable,
  productTable,
  productRelations,
  categoryRelations,
  productVariantRelations,
  productVariantTable,
  categoryTable,
};
