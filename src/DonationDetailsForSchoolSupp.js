import React, { useState } from 'react';

const DonationDetailsForSchoolSupplies = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [edition, setEdition] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [quantityRequired, setQuantityRequired] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Reset other fields when category changes
    setName('');
    setType('');
    setQuantity('');
    setAuthor('');
    setLanguage('');
    setEdition('');
    setSummary('');
    setImage('');
    setQuantityRequired('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !name || !quantity || !quantityRequired) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Submitted school supplies donation:', { category, name, type, quantity, author, language, edition, summary, image, quantityRequired });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter School Supplies Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 mb-2">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" required>
            <option value="">Select category</option>
            <option value="StationaryItems">Stationary Items</option>
            <option value="Books">Books</option>
          </select>
        </div>
        {/* Conditional rendering based on the selected category */}
        {category === 'StationaryItems' && (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 mb-2">Type:</label>
              <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter type" required />
            </div>
          </>
        )}
        {category === 'Books' && (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700 mb-2">Author:</label>
              <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter author" required />
            </div>
            <div className="mb-4">
              <label htmlFor="language" className="block text-gray-700 mb-2">Language:</label>
              <input type="text" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter language" required />
            </div>
            <div className="mb-4">
              <label htmlFor="edition" className="block text-gray-700 mb-2">Edition:</label>
              <input type="text" id="edition" value={edition} onChange={(e) => setEdition(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter edition" required />
            </div>
            <div className="mb-4">
              <label htmlFor="summary" className="block text-gray-700 mb-2">Summary:</label>
              <input type="text" id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter summary" required />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 mb-2">Image:</label>
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" required />
            </div>
          </>
        )}
        <div className="mb-4">
          <label htmlFor="quantityRequired" className="block text-gray-700 mb-2">Quantity Required:</label>
          <input type="number" id="quantityRequired" value={quantityRequired} onChange={(e) => setQuantityRequired(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter quantity required" required />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForSchoolSupplies;
