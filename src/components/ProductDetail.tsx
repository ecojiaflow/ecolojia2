import React from 'react';
import { X, ExternalLink, CheckCircle, Tag, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import EthicalScoreBadge from './EthicalScoreBadge';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const getConfidenceBadge = (score: number | null | undefined) => {
    if (score === null || score === undefined || isNaN(score)) {
      return "AI analysis in progress...";
    }

    const percentage = Math.round(score * 100);
    
    if (percentage >= 70) {
      return `🟢 High confidence - ${percentage}%`;
    }
    if (percentage >= 50) {
      return `🟡 Medium confidence - ${percentage}%`;
    }
    return `🔴 Low confidence - ${percentage}%`;
  };

  return (
    <div className="fixed inset-0 bg-eco-text/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-eco-text/10">
        <div className="sticky top-0 bg-white/95 backdrop-blur z-10 flex justify-between items-center p-6 border-b border-eco-text/10">
          <button 
            onClick={onClose}
            className="text-eco-text/70 hover:text-eco-text flex items-center transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Retour</span>
          </button>
          <button 
            onClick={onClose}
            className="text-eco-text/70 hover:text-eco-text transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto rounded-2xl object-cover shadow-md"
              />
              {product.verified && (
                <div className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-md flex items-center">
                  <CheckCircle size={18} className="text-eco-leaf mr-2" />
                  <span className="text-sm font-medium text-eco-text">Produit Vérifié</span>
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <h2 className="text-2xl font-bold text-eco-text">{product.name}</h2>
              <p className="text-lg text-eco-text/70 mt-1">{product.brand}</p>
              
              <div className="mt-4">
                <span className="text-sm text-eco-text/70">{getConfidenceBadge(product.ai_confidence)}</span>
              </div>
              
              <div className="mt-6">
                <EthicalScoreBadge score={product.ethicalScore} size="lg" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-eco-text">Description</h3>
                <p className="mt-2 text-eco-text/80 leading-relaxed">{product.description}</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-eco-text">Certifications</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.certifications.map((certification, index) => (
                    <span key={index} className="bg-eco-glow/20 text-eco-olive px-4 py-2 rounded-full text-sm font-medium">
                      {certification}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-eco-text">Tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center bg-eco-glow/10 text-eco-olive px-4 py-2 rounded-full text-sm"
                    >
                      <Tag size={14} className="mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 flex justify-between items-center">
                <span className="text-2xl font-bold text-eco-text">
                  {product.price.toFixed(2)} {product.currency}
                </span>
                <a 
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-eco-leaf hover:bg-eco-text text-white px-6 py-3 rounded-full font-medium flex items-center transition-colors shadow-lg shadow-eco-leaf/20 hover:shadow-eco-text/20"
                >
                  Acheter ce produit
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;