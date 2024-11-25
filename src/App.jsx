import React, { useState } from "react";

const TableFilter = () => {
  
  const items = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
    { id: 5, name: "Strawberry", category: "Fruit" },
    { id: 6, name: "Spinach", category: "Vegetable" },
    { id: 7, name: "Mango", category: "Fruit" },
    { id: 8, name: "Potato", category: "Vegetable" },
    { id: 9, name: "Orange", category: "Fruit" },
    { id: 10, name: "Tomato", category: "Vegetable" },
    { id: 11, name: "Pineapple", category: "Fruit" },
    { id: 12, name: "Cucumber", category: "Vegetable" },
    { id: 13, name: "Cherry", category: "Fruit" },
    { id: 14, name: "Lettuce", category: "Vegetable" },
    { id: 15, name: "Watermelon", category: "Fruit" },
    { id: 16, name: "Onion", category: "Vegetable" },
    { id: 17, name: "Grapes", category: "Fruit" },
    { id: 18, name: "Cauliflower", category: "Vegetable" },
    { id: 19, name: "Peach", category: "Fruit" },
    { id: 20, name: "Garlic", category: "Vegetable" },
  ];

  const [query, setQuery] = useState(""); 

  
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-6 py-12">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">
          Searchable Item Table ✨
        </h1>

        
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search items by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 absolute top-4 right-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m-2.05 2.05a7 7 0 1 0-9.9 0 7 7 0 0 0 9.9 0z"
            />
          </svg>
        </div>

        
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left uppercase text-sm tracking-wider">ID</th>
                <th className="px-6 py-4 text-left uppercase text-sm tracking-wider">Name</th>
                <th className="px-6 py-4 text-left uppercase text-sm tracking-wider">Category</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-purple-100 transition duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 text-gray-800 font-medium">{item.id}</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{item.name}</td>
                  <td className="px-6 py-4 text-gray-600">{item.category}</td>
                </tr>
              ))}
              
              {filteredItems.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-4 text-center text-gray-500 italic bg-gray-50"
                  >
                    No items match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
