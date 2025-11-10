import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Clock, Award, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Wide Network of Accredited Healthcare Facilities",
      description: "Access to quality care across Nigeria"
    },
    {
      icon: Award,
      title: "Affordable and Flexible Health Plans",
      description: "Tailored solutions for individuals and organizations"
    },
    {
      icon: Users,
      title: "Experienced Healthcare Professionals",
      description: "Expert team dedicated to your wellbeing"
    },
    {
      icon: Clock,
      title: "24/7 Support and Claims Assistance",
      description: "Always here when you need us most"
    },
    {
      icon: Heart,
      title: "Community-Driven Service Approach",
      description: "Client-focused care that puts you first"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#2E324D] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl md:text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#A8D235]">Al-Ihsan</span> Health Services
            </motion.div>
            <motion.div 
              className="hidden md:flex space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="hover:text-[#A8D235] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#A8D235] transition-colors">About Us</a>
              <a href="#services" className="hover:text-[#A8D235] transition-colors">Services</a>
              <a href="#contact" className="hover:text-[#A8D235] transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#2E324D] to-[#3a3f5f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#A8D235] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EC3338] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
                variants={fadeInUp}
              >
                Making Quality Healthcare{' '}
                <span className="text-[#A8D235]">Accessible</span>,{' '}
                <span className="text-[#A8D235]">Affordable</span>, and{' '}
                <span className="text-[#A8D235]">Reliable</span>
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed"
                variants={fadeInUp}
              >
                Al-Ihsan Integrated Health Services Limited provides comprehensive health insurance solutions designed to protect individuals, families, organizations, and communities through trusted healthcare networks and efficient service delivery.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <button className="bg-[#A8D235] text-[#2E324D] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#92bb2d] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Enroll Now <ArrowRight size={20} />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-[#2E324D] transition-all transform hover:scale-105">
                  Contact Us
                </button>
                <button className="bg-[#EC3338] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#d62d32] transition-all transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-72 h-72 xl:w-96 xl:h-96 bg-[#A8D235] rounded-full opacity-20 absolute blur-2xl"></div>
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 p-6 rounded-xl text-center">
                      <Heart className="w-12 h-12 mx-auto mb-2 text-[#A8D235]" />
                      <p className="text-sm font-semibold">Quality Care</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-xl text-center">
                      <Shield className="w-12 h-12 mx-auto mb-2 text-[#A8D235]" />
                      <p className="text-sm font-semibold">Full Coverage</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-xl text-center">
                      <Clock className="w-12 h-12 mx-auto mb-2 text-[#A8D235]" />
                      <p className="text-sm font-semibold">24/7 Support</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-xl text-center">
                      <Award className="w-12 h-12 mx-auto mb-2 text-[#A8D235]" />
                      <p className="text-sm font-semibold">Licensed TPA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E324D] mb-6 text-center">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-8"></div>
            
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-l-4 border-[#A8D235]">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                <span className="font-bold text-[#2E324D]">Al-Ihsan Integrated Health Services Limited</span> is a licensed Third-Party Administrator (TPA) and managed care provider dedicated to improving access to affordable healthcare.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We work collaboratively with public institutions, private organizations, healthcare providers, and communities to guarantee quality healthcare services that are both accessible and cost-effective.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[#2E324D] text-white rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold text-[#A8D235] mb-2">60+</p>
                  <p className="text-sm md:text-base">Accredited Facilities</p>
                </div>
                <div className="text-center p-4 bg-[#A8D235] text-[#2E324D] rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold mb-2">24/7</p>
                  <p className="text-sm md:text-base">Call Center Support</p>
                </div>
                <div className="text-center p-4 bg-[#EC3338] text-white rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm md:text-base">Licensed & Compliant</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E324D] mb-6 text-center">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#A8D235] group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2E324D] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#A8D235] transition-colors duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#A8D235] group-hover:text-[#2E324D]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2E324D] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2E324D] to-[#3a3f5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#A8D235] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC3338] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Join Thousands Already Benefitting From Our Healthcare Protection Plans
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Take the first step towards securing quality healthcare for you and your loved ones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#A8D235] text-[#2E324D] px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#92bb2d] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto sm:mx-0">
                Get Started Today <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-[#2E324D] transition-all transform hover:scale-105 mx-auto sm:mx-0">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2E324D] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#A8D235]">Al-Ihsan Health Services</h3>
              <p className="text-sm md:text-base text-gray-300">
                Your trusted partner for accessible, affordable, and reliable healthcare solutions across Nigeria.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="#about" className="hover:text-[#A8D235] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#A8D235] transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-[#A8D235] transition-colors">Health Plans</a></li>
                <li><a href="#" className="hover:text-[#A8D235] transition-colors">Network Providers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="#" className="hover:text-[#A8D235] transition-colors">Enrollment Guide</a></li>
                <li><a href="#" className="hover:text-[#A8D235] transition-colors">Claims Process</a></li>
                <li><a href="#" className="hover:text-[#A8D235] transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-[#A8D235] transition-colors">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-[#A8D235] mt-1 flex-shrink-0" />
                  <span>24/7 Call Center Available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-[#A8D235] mt-1 flex-shrink-0" />
                  <span>info@alihsan-health.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#A8D235] mt-1 flex-shrink-0" />
                  <span>Kaduna State, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm md:text-base">
            <p>&copy; 2024 Al-Ihsan Integrated Health Services Limited. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Licensed by Kaduna State Contributory Health Management Authority</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;