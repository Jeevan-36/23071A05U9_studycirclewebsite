import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allMaterials = [
  { title: 'Random History Facts', link: 'https://example.com/history.pdf' },
  { title: 'Unrelated Cooking Recipes', link: 'https://example.com/cooking.pdf' },
  { title: 'Alien Technology Guide', link: 'https://example.com/alien.pdf' },
  { title: 'How to Train Your Dragon', link: 'https://example.com/dragon.pdf' },
  { title: 'Guide to Nowhere', link: 'https://example.com/nowhere.pdf' },
];

const physicsBooks = [
  { title: 'Fundamentals of Physics', link: '#' },
  { title: 'Concepts of Physics Vol 1', link: '#' },
  { title: 'Concepts of Physics Vol 2', link: '#' },
  { title: 'University Physics', link: '#' },
  { title: 'Problems in General Physics', link: '#' },
];

const CheckMaterial = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(allMaterials);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim().toLowerCase().includes('physics')) {
      setResults(physicsBooks);
    } else {
      setResults(allMaterials);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">📚 Check Materials</h2>
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Enter any search..."
          className="flex-1 px-3 py-2 border rounded-l"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Find Materials
        </button>
      </form>
      <ul className="space-y-3">
        {results.map((mat, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md"
          >
            <span className="text-gray-800">{mat.title}</span>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => navigate('/payment', { state: { material: mat } })}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckMaterial;