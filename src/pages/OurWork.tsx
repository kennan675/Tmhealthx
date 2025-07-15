import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Megaphone, 
  Shield, 
  Users, 
  Award, 
  Zap, 
  Search, 
  Target, 
  Brain, 
  CheckCircle 
} from 'lucide-react';

const OurWork = () => {
  const objectives = [
    {
      title: 'Health Education',
      icon: BookOpen,
      description: 'Comprehensive health education programs reaching communities across Kenya',
      activities: ['Community workshops', 'Health literacy campaigns', 'Peer education programs'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Awareness Campaigns',
      icon: Megaphone,
      description: 'Large-scale awareness campaigns addressing critical health issues',
      activities: ['Mental health stigma reduction', 'SRHR awareness', 'Disease prevention campaigns'],
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Policy Advocacy',
      icon: Shield,
      description: 'Advocating for health policies that prioritize youth and community needs',
      activities: ['Policy research', 'Government engagement', 'Community advocacy training'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Community Outreach',
      icon: Users,
      description: 'Direct health services and support to underserved communities',
      activities: ['Medical camps', 'Health screenings', 'Mobile health services'],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Youth Leadership',
      icon: Award,
      description: 'Building the next generation of health leaders and advocates',
      activities: ['Leadership training', 'Mentorship programs', 'Youth forums'],
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Digital Health & Innovation',
      icon: Zap,
      description: 'Leveraging technology for improved health outcomes',
      activities: ['Digital health platforms', 'Telemedicine initiatives', 'Health tech innovation'],
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Research',
      icon: Search,
      description: 'Evidence-based research to inform health interventions',
      activities: ['Community health studies', 'Policy research', 'Impact assessments'],
      color: 'bg-teal-100 text-teal-600'
    },
    {
      title: 'Resilience Building',
      icon: Target,
      description: 'Strengthening community resilience against health challenges',
      activities: ['Emergency preparedness', 'Community health systems', 'Disaster response'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Thought Leadership',
      icon: Brain,
      description: 'Advancing health discourse through intellectual leadership',
      activities: ['Policy briefs', 'Health forums', 'Expert panels'],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Ethical Legacy & Governance',
      icon: CheckCircle,
      description: 'Ensuring ethical practices and sustainable governance',
      activities: ['Ethics training', 'Governance frameworks', 'Accountability systems'],
      color: 'bg-gray-100 text-gray-600'
    }
  ];

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
              Our Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover how we're transforming health outcomes across Kenya through our 10 constitutional objectives, each designed to address critical health challenges in our communities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Constitutional Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Constitutional Objectives
            </h2>
            <p className="text-xl text-gray-600">
              Ten strategic areas of focus driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${objective.color}`}>
                    <objective.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {objective.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Activities:</p>
                      <ul className="space-y-1">
                        {objective.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                        See Related Events →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Measuring success across our key objectives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '10,000+', label: 'People Educated', icon: BookOpen },
              { metric: '50+', label: 'Communities Reached', icon: Users },
              { metric: '25+', label: 'Policy Engagements', icon: Shield },
              { metric: '100+', label: 'Young Leaders Trained', icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a health professional, student, or community member, there's a place for you in our movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
                Get Involved
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-green-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;