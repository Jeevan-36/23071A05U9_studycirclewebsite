import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-amber-300 text-gray-800 p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-lg font-bold">My App</Link>
        <div className="space-x-7  text-xl font-semibold">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/payment" className="hover:underline">Payment</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/upload" className="hover:underline">Upload Material</Link>
         <Link to="/check-material" className="hover:underline">Check Material</Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;