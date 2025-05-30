import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, CheckCircle, Tag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { t, i18n } = useTranslation('common');

  const scoreColor = () => {
    if (product.ethicalScore >= 4.5) return 'bg-eco-leaf';
    if (product.ethicalScore >= 4) return 'bg-eco-glow';
    if (product.ethicalScore >= 3.5) return 'bg-yellow-400';
    if (product.ethicalScore >= 3) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getConfidenceBadge = (score: number | null | undefined) => {
    if (score === null || score === undefined || isNaN(score)) {
      return i18n.language === 'fr' ? "Analyse IA en cours..." : "AI analysis in progress...";
    }

    const percentage = Math.round(score * 100);
    
    if (percentage >= 70) {
      return `🟢 ${i18n.language === 'fr' ? 'Confiance élevée' : 'High confidence'} - ${percentage}%`;
    }
    if (percentage >= 50) {
      return `🟡 ${i18n.language === 'fr' ? 'Confiance moyenne' : 'Medium confidence'} - ${percentage}%`;
    }
    return `🔴 ${i18n.language === 'fr' ? 'Confiance faible' : 'Low confidence'} - ${percentage}%`;
  };

  const getTranslatedTag = (tag: string): string => {
    const tagKey = tag.toLowerCase().replace(/[^a-z]/g, '');
    return t(`product.tags.${tagKey}`, tag);
  };

  return (
    <div 
      className="bg-white/90 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full border border-eco-text/5"
      onClick={() => onClick(product.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {product.verified && (
          <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md">
            <CheckCircle size={20} className="text-eco-leaf" />
          </div>
        )}
        <div className={`absolute bottom-3 left-3 ${scoreColor()} text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-sm`}>
          {product.ethicalScore.toFixed(1)}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-eco-text line-clamp-1">
              {i18n.language === 'en' ? product.name_en || product.name : product.name}
            </h3>
            <p className="text-sm text-eco-text/70">{product.brand}</p>
          </div>
          <span className="text-lg font-medium text-eco-text">{product.price.toFixed(2)} {product.currency}</span>
        </div>
        
        {/* AI Analysis Loading Message */}
        {(i18n.language === 'fr' && !product.resume_fr) && (
          <p className="text-orange-600 text-sm italic mt-2">Analyse IA en cours...</p>
        )}
        {(i18n.language === 'en' && !product.resume_en) && (
          <p className="text-orange-600 text-sm italic mt-2">AI analysis in progress...</p>
        )}
        
        <p className="mt-3 text-eco-text/80 text-sm line-clamp-2">
          {i18n.language === 'en' ? product.description_en || product.description : product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center bg-eco-glow/10 text-eco-olive text-xs px-3 py-1.5 rounded-full"
            >
              <Tag size={12} className="mr-1.5" />
              {getTranslatedTag(tag)}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 mt-auto">
        <a 
          href={i18n.language === 'en' ? product.affiliate_link_en : product.affiliate_link_fr}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-eco-leaf hover:text-eco-text font-medium flex items-center transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {t('product.buyProduct')}
          <ExternalLink size={14} className="ml-1.5" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;