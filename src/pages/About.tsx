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
              About TM HealthX Kenya
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Founded on the principles of transformational mobilization, we are a youth-led, community-powered organization dedicated to health justice across Kenya.
            </motion.p>
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
                  <strong>TM</strong> stands for <em>Transformational Mobilization</em>, reflecting our core belief that lasting change comes from mobilizing communities around shared health goals. The name also serves as a tribute to our founder, <strong>Tonny Moses</strong>, whose vision sparked this movement.
                </p>
                <p>
                  We chose <strong>Kisumu</strong> as our headquarters because of its strategic position as a regional hub in Western Kenya, its rich cultural heritage, and the urgent health challenges faced by communities in the region. From here, we can effectively reach rural and urban populations alike.
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

      {/* Vision Statement */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
            <blockquote className="text-2xl md:text-3xl font-light italic max-w-4xl mx-auto leading-relaxed">
              "A sovereign generation awakened, a nation transformed, and a continent redefined through youth-led health innovation and community empowerment."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Mission Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600">A 4-fold mission model for sustainable health transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Mobilize', description: 'Communities around health priorities', icon: Users },
              { title: 'Educate', description: 'Through evidence-based health information', icon: BookOpen },
              { title: 'Empower', description: 'Young leaders to drive change', icon: Zap },
              { title: 'Transform', description: 'Health outcomes at scale', icon: Target },
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

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <value.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Constitutional Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of an organization built on strong constitutional foundations and unwavering commitment to health justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Read Our Constitution
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Become a Member
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;