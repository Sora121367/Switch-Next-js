import React, { useState, useEffect } from 'react';

const CategoryForm = ({ onSubmit, initialValues, setCurrentCategory }) => {
  const [formData, setFormData] = useState({ name: '' });

  useEffect(() => {
    if (initialValues) setFormData(initialValues);
    else setFormData({ name: '' });
  }, [initialValues]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '' });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {initialValues ? 'Update' : 'Add'}
        </button>
        {initialValues && (
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => setCurrentCategory(null)}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default CategoryForm;
