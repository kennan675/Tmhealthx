import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  UserPlus,
  Handshake,
  Star,
  Send
} from 'lucide-react';

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState('membership');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');

  const membershipOptions = [
    {
      title: 'Youth Advocate',
      description: 'Join our community of young health advocates',
      icon: Users,
      benefits: [
        'Access to training programs',
        'Networking opportunities',
        'Leadership development',
        'Community impact projects'
      ],
      cta: 'Become an Advocate'
    },
    {
      title: 'Health Professional',
      description: 'Contribute your expertise to our mission',
      icon: Heart,
      benefits: [
        'Professional development',
        'Mentorship opportunities',
        'Research collaboration',
        'Community service'
      ],
      cta: 'Join as Professional'
    },
    {
      title: 'Community Leader',
      description: 'Lead health initiatives in your community',
      icon: Award,
      benefits: [
        'Leadership training',
        'Resource access',
        'Program implementation',
        'Community recognition'
      ],
      cta: 'Become a Leader'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Community Outreach',
      description: 'Participate in health education and screening programs',
      commitment: 'Flexible hours',
      location: 'Various counties'
    },
    {
      title: 'Digital Health Support',
      description: 'Help with virtual clinic operations and digital platforms',
      commitment: '5-10 hours/week',
      location: 'Remote/Kisumu'
    },
    {
      title: 'Event Coordination',
      description: 'Organize and manage health forums and campaigns',
      commitment: 'Project-based',
      location: 'Regional'
    },
    {
      title: 'Content Creation',
      description: 'Develop health education materials and social media content',
      commitment: 'Flexible',
      location: 'Remote'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Healthcare Organizations',
      description: 'Collaborate on service delivery and capacity building',
      icon: Heart
    },
    {
      title: 'Educational Institutions',
      description: 'Partner on research and student engagement programs',
      icon: Award
    },
    {
      title: 'Government Agencies',
      description: 'Work together on policy and implementation',
      icon: Users
    },
    {
      title: 'Private Sector',
      description: 'Corporate partnerships for sustainable impact',
      icon: Handshake
    }
  ];

  const successStories = [
    {
      name: 'Sarah Wanjiku',
      role: 'Youth Advocate',
      story: 'Joined TM HealthX as a student and now leads mental health campaigns in Nairobi.',
      impact: 'Reached 500+ youth with mental health awareness'
    },
    {
      name: 'Dr. James Ochieng',
      role: 'Health Professional',
      story: 'Contributes to our virtual clinic program and trains community health workers.',
      impact: 'Trained 50+ community health workers'
    },
    {
      name: 'Mary Akinyi',
      role: 'Community Leader',
      story: 'Established the first TM HealthX chapter in her county and runs monthly health camps.',
      impact: 'Organized 12 health camps serving 2,000+ people'
    }
  ];

  const handleJoinForm = (type: string) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Join the Movement
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto opacity-90 mb-8"
            >
              Be part of Africa's healthcare transformation. Whether you're a young advocate, health professional, 
              or organization, there's a place for you in our movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleJoinForm('membership')}
                className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Now
              </button>
              <button
                onClick={() => setActiveTab('partnership')}
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'membership', label: 'Membership', icon: UserPlus },
              { id: 'volunteer', label: 'Volunteer', icon: Heart },
              { id: 'partnership', label: 'Partnership', icon: Handshake }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tab */}
      {activeTab === 'membership' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Membership Opportunities
              </h2>
              <p className="text-xl text-gray-600">
                Choose how you want to contribute to healthcare transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <option.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleJoinForm(option.title)}
                    className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                  >
                    {option.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Volunteer Tab */}
      {activeTab === 'volunteer' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Volunteer Opportunities
              </h2>
              <p className="text-xl text-gray-600">
                Contribute your time and skills to make a difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Time Commitment:</p>
                      <p className="text-sm text-gray-600">{opportunity.commitment}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Location:</p>
                      <p className="text-sm text-gray-600">{opportunity.location}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleJoinForm('volunteer')}
                    className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply to Volunteer
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partnership Tab */}
      {activeTab === 'partnership' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Inquiries
              </h2>
              <p className="text-xl text-gray-600">
                Collaborate with us to amplify healthcare impact across Kenya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => handleJoinForm('partnership')}
                className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community members making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-green-600 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Impact:</p>
                  <p className="text-sm text-green-700">{story.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Join TM HealthX Kenya</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    County
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter your county"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Area
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">Select your area of interest</option>
                  <option value="youth-advocacy">Youth Advocacy</option>
                  <option value="health-professional">Health Professional</option>
                  <option value="community-leadership">Community Leadership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join TM HealthX Kenya?
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Tell us about your motivation and how you'd like to contribute..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to TM HealthX Kenya's mission and values
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default JoinUs;