import React, { useState } from 'react';
import {ClipLoader} from "react-spinners";

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
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

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

  const handleImageChange = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (file) {
      setTimeout(() => {
        setImage(file);
        setFileName(file.name);
        setLoading(false);
      }, 2000);
    }
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg" onSubmit={handleSubmit}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Enter School Supplies Donation Details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Category
            </label>
            <select id="category" value={category} onChange={handleCategoryChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                    required>
              <option value="">Select category</option>
              <option value="StationaryItems">Stationary Items</option>
              <option value="Books">Books</option>
            </select>
          </div>
          {/* Conditional rendering based on the selected category */}
          {category === 'StationaryItems' && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                    Type
                  </label>
                  <input id="type" name="type" type="text" required
                         value={type}
                         onChange={(e) => setType(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
              </>
          )}
          {category === 'Books' && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                    Author
                  </label>
                  <input id="author" name="author" type="text" required
                         value={author}
                         onChange={(e) => setAuthor(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
                    Language
                  </label>
                  <input id="language" name="language" type="text" required
                         value={language}
                         onChange={(e) => setLanguage(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="edition" className="block text-sm font-medium leading-6 text-gray-900">
                    Edition
                  </label>
                  <input id="edition" name="edition" type="text" required
                         value={edition}
                         onChange={(e) => setEdition(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="summary" className="block text-sm font-medium leading-6 text-gray-900">
                    Summary
                  </label>
                  <input id="summary" name="summary" type="text" required
                         value={summary}
                         onChange={(e) => setSummary(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="quantityRequired" className="block text-sm font-medium leading-6 text-gray-900">
                    Quantity Required
                  </label>
                  <input id="quantityRequired" name="quantityRequired" type="number" required
                         value={quantityRequired}
                         onChange={(e) => setQuantityRequired(e.target.value)}
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                    Image:
                  </label>
                  <input
                      id="image"
                      name="image"
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                      accept="image/*"
                  />
                  <label
                      htmlFor="image"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 cursor-pointer bg-custom-green text-white text-center"
                  >
                    Choose Image
                  </label>
                  {loading ? (
                      <div className="flex justify-center mt-2">
                        <ClipLoader/>
                      </div>
                  ) : (
                      fileName && (
                          <p className="text-sm text-gray-500 mt-2">Uploaded file: {fileName}</p>
                      )
                  )}
                  <p className="text-sm text-gray-500 mt-4">
                    Upload an image of the school supplies for verification purposes.
                  </p>
                </div>
              </>
          )}
          <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationDetailsForSchoolSupplies;