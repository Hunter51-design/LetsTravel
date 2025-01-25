import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Munnar',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80',
    minBudget: 5000,
    description: 'Hill station known for tea plantations',
    activities: ['Tea Gardens', 'Trekking', 'Wildlife']
  },
  {
    id: 2,
    name: 'Alleppey',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80',
    minBudget: 6000,
    description: 'Famous for houseboats and backwaters',
    activities: ['Houseboat', 'Canoeing', 'Beach']
  },
  {
    id: 3,
    name: 'Wayanad',
    image: 'https://images.unsplash.com/photo-1627301517152-11505d049286?auto=format&fit=crop&q=80',
    minBudget: 4000,
    description: 'Wildlife sanctuaries and waterfalls',
    activities: ['Safari', 'Camping', 'Waterfall']
  }
];

const TripPlanner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    budget: '',
    duration: '',
    people: ''
  });
  const [showDestinations, setShowDestinations] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDestinations(true);
  };

  const handleDestinationSelect = (destination: any) => {
    // In a real app, you'd save this to context/state management
    navigate('/itinerary', { 
      state: { 
        destination,
        ...formData
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">
          Plan Your Kerala Adventure
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Daily Budget (₹)</label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Duration (days)</label>
            <input
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({...formData, duration: e.target.value})}
              className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Number of People</label>
            <input
              type="number"
              value={formData.people}
              onChange={(e) => setFormData({...formData, people: e.target.value})}
              className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg
                     hover:bg-emerald-700 transition duration-300"
          >
            Find Destinations
          </button>
        </form>
      </div>

      {showDestinations && (
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dest.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleDestinationSelect(dest)}
                  className="w-full bg-emerald-600 text-white py-2 px-4 rounded
                           hover:bg-emerald-700 transition duration-300"
                >
                  Select Destination
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TripPlanner;