import { desc } from 'drizzle-orm';
import Image from 'next/image';
import CategorySelector from '@/components/commom/category-selector';
import Footer from '@/components/commom/footer';
import Header from '@/components/commom/header';
import ProductList from '@/components/commom/product-list';
import { db } from '@/db/connection';
import { productTable } from '@/db/schema/productTable';

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    limit: 4,
    with: {
      variants: true,
    },
  });
  const category = await db.query.categoryTable.findMany({});
  // biome-ignore lint/suspicious/noConsole: <dev>
  console.log(products);
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            alt="Leve uma vida com estilo"
            className="h-auto w-full"
            height={0}
            sizes="100vw"
            src="/banner-01.png"
            width={0}
          />
        </div>

        <ProductList products={products} title="Mais vendidos" />
        <div className="px-5">
          {' '}
          <Image
            alt="Leve uma vida com estilo"
            className="h-auto w-full"
            height={0}
            sizes="100vw"
            src="/banner-02.png"
            width={0}
          />
        </div>
        <ProductList products={newCreatedProducts} title="Novos Produtos" />
        <div className="px-5">
          <CategorySelector categories={category} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
