// import React, { useState } from 'react';
// import { Upload, X, Plus, Trash2 } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// export default function ProductEditPage() {
//   const [variants, setVariants] = useState([
//     { id: 1, sku: 'NIKE-REV5-WHITE-7', size: '7', color: 'White', price: 2999, stock: 15 },
//     { id: 2, sku: 'NIKE-REV5-WHITE-8', size: '8', color: 'White', price: 2999, stock: 12 },
//     { id: 3, sku: 'NIKE-REV5-WHITE-9', size: '9', color: 'White', price: 2999, stock: 20 }
//   ]);

//   const [selectedImage, setSelectedImage] = useState(0);

//   const productImages = [
//     'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
//     'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
//     'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop'
//   ];

//   const addVariant = () => {
//     const newVariant = {
//       id: variants.length + 1,
//       sku: '',
//       size: '',
//       color: '',
//       price: 0,
//       stock: 0
//     };
//     setVariants([...variants, newVariant]);
//   };

//   const removeVariant = (id) => {
//     setVariants(variants.filter(variant => variant.id !== id));
//   };

//   const updateVariant = (id, field, value) => {
//     setVariants(variants.map(variant => 
//       variant.id === id ? { ...variant, [field]: value } : variant
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg">
//         <div className="p-4 border-b">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-green-500 rounded"></div>
//             <span className="font-semibold">Evershop</span>
//           </div>
//         </div>
        
//         <nav className="mt-4">
//           {[
//             'Dashboard', 'Customers', 'Catalog', 'Orders', 'Promotions', 
//             'Marketing', 'Settings', 'Users', 'Support'
//           ].map((item, index) => (
//             <div key={item} className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
//               item === 'Catalog' ? 'bg-gray-100 font-medium' : 'text-gray-600'
//             }`}>
//               {item}
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="mb-6">
//             <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
//               <span>Catalog</span>
//               <span>/</span>
//               <span>Products</span>
//               <span>/</span>
//               <span>Edit</span>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900">Editing Nike revolution 5</h1>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column - Main Form */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* General Section */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-lg font-semibold mb-4">General</h2>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                     <input 
//                       type="text" 
//                       defaultValue="Nike revolution 5"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
//                       <input 
//                         type="text" 
//                         defaultValue="NIKE-REV-5"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//                       <input 
//                         type="number" 
//                         defaultValue="2999"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
//                       <input 
//                         type="text" 
//                         placeholder="Weight"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
//                       <input 
//                         type="text" 
//                         placeholder="Length"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
//                       <input 
//                         type="text" 
//                         placeholder="Width"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Short description</label>
//                     <input 
//                       type="text" 
//                       placeholder="Short description"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                     <div className="border border-gray-300 rounded-md p-3 bg-yellow-50">
//                       <p className="text-sm text-gray-600">
//                         Add images that you want customers to experience while navigating through your
//                         website. Upload your uploaded image files not exceeding recommended size more than
//                         10MB and make sure to upload in any one of these file formats.jpeg,jpg,gif,png,webp
//                       </p>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Color swatches</label>
//                     <div className="flex space-x-2">
//                       {['#000', '#666', '#999', '#ccc', '#fff', '#f5f5f5', '#ddd', '#bbb'].map((color, index) => (
//                         <div 
//                           key={index}
//                           className="w-8 h-6 rounded border cursor-pointer"
//                           style={{ backgroundColor: color }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Media Section */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-lg font-semibold mb-4">Media</h2>
                
//                 <div className="grid grid-cols-4 gap-4">
//                   {productImages.map((image, index) => (
//                     <div 
//                       key={index}
//                       className={`relative border-2 rounded-lg overflow-hidden cursor-pointer ${
//                         selectedImage === index ? 'border-blue-500' : 'border-gray-200'
//                       }`}
//                       onClick={() => setSelectedImage(index)}
//                     >
//                       <img src={image} alt={`Product ${index + 1}`} className="w-full h-24 object-cover" />
//                       <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         <X size={12} />
//                       </button>
//                     </div>
//                   ))}
                  
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center cursor-pointer hover:border-gray-400">
//                     <Upload size={24} className="text-gray-400" />
//                   </div>
//                 </div>
//               </div>

