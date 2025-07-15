import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Award, Star, Check, ArrowRight } from 'lucide-react';

const Membership = () => {
  const [activeCategory, setActiveCategory] = useState('ordinary');
  const [showApplication, setShowApplication] = useState(false);

  const categories = [
    {
      id: 'ordinary',
      name: 'Ordinary Membership',
      icon: Users,
      description: 'For individuals passionate about health transformation',
      price: 'KSh 500/year',
      eligibility: [
        'Kenyan citizen or resident',
        'Commitment to health advocacy',
        'Age 18 years and above',
        'Agree to constitution and code of ethics'
      ],
      privileges: [
        'Voting rights in general meetings',
        'Access to all programs and resources',
        'Networking opportunities',
        'Monthly newsletters and updates',
        'Training and capacity building'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'associate',
      name: 'Associate Membership',
      icon: Building,
      description: 'For organizations and institutions',
      price: 'KSh 2,500/year',
      eligibility: [
        'Registered organization in Kenya',
        'Aligned with TM HealthX mission',
        'Letter of intent from leadership',
        'Commitment to partnership activities'
      ],
      privileges: [
        'Representation at board meetings',
        'Collaborative program opportunities',
        'Joint advocacy initiatives',
        'Access to research and resources',
        'Co-branding opportunities'
      ],
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'institutional',
      name: 'Institutional Membership',
      icon: Award,
      description: 'For major institutions and corporate partners',
      price: 'KSh 10,000/year',
      eligibility: [
        'Established institution/corporation',
        'Significant health sector presence',
        'Board resolution supporting membership',
        'Commitment to substantial partnership'
      ],
      privileges: [
        'Strategic partnership opportunities',
        'Board representation consideration',
        'Priority access to new programs',
        'Exclusive networking events',
        'Joint research opportunities'
      ],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 'honorary',
      name: 'Honorary Membership',
      icon: Star,
      description: 'For distinguished individuals with exceptional contributions',
      price: 'By invitation only',
      eligibility: [
        'Exceptional contribution to health',
        'Recognition by the organization',
        'Nomination by existing members',
        'Approval by the board'
      ],
      privileges: [
        'Lifetime membership status',
        'Advisory role opportunities',
        'Special recognition at events',
        'Mentorship program participation',
        'Legacy project involvement'
      ],
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Application',
      description: 'Submit application form with required documents',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Vetting',
      description: 'Review by Membership & Human Capital Committee',
      icon: '🔍'
    },
    {
      step: 3,
      title: 'Induction',
      description: 'Orientation and oath-taking ceremony',
      icon: '🎓'
    },
    {
      step: 4,
      title: 'Full Activation',
      description: 'Access to all member benefits and activities',
      icon: '✅'
    }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory);

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
              Join the Movement
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Become part of Kenya's premier youth-led health organization. Choose the membership category that best fits your profile and commitment level.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Categories
            </h2>
            <p className="text-xl text-gray-600">
              Four distinct membership levels to match your level of engagement
            </p>
          </div>

          {/* Category Selector */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-lg border-2 transition-all ${
                  activeCategory === category.id
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <category.icon className={`h-8 w-8 mx-auto mb-3 ${
                  activeCategory === category.id ? 'text-green-600' : 'text-gray-500'
                }`} />
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.price}</p>
              </motion.button>
            ))}
          </div>

          {/* Selected Category Details */}
          {currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`border-2 rounded-lg p-8 ${currentCategory.color}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <currentCategory.icon className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{currentCategory.name}</h3>
                      <p className="text-lg text-green-600 font-semibold">{currentCategory.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{currentCategory.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Eligibility Requirements:</h4>
                    <ul className="space-y-2">
                      {currentCategory.eligibility.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Member Privileges:</h4>
                  <ul className="space-y-2 mb-6">
                    {currentCategory.privileges.map((privilege, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-gray-700">{privilege}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowApplication(true)}
                    className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Your journey to becoming a TM HealthX member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Membership Application</h2>
              <button
                onClick={() => setShowApplication(false)}
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
                  Membership Category
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation Letter
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Tell us why you want to join TM HealthX Kenya..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV/Resume
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the TM HealthX Kenya constitution and code of ethics
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowApplication(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Health?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of young leaders, health professionals, and advocates who are creating lasting change in Kenya's health landscape.
            </p>
            <button
              onClick={() => setShowApplication(true)}
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Application
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Membership;