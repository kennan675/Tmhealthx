import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Globe,
  Phone,
  MessageSquare,
  CreditCard,
  CheckCircle,
  User,
  Calendar,
  Clock,
  Star
} from 'lucide-react';

const VirtualClinic = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState('');

  const consultationFees = [
    {
      condition: 'Oncology Consultation',
      fee: '2,000',
      description: 'Cancer screening, treatment planning, and follow-up care'
    },
    {
      condition: 'Fertility Evaluation',
      fee: '2,500',
      description: 'Reproductive health assessment and fertility planning'
    },
    {
      condition: 'Bone Marrow / Neurology Review',
      fee: '3,000',
      description: 'Specialized neurological and hematological consultations'
    },
    {
      condition: 'Follow-Up Consult',
      fee: '1,500',
      description: 'Ongoing care and treatment monitoring'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Request Consultation',
      description: 'Fill out our form or contact us via WhatsApp',
      icon: MessageSquare
    },
    {
      step: 2,
      title: 'Pay via M-Pesa',
      description: 'Make payment and save confirmation message',
      icon: CreditCard
    },
    {
      step: 3,
      title: 'Send SMS to Secretary',
      description: 'Include name, age, and medical condition',
      icon: Phone
    },
    {
      step: 4,
      title: 'Get Connected',
      description: 'Receive phone or video call from Dr. Wechuli',
      icon: CheckCircle
    }
  ];

  const handleBookConsultation = (consultationType: string) => {
    setSelectedConsultation(consultationType);
    setShowPaymentForm(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TM HealthX Virtual Clinic
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Access quality healthcare consultations from anywhere in Kenya through our virtual clinic program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowPaymentForm(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book a Consultation
                </button>
                <a
                  href="#fees"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Polyne Wechuli
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-2 rounded-full mr-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Dr. Polyne Wechuli</h3>
                    <p className="text-blue-600 font-medium">Lead Virtual Clinic Physician</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">Dedicated Virtual Health Specialist</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Dr. Polyne Wechuli is our dedicated lead physician for virtual consultations, providing accessible and quality healthcare to patients across Kenya. She specializes in comprehensive health assessments and connects patients with appropriate care pathways when needed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-lg">
                <img
                  src="https://i.ibb.co/chtD8LJr/dr-polyne.jpg"
                  alt="Dr. Polyne Wechuli"
                  className="w-64 h-64 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Oncology</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Fertility</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">BMT</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Neurology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Fees Section */}
      <section id="fees" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Fees
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for quality healthcare access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {consultationFees.map((consultation, index) => (
              <motion.div
                key={consultation.condition}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{consultation.condition}</h3>
                  <span className="text-2xl font-bold text-green-600">KES {consultation.fee}</span>
                </div>
                <p className="text-gray-600 mb-4">{consultation.description}</p>
                <button
                  onClick={() => handleBookConsultation(consultation.condition)}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <p className="text-gray-700">
              <strong>Payment Method:</strong> All payments are made via M-Pesa to Till Number: <strong>90XXXXX</strong>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Please save your M-Pesa confirmation message for verification
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to access world-class healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/254740814465"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Send Payment Confirmation
            </a>
          </div>
        </div>
      </section>

      {/* Awareness & Updates Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Virtual Healthcare Access
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Our virtual clinic service is led by Dr. Polyne Wechuli, providing accessible consultations to communities across Kenya. This initiative is part of our commitment to increasing access to quality health services and bridging healthcare gaps. Follow our social media for upcoming Q&A sessions and patient testimonials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Follow Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Join Q&A Sessions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request a Callback
            </h2>
            <p className="text-xl text-gray-600">
              Need assistance? Our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical Condition (Optional)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Brief description"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Callback
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:healthxkenya@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  healthxkenya@gmail.com
                </a>
                <a
                  href="https://wa.me/254740814465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  WhatsApp: +254 740 814 465
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Book Consultation</h3>
              <button
                onClick={() => setShowPaymentForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Consultation Type
                </label>
                <select
                  value={selectedConsultation}
                  onChange={(e) => setSelectedConsultation(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Choose consultation type</option>
                  {consultationFees.map((consultation) => (
                    <option key={consultation.condition} value={consultation.condition}>
                      {consultation.condition} - KES {consultation.fee}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Payment Instructions:</h4>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li>1. Go to M-Pesa on your phone</li>
                  <li>2. Select "Pay Bill"</li>
                  <li>3. Enter Till Number: <strong>90XXXXX</strong></li>
                  <li>4. Enter amount and complete payment</li>
                  <li>5. Save the confirmation SMS</li>
                </ol>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPaymentForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <a
                  href="https://wa.me/254740814465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  Proceed to Pay
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default VirtualClinic;