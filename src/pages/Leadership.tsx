import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, Shield, Briefcase, BookOpen, Heart, Globe, TrendingUp, Award } from 'lucide-react';

const Leadership = () => {
  const executiveCouncil = [
    {
      title: 'President',
      name: 'Cliford orina',
      department: 'Executive Leadership',
      icon: Crown,
    },
    {
      title: 'Vice President (Operations)',
      name: 'Mobaya pont',
      department: 'Operations Management',
      icon: Briefcase,
    },
    {
      title: 'Chief of HIA',
      name: 'Koech Daniel',
      department: 'Strategic Planning',
      icon: TrendingUp,
    },
    {
      title: 'Director General',
      name: 'Sophy Omari',
      department: 'General Administration',
      icon: Shield,
    },
    {
      title: 'Secretary General',
      name: 'Velma Tsieli',
      department: 'Communications & Records',
      icon: BookOpen,
    },
  ];

  const directors = [
    {
      title: 'Director of Finance',
      name: 'Peter Mwangi',
      department: 'Financial Management',
      icon: TrendingUp,
    },
    {
      title: 'Director of Research',
      name: 'Dr. Lucy Nafula',
      department: 'Research & Development',
      icon: BookOpen,
    },
    {
      title: 'Director of Advocacy',
      name: 'Samuel Kiprotich',
      department: 'Policy & Advocacy',
      icon: Shield,
    },
    {
      title: 'Director of Youth Affairs',
      name: 'Faith Wanjiru',
      department: 'Youth Engagement',
      icon: Users,
    },
    {
      title: 'Director of Community Outreach',
      name: 'John Omondi',
      department: 'Community Programs',
      icon: Heart,
    },
    {
      title: 'Director of Digital Innovation',
      name: 'Kennan Bowen',
      department: 'Technology & Innovation',
      icon: Globe,
    },
    {
      title: 'Director of Partnerships',
      name: 'David Mutua',
      department: 'Strategic Partnerships',
      icon: Award,
    },
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
              Leadership & Governance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Meet the dedicated leaders driving health transformation across Kenya through youth-led initiatives and community empowerment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder's Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Founder's Seat</h2>
            <p className="text-xl text-gray-600">The visionary behind TM HealthX Kenya</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-green-50 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <div className="bg-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tonny Moses</h3>
            <p className="text-xl text-green-600 mb-4">GCHXO - Grand Commander of HealthX Order</p>
            <blockquote className="text-lg text-gray-600 italic mb-6 max-w-2xl mx-auto">
              "Health is not just the absence of disease, but a state of complete physical, mental, and social well-being. Our mission is to make this vision a reality for every Kenyan community."
            </blockquote>
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Council */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Council</h2>
            <p className="text-xl text-gray-600">The strategic leadership team guiding our organization</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCouncil.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <member.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Directors</h2>
            <p className="text-xl text-gray-600">Department heads driving specialized programs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <director.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{director.name}</h3>
                <p className="text-green-600 font-medium mb-2">{director.title}</p>
                <p className="text-gray-600 text-sm">{director.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Organizational Structure</h2>
            <p className="text-xl opacity-90">Our governance framework ensures accountability and effectiveness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white bg-opacity-20 p-8 rounded-lg text-center"
            >
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Supreme Advisory Board</h3>
              <p className="opacity-90">Strategic oversight and guidance</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white bg-opacity-20 p-8 rounded-lg text-center"
            >
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Executive Leadership</h3>
              <p className="opacity-90">Operational management and execution</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white bg-opacity-20 p-8 rounded-lg text-center"
            >
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regional Coordinators</h3>
              <p className="opacity-90">Community-level implementation</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;