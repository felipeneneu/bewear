import Image from 'next/image';
import Link from 'next/link';
import type { productTable } from '@/db/schema/productTable';
import type { productVariantTable } from '@/db/schema/productVariantTable';
import { formatCentsToBrl } from '@/healpers/monney';

interface ProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link className="flex flex-col gap-4" href="/">
      <Image
        alt={firstVariant.name}
        className="rounded-3xl"
        height={240}
        src={firstVariant.imageUrl}
        width={240}
      />
      <div className="flex max-w-36 flex-col gap-1">
        <p className="truncate font-medium text-sm">{product.name}</p>
        <p className="truncate font-medium text-muted-foreground text-xs">
          {product.description}
        </p>
        <p className="truncate font-semibold text-sm">
          {formatCentsToBrl(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