//               {/* Search Engine Optimize Section */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-lg font-semibold mb-4">Search engine optimize</h2>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Meta title</label>
//                     <input 
//                       type="text" 
//                       placeholder="Meta title"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Meta keywords</label>
//                     <input 
//                       type="text" 
//                       placeholder="Meta keywords"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Meta description</label>
//                     <textarea 
//                       rows="3"
//                       placeholder="Meta description"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Variants Section */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-lg font-semibold">Variants</h2>
//                   <button 
//                     onClick={addVariant}
//                     className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center space-x-2"
//                   >
//                     <Plus size={16} />
//                     <span>Add</span>
//                   </button>
//                 </div>
                
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-gray-50">
//                         <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
//                         <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
//                         <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
//                         <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
//                         <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//                         <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {variants.map((variant) => (
//                         <tr key={variant.id}>
//                           <td className="border p-2">
//                             <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center">
//                               <Upload size={16} className="text-gray-400" />
//                             </div>
//                           </td>
//                           <td className="border p-2">
//                             <input 
//                               type="text" 
//                               value={variant.sku}
//                               onChange={(e) => updateVariant(variant.id, 'sku', e.target.value)}
//                               className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             />
//                           </td>
//                           <td className="border p-2">
//                             <input 
//                               type="number" 
//                               value={variant.price}
//                               onChange={(e) => updateVariant(variant.id, 'price', parseInt(e.target.value))}
//                               className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             />
//                           </td>
//                           <td className="border p-2">
//                             <input 
//                               type="number" 
//                               value={variant.stock}
//                               onChange={(e) => updateVariant(variant.id, 'stock', parseInt(e.target.value))}
//                               className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             />
//                           </td>
//                           <td className="border p-2">
//                             <select className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
//                               <option>Active</option>
//                               <option>Disabled</option>
//                             </select>
//                           </td>
//                           <td className="border p-2">
//                             <button 
//                               onClick={() => removeVariant(variant.id)}
//                               className="text-red-500 hover:text-red-700"
//                             >
//                               <Trash2 size={16} />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Sidebar */}
//             <div className="space-y-6">
//               {/* Product Status */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h3 className="text-lg font-semibold mb-4">Product status</h3>
//                 <div className="space-y-3">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                       <option>Enabled</option>
//                       <option>Disabled</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Visibility</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                       <option>Catalog, Search</option>
//                       <option>Catalog</option>
//                       <option>Search</option>
//                       <option>Not visible</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Collections */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h3 className="text-lg font-semibold mb-4">Collections</h3>
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="men" className="rounded" />
//                     <label htmlFor="men" className="text-sm">Men</label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="women" className="rounded" />
//                     <label htmlFor="women" className="text-sm">Women</label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="kids" className="rounded" defaultChecked />
//                     <label htmlFor="kids" className="text-sm">Kids</label>
//                   </div>
//                 </div>
//               </div>

//               {/* Inventory */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h3 className="text-lg font-semibold mb-4">Inventory</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="manage-stock" className="rounded" />
//                     <label htmlFor="manage-stock" className="text-sm">Manage stock?</label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <input type="checkbox" id="stock-availability" className="rounded" />
//                     <label htmlFor="stock-availability" className="text-sm">Stock availability</label>
//                   </div>
//                 </div>
//               </div>

//               {/* Attributes */}
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h3 className="text-lg font-semibold mb-4">Attributes</h3>
//                 <div className="space-y-3">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                       <option>Select color</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                       <option>Select size</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between mt-8">
//             <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
//               Cancel
//             </button>
//             <div className="space-x-3">
//               <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
//                 Save
//               </button>
//               <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Upload, X, Plus, Trash2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock product data that matches your ProductTable
const mockProducts = {
  1: {
    id: 1,
    name: 'Nike revolution 5',
    sku: 'NJC44203-Brown-M',
    price: 255,
    status: 'enabled',
    visibility: 'Catalog, Search'
  },
  2: {
    id: 2,
    name: 'Nike react phantom run flyknit 2',
    sku: 'NJC48508-Green-S',
    price: 718,
    status: 'disabled',
    visibility: 'Catalog, Search'
  },
  3: {
    id: 3,
    name: 'Nike court vision low',
    sku: 'NJC78436-Black-X',
    price: 904,
    status: 'enabled',
    visibility: 'Catalog, Search'
  }
};

