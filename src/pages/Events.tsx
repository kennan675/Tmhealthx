import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Filter, Search, Plus } from 'lucide-react';

const Events = () => {
  const [filterType, setFilterType] = useState('all');
  const [filterRegion, setFilterRegion] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Mental Health Awareness Campaign',
      date: '2025-07-15',
      location: 'Kisumu Central',
      type: 'Campaign',
      region: 'Kisumu',
      participants: 250,
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Community outreach focusing on mental health stigma reduction and awareness building.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Youth Leadership Forum',
      date: '2025-02-20',
      location: 'Nairobi',
      type: 'Forum',
      region: 'Nairobi',
      participants: 150,
      image: 'https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&w=400',
      video: null,
      description: 'Empowering young leaders with skills and knowledge for health advocacy.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Medical Camp - Kibera',
      date: '2025-01-28',
      location: 'Kibera',
      type: 'Medical Camp',
      region: 'Nairobi',
      participants: 500,
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400',
      video: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      description: 'Free medical services including screenings, consultations, and health education.',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Health Caravan - Western Kenya',
      date: '2025-01-15',
      location: 'Kakamega',
      type: 'Caravan',
      region: 'Western',
      participants: 800,
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400',
      video: null,
      description: 'Mobile health services reaching remote communities in Western Kenya.',
      status: 'completed'
    },
    {
      id: 5,
      title: 'SRHR Workshop',
      date: '2025-03-10',
      location: 'Mombasa',
      type: 'Workshop',
      region: 'Coast',
      participants: 100,
      image: 'https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&w=400',
      video: null,
      description: 'Sexual and reproductive health rights education for young people.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Digital Health Innovation Summit',
      date: '2025-03-25',
      location: 'Eldoret',
      type: 'Summit',
      region: 'Rift Valley',
      participants: 200,
      image: 'https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&w=400',
      video: null,
      description: 'Exploring technology solutions for health challenges in Kenya.',
      status: 'upcoming'
    },
  ];

  const filteredEvents = events.filter(event => {
    const typeMatch = filterType === 'all' || event.type === filterType;
    const regionMatch = filterRegion === 'all' || event.region === filterRegion;
    return typeMatch && regionMatch;
  });

  const eventTypes = [...new Set(events.map(event => event.type))];
  const regions = [...new Set(events.map(event => event.region))];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Events & Campaigns
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Join us in transforming health outcomes across Kenya through community events, medical camps, and youth empowerment initiatives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="all">All Types</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="all">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Host an Event</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300 relative">
                  {event.video ? (
                    <iframe
                      src={event.video}
                      title={event.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'upcoming' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <span className="text-gray-500 text-sm">{event.region}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">{event.participants} participants</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Host a TM HealthX activation in your county and join the movement for health transformation.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Apply to Host an Event
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;