import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              IngeBIM
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <LoginButton/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;