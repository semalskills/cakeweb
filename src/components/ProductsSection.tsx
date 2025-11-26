import { useEffect, useState } from 'react';
import { supabase, Product, Category } from '../lib/supabase';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

export default function ProductsSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        supabase.from('categories').select('*').order('display_order'),
        supabase.from('products').select('*').order('display_order')
      ]);

      if (categoriesResponse.data) setCategories(categoriesResponse.data);
      if (productsResponse.data) setProducts(productsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-12 h-12 text-amber-600 animate-spin" />
      </div>
    );
  }

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600">
            Explore our delicious selection of freshly made treats
          </p>
        </div>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (p) => p.category_id === category.id
          );

          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.id} className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
