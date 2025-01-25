import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80"
          alt="Kerala Backwaters"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Discover God's Own Country</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plan your perfect Kerala adventure with our personalized trip planner.
            Experience the magic of backwaters, beaches, and hill stations.
          </p>
          <button
            onClick={() => navigate('/plan')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full
                     font-semibold text-lg flex items-center justify-center mx-auto
                     hover:bg-emerald-700 transition duration-300"
          >
            <MapPinIcon className="mr-2 h-5 w-5" />
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;