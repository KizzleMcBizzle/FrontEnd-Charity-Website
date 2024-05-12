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
  const [image, setImage] = useState(null);
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
    setImage(null);
    setQuantityRequired('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!category || !name || !quantityRequired || !image) {
      alert('All fields are required');
      return;
    }
    const formData = new FormData();
    formData.append('category', category);
    formData.append('name', name);
    formData.append('type', type);
    formData.append('quantity', quantity);
    formData.append('author', author);
    formData.append('language', language);
    formData.append('edition', edition);
    formData.append('summary', summary);
    formData.append('image', image);
    formData.append('quantityRequired', quantityRequired);

    // Now you can send formData to your backend

    console.log('Submitted school supplies donation:', formData);
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
        {/* Rest of the form fields */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 mb-2">Image:</label>
          <input type="file" id="image" onChange={handleImageChange} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" required />
        </div>
        {/* Rest of the form fields */}
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForSchoolSupplies;
