import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';

const Itinerary = () => {
  const location = useLocation();
  const { destination, duration, people } = location.state || {};

  if (!destination) {
    return <Navigate to="/plan" replace />;
  }

  const generateItinerary = (days: number) => {
    const activities = {
      Munnar: [
        'Visit tea plantations',
        'Eravikulam National Park',
        'Top Station viewpoint',
        'Tea museum tour',
        'Mattupetty Dam',
        'Echo Point',
        'Spice garden tour',
      ],
      Alleppey: [
        'Houseboat cruise',
        'Alappuzha Beach',
        'Marari Beach',
        'Village backwater tour',
        'Kayaking',
        'Local market visit',
        'Sunset cruise',
      ],
      Wayanad: [
        'Banasura Sagar Dam',
        'Edakkal Caves',
        'Chembra Peak trek',
        'Wayanad Wildlife Sanctuary',
        'Bamboo rafting',
        'Thirunelli Temple',
        'Kuruvadweep',
      ],
      
    };

    const destinationActivities = activities[destination.name as keyof typeof activities];
    const itinerary = [];

    for (let i = 0; i < days; i++) {
      itinerary.push({
        day: i + 1,
        activities: destinationActivities.slice(i * 2, i * 2 + 2),
      });
    }

    return itinerary;
  };

  const itinerary = generateItinerary(Number(duration));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">
          Your {destination.name} Itinerary
        </h2>

        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-emerald-600 mr-2" />
            <span>{duration} days</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className="h-5 w-5 text-emerald-600 mr-2" />
            <span>{people} people</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-emerald-600 mr-2" />
            <span>{destination.name}</span>
          </div>
        </div>

        <div className="space-y-6">
          {itinerary.map((day) => (
            <div key={day.day} className="border-l-4 border-emerald-500 pl-4">
              <h3 className="text-xl font-bold mb-3">Day {day.day}</h3>
              <ul className="space-y-2">
                {day.activities.map((activity, index) => (
                  <li key={index} className="text-gray-700">
                    • {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
          <h4 className="font-bold mb-2">Travel Tips:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Best time to visit: October to February</li>
            <li>Carry light cotton clothes and a light jacket</li>
            <li>Don't forget to try the local cuisine</li>
            <li>Book accommodations in advance during peak season</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