export default function ProductEditPage() {
  const { productId } = useParams(); // Get product ID from URL
  const navigate = useNavigate(); // For navigation
  const [product, setProduct] = useState(null);
  
  const [variants, setVariants] = useState([
    { id: 1, sku: 'NIKE-REV5-WHITE-7', size: '7', color: 'White', price: 2999, stock: 15 },
    { id: 2, sku: 'NIKE-REV5-WHITE-8', size: '8', color: 'White', price: 2999, stock: 12 },
    { id: 3, sku: 'NIKE-REV5-WHITE-9', size: '9', color: 'White', price: 2999, stock: 20 }
  ]);

  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop'
  ];

  // Load product data when component mounts or productId changes
  useEffect(() => {
    const productData = mockProducts[productId];
    if (productData) {
      setProduct(productData);
    } else {
      // Redirect to products if product not found
      navigate('/products');
    }
  }, [productId, navigate]);

  const addVariant = () => {
    const newVariant = {
      id: variants.length + 1,
      sku: '',
      size: '',
      color: '',
      price: 0,
      stock: 0
    };
    setVariants([...variants, newVariant]);
  };

  const removeVariant = (id) => {
    setVariants(variants.filter(variant => variant.id !== id));
  };

  const updateVariant = (id, field, value) => {
    setVariants(variants.map(variant => 
      variant.id === id ? { ...variant, [field]: value } : variant
    ));
  };

  const updateProduct = (field, value) => {
    setProduct(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate('/products'); // Navigate back to products list
  };

  const handleSave = () => {
    // Save logic here
    console.log('Saving product:', product);
    alert('Product saved successfully!');
    navigate('/products'); // Navigate back after saving
  };

  // Show loading if product is not loaded yet
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading product...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded"></div>
            <span className="font-semibold">Evershop</span>
          </div>
        </div>
        
        <nav className="mt-4">
          {[
            'Dashboard', 'Customers', 'Catalog', 'Orders', 'Promotions', 
            'Marketing', 'Settings', 'Users', 'Support'
          ].map((item, index) => (
            <div key={item} className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
              item === 'Catalog' ? 'bg-gray-100 font-medium' : 'text-gray-600'
            }`}>
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <span 
                onClick={() => navigate('/products')}
                className="cursor-pointer hover:text-blue-600"
              >
                Catalog
              </span>
              <span>/</span>
              <span 
                onClick={() => navigate('/products')}
                className="cursor-pointer hover:text-blue-600"
              >
                Products
              </span>
              <span>/</span>
              <span>Edit</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Editing {product.name}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* General Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">General</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      value={product.name}
                      onChange={(e) => updateProduct('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                      <input 
                        type="text" 
                        value={product.sku}
                        onChange={(e) => updateProduct('sku', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <input 
                        type="number" 
                        value={product.price}
                        onChange={(e) => updateProduct('price', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                      <input 
                        type="text" 
                        placeholder="Weight"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
                      <input 
                        type="text" 
                        placeholder="Length"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
                      <input 
                        type="text" 
                        placeholder="Width"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Short description</label>
                    <input 
                      type="text" 
                      placeholder="Short description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <div className="border border-gray-300 rounded-md p-3 bg-yellow-50">
                      <p className="text-sm text-gray-600">
                        Add images that you want customers to experience while navigating through your
                        website. Upload your uploaded image files not exceeding recommended size more than
                        10MB and make sure to upload in any one of these file formats.jpeg,jpg,gif,png,webp
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Color swatches</label>
                    <div className="flex space-x-2">
                      {['#000', '#666', '#999', '#ccc', '#fff', '#f5f5f5', '#ddd', '#bbb'].map((color, index) => (
                        <div 
                          key={index}
                          className="w-8 h-6 rounded border cursor-pointer"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Media</h2>
                
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`relative border-2 rounded-lg overflow-hidden cursor-pointer ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`Product ${index + 1}`} className="w-full h-24 object-cover" />
                      <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center cursor-pointer hover:border-gray-400">
                    <Upload size={24} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Search Engine Optimize Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Search engine optimize</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta title</label>
                    <input 
                      type="text" 
                      placeholder="Meta title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta keywords</label>
                    <input 
                      type="text" 
                      placeholder="Meta keywords"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta description</label>
                    <textarea 
                      rows="3"
                      placeholder="Meta description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Variants Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Variants</h2>
                  <button 
                    onClick={addVariant}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center space-x-2"
                  >
                    <Plus size={16} />
                    <span>Add</span>
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                        <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                        <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                        <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                        <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="border p-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {variants.map((variant) => (
                        <tr key={variant.id}>
                          <td className="border p-2">
                            <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center">
                              <Upload size={16} className="text-gray-400" />
                            </div>
                          </td>
                          <td className="border p-2">
                            <input 
                              type="text" 
                              value={variant.sku}
                              onChange={(e) => updateVariant(variant.id, 'sku', e.target.value)}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </td>
                          <td className="border p-2">
                            <input 
                              type="number" 
                              value={variant.price}
                              onChange={(e) => updateVariant(variant.id, 'price', parseInt(e.target.value))}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </td>
                          <td className="border p-2">
                            <input 
                              type="number" 
                              value={variant.stock}
                              onChange={(e) => updateVariant(variant.id, 'stock', parseInt(e.target.value))}
                              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </td>
                          <td className="border p-2">
                            <select className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                              <option>Active</option>
                              <option>Disabled</option>
                            </select>
                          </td>
                          <td className="border p-2">
                            <button 
                              onClick={() => removeVariant(variant.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Product Status */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Product status</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select 
                      value={product.status}
                      onChange={(e) => updateProduct('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="enabled">Enabled</option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Visibility</label>
                    <select 
                      value={product.visibility}
                      onChange={(e) => updateProduct('visibility', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Catalog, Search</option>
                      <option>Catalog</option>
                      <option>Search</option>
                      <option>Not visible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Collections */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Collections</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="men" className="rounded" />
                    <label htmlFor="men" className="text-sm">Men</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="women" className="rounded" />
                    <label htmlFor="women" className="text-sm">Women</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="kids" className="rounded" defaultChecked />
                    <label htmlFor="kids" className="text-sm">Kids</label>
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Inventory</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="manage-stock" className="rounded" />
                    <label htmlFor="manage-stock" className="text-sm">Manage stock?</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="stock-availability" className="rounded" />
                    <label htmlFor="stock-availability" className="text-sm">Stock availability</label>
                  </div>
                </div>
              </div>

              {/* Attributes */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Attributes</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select color</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select size</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <div className="space-x-3">
              <button 
                onClick={handleSave}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save
              </button>
              <button 
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}