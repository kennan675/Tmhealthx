import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  BookOpen, 
  Heart, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Stethoscope,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Community Health Advocacy',
      description: 'Mobilizing youth to lead grassroots health campaigns and drive community-level change.',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      features: [
        'Youth health advocate training',
        'Community mobilization campaigns',
        'Health awareness programs',
        'Grassroots leadership development'
      ],
      impact: '47+ counties reached',
      cta: 'Volunteer'
    },
    {
      title: 'Digital Health & Innovation',
      description: 'Tools, data platforms, and now the Virtual Clinic partnership with Global Cure Co.',
      icon: Zap,
      color: 'bg-green-100 text-green-600',
      features: [
        'Virtual consultation platform',
        'Health data analytics',
        'Digital health tools',
        'Telemedicine services'
      ],
      impact: '1,000+ consultations',
      cta: 'Learn More'
    },
    {
      title: 'Youth Capacity Building',
      description: 'Workshops, leadership training, and community impact labs for the next generation.',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-600',
      features: [
        'Leadership workshops',
        'Health advocacy training',
        'Community impact labs',
        'Mentorship programs'
      ],
      impact: '500+ youth trained',
      cta: 'Join Training'
    },
    {
      title: 'Outreach Missions',
      description: 'Field missions in marginalized areas, with health screenings and education.',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      features: [
        'Mobile health clinics',
        'Community health screenings',
        'Health education sessions',
        'Medical supply distribution'
      ],
      impact: '10,000+ people served',
      cta: 'Support Mission'
    }
  ];

  const partnerships = [
    {
      name: 'Global Cure Co',
      type: 'Virtual Clinic Partnership',
      description: 'Bringing specialized medical consultations to Kenya',
      icon: Globe
    },
    {
      name: 'County Health Departments',
      type: 'Government Partnership',
      description: 'Collaborative health service delivery',
      icon: Stethoscope
    },
    {
      name: 'Youth Organizations',
      type: 'Community Partnership',
      description: 'Amplifying youth voices in health advocacy',
      icon: Users
    }
  ];

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
              Our Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto opacity-90"
            >
              Comprehensive health programs designed to empower communities, build capacity, and transform healthcare delivery across Kenya.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full ${program.color} mr-4`}>
                      <program.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-green-600 font-medium">{program.impact}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    {program.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program - Virtual Clinic */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-blue-600 p-3 rounded-full w-fit mb-6">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured: Virtual Clinic Partnership
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our groundbreaking partnership with Global Cure Co brings world-class medical expertise 
                directly to Kenyan communities. Access specialized consultations in oncology, fertility, 
                neurology, and more—all from the comfort of your home.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">Specializations</div>
                </div>
              </div>
              <Link
                to="/virtual-clinic"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-lg"
            >
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Virtual Clinic"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Available Consultations:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm text-center">Oncology</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm text-center">Fertility</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm text-center">Neurology</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm text-center">BMT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading organizations to amplify our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <partnership.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partnership.name}</h3>
                <p className="text-green-600 font-medium mb-3">{partnership.type}</p>
                <p className="text-gray-600 text-sm">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Impact</h2>
            <p className="text-xl opacity-90">Measuring our collective success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '47+', label: 'Counties Reached', icon: Target },
              { metric: '1,000+', label: 'Youth Advocates', icon: Users },
              { metric: '500+', label: 'Health Sessions', icon: Heart },
              { metric: '10,000+', label: 'Lives Impacted', icon: Globe },
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
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our programs and be part of the healthcare transformation happening across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Join a Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Partner with Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;