import React, { useState } from 'react';

const UploadMaterial = () => {
  const [title, setTitle] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Material "${title}" uploaded successfully (mock)\nFile: ${fileName}`);
    setTitle('');
    setFileName('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center"> Upload Study Material</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Material Title:</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter material title"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Upload File:</label>
          <input
            type="file"
            required
            onChange={(e) => setFileName(e.target.files[0]?.name || '')}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadMaterial;
