import { useEffect, useState } from 'react';
import { fetchProducts, fetchProductById } from '../api/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import type { Product } from '../types/product';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleCardClick = async (id: number) => {
    const product = await fetchProductById(String(id));
    setSelectedProduct(product);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} onClick={() => handleCardClick(product?.id)} />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default Home;