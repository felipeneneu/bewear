import { categoryTable } from './categoryTable';
import { productTable } from './productTable';
import { productVariantTable } from './productVariantTable';
import {
  categoryRelations,
  productRelations,
  productVariantRelations,
} from './relations';
import {
  accountTable,
  sessionTable,
  userTable,
  verificationTable,
} from './userTable';

export const schema = {
  userTable,
  accountTable,
  sessionTable,
  verificationTable,
  productTable,
  productRelations,
  categoryRelations,
  productVariantRelations,
  productVariantTable,
  categoryTable,
};
