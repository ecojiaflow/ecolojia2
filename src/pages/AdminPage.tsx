import React, { useState } from 'react';
import { AlertTriangle, Flag, CheckCircle, X } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/mockData';
import EthicalScoreBadge from '../components/EthicalScoreBadge';

const AdminPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Filter unverified products
  const unverifiedProducts = products.filter(product => !product.verified_status);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-eco-text">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-eco-text/70">
            {unverifiedProducts.length} unverified products
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Flags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AI Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {unverifiedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={product.image_url}
                          alt={product.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.brand}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <AlertTriangle size={12} className="mr-1" />
                      Unverified
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Flag size={14} className="text-red-500 mr-1" />
                      <span className="text-gray-900">{product.nb_flags}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="mr-2">{product.confidence_color}</span>
                      <span className="text-gray-900">
                        {(product.ai_confidence * 100).toFixed(0)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="text-eco-leaf hover:text-eco-text transition-colors"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-eco-text">Product Details</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image_url}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-eco-text">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-gray-500">{selectedProduct.brand}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      AI Confidence Score
                    </h4>
                    <div className="flex items-center">
                      <span className="mr-2">{selectedProduct.confidence_color}</span>
                      <span className="text-lg font-medium">
                        {(selectedProduct.ai_confidence * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Eco Score
                    </h4>
                    <EthicalScoreBadge score={selectedProduct.eco_score / 20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Criteria Scores
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(selectedProduct.criteria_score).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm capitalize">{key}</span>
                          <span className="text-sm font-medium">{value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Admin Comment
                    </h4>
                    <textarea
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      placeholder="Add admin comment..."
                      value={selectedProduct.admin_comment}
                      readOnly
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center">
                      <CheckCircle size={16} className="mr-2" />
                      Verify Product
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center">
                      <Flag size={16} className="mr-2" />
                      Flag Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;