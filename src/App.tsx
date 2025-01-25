import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import TripPlanner from './components/TripPlanner';
import Itinerary from './components/Itinerary';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan" element={<TripPlanner />} />
            <Route path="/itinerary" element={<Itinerary />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;