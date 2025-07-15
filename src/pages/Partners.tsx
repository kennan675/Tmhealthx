import React from 'react';
import { motion } from 'framer-motion';
import { Building, Heart, Users, Award, Globe, HandHeart } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'World Health Organization',
      type: 'International',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Global health policy and technical support',
      collaboration: 'Health system strengthening initiatives',
      icon: Globe
    },
    {
      name: 'Kenya Medical Training College',
      type: 'Educational',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Medical education and training partnership',
      collaboration: 'Youth health professional development',
      icon: Award
    },
    {
      name: 'Ministry of Health Kenya',
      type: 'Government',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Policy advocacy and implementation support',
      collaboration: 'National health strategy alignment',
      icon: Building
    },
    {
      name: 'FUMSA',
      type: 'NGO',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Medical students and youth health advocacy',
      collaboration: 'Joint advocacy campaigns and events',
      icon: Users
    },
    {
      name: 'Kisumu County Health Department',
      type: 'Local Government',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Local health service delivery',
      collaboration: 'Community health programs',
      icon: Heart
    },
    {
      name: 'African Population and Health Research Center',
      type: 'Research',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Research collaboration and evidence generation',
      collaboration: 'Health research and policy analysis',
      icon: Globe
    },
    {
      name: 'Kenya Red Cross Society',
      type: 'Humanitarian',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Emergency response and community health',
      collaboration: 'Disaster preparedness and response',
      icon: HandHeart
    },
    {
      name: 'Jaramogi Oginga Odinga University',
      type: 'Educational',
      logo: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Academic research and student engagement',
      collaboration: 'Youth leadership development',
      icon: Award
    }
  ];

  const partnershipTypes = [
    {
      title: 'Strategic Partners',
      description: 'Long-term collaborations with major institutions',
      icon: Building,
      count: 5
    },
    {
      title: 'Implementation Partners',
      description: 'On-ground program delivery and support',
      icon: Users,
      count: 12
    },
    {
      title: 'Funding Partners',
      description: 'Financial support for programs and initiatives',
      icon: HandHeart,
      count: 8
    },
    {
      title: 'Knowledge Partners',
      description: 'Research and technical expertise sharing',
      icon: Globe,
      count: 10
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
              Our Partners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Collaborating with leading organizations to amplify our impact and create sustainable health solutions across Kenya and beyond.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Categories
            </h2>
            <p className="text-xl text-gray-600">
              Different types of partnerships that strengthen our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-3xl font-bold text-green-600">{type.count}</div>
                <div className="text-sm text-gray-500">Partners</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Partners
            </h2>
            <p className="text-xl text-gray-600">
              Organizations working with us to transform health outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300 relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 p-2 rounded-full">
                    <partner.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{partner.description}</p>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-500 mb-2">Current Collaboration:</p>
                    <p className="text-sm text-gray-700">{partner.collaboration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Impact</h2>
            <p className="text-xl opacity-90">Measuring the collective impact of our collaborations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '35+', label: 'Active Partners', icon: Building },
              { metric: '15', label: 'Counties Reached', icon: Globe },
              { metric: '25', label: 'Joint Programs', icon: Users },
              { metric: '100K+', label: 'Lives Impacted', icon: Heart },
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

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Ways to collaborate with TM HealthX Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Program Partnership',
                description: 'Collaborate on health programs and interventions',
                icon: Users,
                benefits: ['Joint program development', 'Resource sharing', 'Capacity building']
              },
              {
                title: 'Research Collaboration',
                description: 'Partner on health research and evidence generation',
                icon: Globe,
                benefits: ['Co-authored publications', 'Data sharing', 'Technical expertise']
              },
              {
                title: 'Funding Partnership',
                description: 'Support our programs through funding and resources',
                icon: HandHeart,
                benefits: ['Impact visibility', 'Recognition', 'Sustainability support']
              }
            ].map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <opportunity.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Benefits:</p>
                  <ul className="space-y-1">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our network of partners and help us create lasting impact in Kenya's health sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;