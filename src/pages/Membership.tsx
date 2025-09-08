import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Check, ArrowRight, Send, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Membership = () => {
  const [showApplication, setShowApplication] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    full_name: '',
    email_address: '',
    phone_number: '',
    membership_category: 'ordinary',
    motivation_letter: '',
    agreed_to_terms: false
  });

  // Only ordinary membership category
  const membershipCategory = {
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
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    // Check if we're using demo Supabase credentials
    if (supabase.supabaseUrl.includes('demo.supabase.co')) {
      // Demo mode - just show success message without actually saving
      setTimeout(() => {
        setSubmitMessage('Demo mode: Application received! In production, this would be saved to the database. Please set up your Supabase credentials to enable real data saving.');
        setFormData({
          full_name: '',
          email_address: '',
          phone_number: '',
          membership_category: 'ordinary',
          motivation_letter: '',
          agreed_to_terms: false
        });
        setIsSubmitting(false);
        
        // Close modal after 5 seconds in demo mode
        setTimeout(() => {
          setShowApplication(false);
          setSubmitMessage('');
        }, 5000);
      }, 1000);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('membership_applications')
        .insert([
          {
            full_name: formData.full_name,
            email_address: formData.email_address,
            phone_number: formData.phone_number,
            membership_category: formData.membership_category,
            motivation_letter: formData.motivation_letter,
            agreed_to_terms: formData.agreed_to_terms
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitMessage('Application submitted successfully! We will review your application and get back to you soon.');
      setFormData({
        full_name: '',
        email_address: '',
        phone_number: '',
        membership_category: 'ordinary',
        motivation_letter: '',
        agreed_to_terms: false
      });
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setShowApplication(false);
        setSubmitMessage('');
      }, 3000);

    } catch (error: any) {
      console.error('Error submitting application:', error);
      setSubmitError(error.message || 'An error occurred while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

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
              Become part of Kenya's premier youth-led health organization. Join as an Ordinary Member and be part of the healthcare transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Membership Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ordinary Membership
            </h2>
            <p className="text-xl text-gray-600">
              Join our community of health advocates and change-makers
            </p>
          </div>

          {/* Membership Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`border-2 rounded-lg p-8 ${membershipCategory.color} max-w-4xl mx-auto`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <membershipCategory.icon className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{membershipCategory.name}</h3>
                    <p className="text-lg text-green-600 font-semibold">{membershipCategory.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{membershipCategory.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Eligibility Requirements:</h4>
                  <ul className="space-y-2">
                    {membershipCategory.eligibility.map((requirement, index) => (
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
                  {membershipCategory.privileges.map((privilege, index) => (
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
                disabled={isSubmitting}
              >
                ✕
              </button>
            </div>

            {/* Success Message */}
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800">{submitError}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Category
                </label>
                <select 
                  name="membership_category"
                  value={formData.membership_category}
                  onChange={handleChange}
                  disabled={true}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
                >
                  <option value="ordinary">Ordinary Membership - KSh 500/year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation Letter *
                </label>
                <textarea
                  name="motivation_letter"
                  value={formData.motivation_letter}
                  onChange={handleChange}
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100"
                  placeholder="Tell us why you want to join TM HealthX Kenya..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreed_to_terms"
                  name="agreed_to_terms"
                  checked={formData.agreed_to_terms}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded disabled:bg-gray-100"
                />
                <label htmlFor="agreed_to_terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the TM HealthX Kenya constitution and code of ethics *
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowApplication(false)}
                  disabled={isSubmitting}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors disabled:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreed_to_terms}
                  className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
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