import Products from './Products';
import './styles.css';

import { getProducts } from '@/api/products';

export default async function TopSearch() {
  const products = await getProducts();

  if (products.error) {
    return <div>Error: {products.error}</div>;
  }

  return (
    <section className="top-search max-w-[1600px] px-[40px]">
      <h3 className="section-heading">TOP TÌM KIẾM</h3>
      <Products products={products} />
    </section>
  );
}
