import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Target, Heart, Award, Globe, Stethoscope, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-kenya.png';
import communityImage from '../assets/community-health.png';

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const [counters, setCounters] = useState({ counties: 0, youth: 0, sessions: 0, partnerships: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const targets = { counties: 47, youth: 100, sessions: 50, partnerships: 2 };
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          counties: Math.floor(targets.counties * progress),
          youth: Math.floor(targets.youth * progress),
          sessions: Math.floor(targets.sessions * progress),
          partnerships: Math.floor(targets.partnerships * progress),
        });
        if (step >= steps) clearInterval(interval);
      }, duration / steps);
    }
  }, [statsVisible]);

  const stats = [
    { label: 'Counties Engaged', value: counters.counties, suffix: '+', icon: Globe },
    { label: 'Youth Advocates', value: counters.youth, suffix: '+', icon: Users },
    { label: 'Community Health Sessions', value: counters.sessions, suffix: '+', icon: Heart },
    { label: 'Partnerships Formed', value: counters.partnerships, suffix: '+', icon: Award },
  ];

  const coreValues = [
    { title: 'Equity', description: 'Ensuring fair access to health services for all', icon: Target },
    { title: 'Innovation', description: 'Pioneering new approaches to health challenges', icon: Sparkles },
    { title: 'Service', description: 'Dedicated commitment to community wellbeing', icon: Heart },
    { title: 'Integrity', description: 'Maintaining transparency and ethical practices', icon: Award },
    { title: 'Pan-African Unity', description: 'Building connections across the continent', icon: Globe },
  ];

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt="Kenyan Healthcare Workers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kenya-forest/70 via-kenya-forest/50 to-kenya-forest/90" />
        </motion.div>

        {/* Floating particles overlay */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-kenya-green-light rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass rounded-full text-kenya-green-light text-sm font-medium mb-6">
              🌍 Youth-Led Health Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            For <span className="gradient-text">Africa</span>. By <span className="gradient-text">Africa</span>.
            <br />
            <span className="text-kenya-gold">With the World.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Transforming healthcare from the grassroots — empowering communities across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/join"
              className="group bg-kenya-green hover:bg-kenya-green-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center glow-green hover:shadow-glow-lg"
            >
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/virtual-clinic"
              className="glass text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Preview Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-kenya-green-light text-sm font-semibold tracking-wider uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Empowering Youth.<br />
                <span className="gradient-text">Transforming Health.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                TM HealthX Kenya is a youth-led, community-rooted health advocacy and innovation movement.
                We empower, educate, and mobilize young people to lead health advocacy, access, and transformation across Kenya.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-kenya-green-light hover:text-white transition-colors font-semibold"
              >
                Learn More About Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={communityImage}
                  alt="Community Health Session"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kenya-forest/80 to-transparent" />
              </div>
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 glass-card rounded-xl p-6"
              >
                <div className="text-4xl font-bold gradient-text">47+</div>
                <div className="text-gray-300 text-sm">Counties Reached</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-kenya-green-light text-sm font-semibold tracking-wider uppercase">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Guided by <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that drive our movement toward health equity across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-kenya-green/20 flex items-center justify-center mb-6 group-hover:bg-kenya-green/40 transition-colors">
                  <value.icon className="h-7 w-7 text-kenya-green-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Clinic Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-kenya-green/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <Stethoscope className="h-10 w-10 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Cure Co <span className="text-blue-400">Partnership</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Access specialized health consultations with top Indian specialists through our partnership.
              Quality healthcare, accessible from anywhere.
            </p>
            <Link
              to="/virtual-clinic"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-kenya-green-light text-sm font-semibold tracking-wider uppercase">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Making a <span className="gradient-text">Difference</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-kenya-green/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-kenya-green-light" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Transform</span> Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join a movement that's redefining healthcare from the grassroots. Together, we can build a healthier Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="group bg-kenya-green hover:bg-kenya-green-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center glow-green"
              >
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="glass text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
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

export default Homepage;