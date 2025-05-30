import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import ProductDetail from '../components/ProductDetail';
import { Leaf } from 'lucide-react';
import { Product, SearchFilters } from '../types';
import { products, categories } from '../data/mockData';

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    let result = products;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    if (filters.minEthicalScore) {
      result = result.filter(product => product.ethicalScore >= filters.minEthicalScore);
    }
    
    if (filters.brand) {
      result = result.filter(
        product => product.brand.toLowerCase() === filters.brand?.toLowerCase()
      );
    }
    
    setFilteredProducts(result);
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryId: string | undefined) => {
    setFilters(prev => ({ ...prev, category: categoryId }));
  };

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-eco-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Leaf className="h-16 w-16 text-eco-leaf" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-text mb-6">
            {t('home.hero.title')}{' '}
            <span className="text-eco-leaf">{t('home.hero.titleHighlight')}</span>{' '}
            {t('home.hero.titleEnd')}
          </h1>
          <p className="text-lg md:text-xl text-eco-text/80 max-w-3xl mx-auto mb-12">
            {t('home.hero.subtitle')}
          </p>
          
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={filters.category}
            onSelectCategory={handleCategorySelect}
          />
          
          {filteredProducts.length > 0 ? (
            <>
              <div className="mt-8 mb-10">
                <h2 className="text-2xl font-semibold text-eco-text">
                  {searchQuery 
                    ? `${t('home.search.results.title')} "${searchQuery}"`
                    : t('home.whyChoose.title')}
                </h2>
                <p className="text-eco-text/70 mt-2">
                  {t('home.search.results.productsFound', { count: filteredProducts.length })}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    onClick={handleProductClick}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-eco-text/70 text-lg">
                {t('home.search.results.noResults')}
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setFilters({});
                }}
                className="mt-4 text-eco-leaf hover:text-eco-text font-medium transition-colors"
              >
                {t('home.search.results.resetFilters')}
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-eco-gradient/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-eco-text">{t('home.whyChoose.title')}</h2>
            <p className="mt-4 text-lg text-eco-text/80 max-w-3xl mx-auto">
              {t('home.whyChoose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title={t('home.whyChoose.features.verified.title')}
              description={t('home.whyChoose.features.verified.description')}
            />
            <FeatureCard 
              title={t('home.whyChoose.features.transparent.title')}
              description={t('home.whyChoose.features.transparent.description')}
            />
            <FeatureCard 
              title={t('home.whyChoose.features.smart.title')}
              description={t('home.whyChoose.features.smart.description')}
            />
          </div>
        </div>
      </section>
      
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct}
          onClose={closeProductDetail}
        />
      )}
    </>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-eco-text mb-4">{title}</h3>
      <p className="text-eco-text/70">{description}</p>
    </div>
  );
};

export default HomePage;