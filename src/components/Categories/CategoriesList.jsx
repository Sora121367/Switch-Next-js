import React from 'react';
import Image from 'next/image';

const CategoryList = ({ categories, deleteCategory, setCurrentCategory, toggleStatus }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {categories.length === 0 ? (
        <p className="text-gray-500">No categories available.</p>
      ) : (
        <>
          {/* Title Row */}
          <div className="flex mb-4 text-gray-400 text-lg">
            <div className="w-1/3">Category Name</div>
            <div className="w-1/3 text-center">Status</div>
            <div className="w-1/3 text-center">Action</div>
          </div>
          
          {/* Category List */}
          <ul className="divide-y">
            {categories.map((category) => (
              <li
                key={category.id}
                className="flex justify-between items-center py-2"
              >
                <div className="w-1/3">
                  <p className="font-bold">{category.name}</p>
                </div>
                <div className="w-1/3 text-center flex items-center justify-center">
                  {/* Toggle button with status text */}
                  <div
                    className="relative inline-block w-12 h-6 mr-2"
                    onClick={() => toggleStatus(category.id)}
                  >
                    <input
                      type="checkbox"
                      checked={category.status === 'active'}
                      className="sr-only"
                      onChange={() => {}}
                    />
                    <div
                      className={`block w-full h-full rounded-full cursor-pointer ${
                        category.status === 'active'
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    ></div>
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                        category.status === 'active' ? 'translate-x-6' : ''
                      }`}
                    ></div>
                  </div>
                  <span
                    className={`font-bold ${
                      category.status === 'active' ? 'text-green-500' : 'text-gray-600'
                    }`}
                  >
                    {category.status === 'active' ? 'Active' : 'Draft'}
                  </span>
                </div>
                <div className="w-1/3 text-center">
                  <button
                    className="py-2 mr-2 rounded "
                  >
                    <Image
                      src="/View.svg"
                      alt=""
                      width={27}
                      height={27}
                    />
                  </button>
                  <button
                    className="py-2 mr-2 rounded "
                    onClick={() => setCurrentCategory(category)}
                  >
                    <Image
                      src="/Edit.svg"
                      alt=""
                      width={27}
                      height={27}
                    />
                  </button>
                  <button
                    className="py-2 mr-2 rounded "
                    onClick={() => deleteCategory(category.id)}
                  >
                    <Image
                      src="/Delete.svg"
                      alt=""
                      width={27}
                      height={27}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CategoryList;
