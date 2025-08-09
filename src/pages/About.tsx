import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Target, BookOpen, Award, Zap, Globe } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Courageous Advocacy', icon: Shield, description: 'Standing up for health justice and equity' },
    { title: 'Scientific Rigor', icon: BookOpen, description: 'Evidence-based approaches to health solutions' },
    { title: 'Youth Leadership', icon: Users, description: 'Empowering young people to lead change' },
    { title: 'Community First', icon: Heart, description: 'Putting communities at the center of our work' },
    { title: 'Innovation', icon: Zap, description: 'Embracing new technologies and methodologies' },
    { title: 'Excellence', icon: Award, description: 'Striving for the highest standards in everything we do' },
    { title: 'Integrity', icon: Target, description: 'Maintaining transparency and ethical practices' },
    { title: 'Collaboration', icon: Globe, description: 'Working together for greater impact' },
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A youth-led, community-rooted health advocacy and innovation movement transforming healthcare from the grassroots.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower, educate, and mobilize young people to lead health advocacy, access, and transformation across Kenya.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A continent redefined by healthy, empowered generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Origin */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Origin</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>TM HealthX Kenya</strong> was born from a vision to transform healthcare delivery across Africa. 
                  Founded by <strong>Tonny Moses</strong>, our movement represents the convergence of youth energy, 
                  community wisdom, and global partnerships.
                </p>
                <p>
                  We chose <strong>Kisumu</strong> as our headquarters because of its strategic position as a regional hub 
                  in Western Kenya, its rich cultural heritage, and the urgent health challenges faced by communities in the region. 
                  From here, we can effectively reach rural and urban populations alike.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <div className="text-center">
                <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kisumu Headquarters</h3>
                <p className="text-gray-600">
                  Strategic location for maximum community impact across Western Kenya and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Founder's Note</h2>
            <p className="text-xl text-gray-600">A personal message from our founder</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tonny Moses</h3>
              <p className="text-green-600 font-medium">Founder, TM HealthX Kenya</p>
            </div>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed text-center">
              "Healthcare is not a privilege—it's a fundamental human right. TM HealthX Kenya was born from the belief 
              that young people, when empowered with the right tools and opportunities, can transform entire health systems. 
              Our journey began with a simple question: What if we could make quality healthcare accessible to every Kenyan, 
              regardless of their location or economic status? Today, through partnerships like our Virtual Clinic with 
              Global Cure Co, we're turning that vision into reality."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our movement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Equity', description: 'Ensuring fair access to health services for all communities', icon: Target },
              { title: 'Innovation', description: 'Pioneering new approaches to health challenges', icon: Zap },
              { title: 'Service', description: 'Dedicated commitment to community wellbeing', icon: Heart },
              { title: 'Integrity', description: 'Maintaining transparency and ethical practices', icon: Shield },
              { title: 'Pan-African Unity', description: 'Building connections across the continent', icon: Globe },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our movement</p>
          </div>
          <div className="space-y-8">
            {[
              { year: '2023', title: 'Foundation', description: 'TM HealthX Kenya officially launched in Kisumu' },
              { year: '2024', title: 'Expansion', description: 'Reached 47+ counties across Kenya' },
              { year: '2024', title: 'Global Partnership', description: 'Launched Virtual Clinic with Global Cure Co' },
              { year: '2025', title: 'Innovation Hub', description: 'Established digital health innovation center' },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Constitutional Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a movement that's redefining healthcare across Africa. Together, we can build healthier communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Join the Movement
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

export default About;