import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', insta: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${form.name}! (mock)`);
    setForm({ name: '', email: '', message: '', insta: '' });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <div className="mb-4 text-sm text-gray-600 font-semibold">
        This page is controlled by admin.
      </div>
      <h1 className="text-3xl font-bold mb-6"> Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block mb-1">Mobile no</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Instagram ID:</label>
          <input
            type="text"
            name="insta"
            value={form.insta}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Your Instagram username"
          />
        </div>
        <div>
          <label className="block mb-1">Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;