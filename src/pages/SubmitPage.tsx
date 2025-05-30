import React from 'react';

const SubmitPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit a Product</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter product name"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter product description"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="household">Household</option>
            </select>
          </div>

          <div>
            <label htmlFor="sustainabilityInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Sustainability Information
            </label>
            <textarea
              id="sustainabilityInfo"
              name="sustainabilityInfo"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter sustainability information"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;