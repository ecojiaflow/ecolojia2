import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

function ProductPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail productId={id} />
    </div>
  );
}

export default ProductPage;