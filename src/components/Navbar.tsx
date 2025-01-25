import React from 'react';
import { Link } from 'react-router-dom';
import { PalmtreeIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <PalmtreeIcon className="h-8 w-8" />
            <span className="font-bold text-xl">Kerala Explorer</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-emerald-200">Home</Link>
            <Link to="/plan" className="hover:text-emerald-200">Plan Trip</Link>
            <Link to="/contact" className="hover:text-emerald-200">Contact</Link>
            {user ? (
              <button onClick={signOut} className="hover:text-emerald-200">Sign Out</button>
            ) : (
              <>
                <Link to="/signin" className="hover:text-emerald-200">Sign In</Link>
                <Link to="/signup" className="hover:text-emerald-200">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;