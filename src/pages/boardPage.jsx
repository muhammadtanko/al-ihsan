import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Linkedin, Award, Briefcase } from 'lucide-react';
import Footer from '../components/footer';
const AlIhsanBoardPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      id: 1,
      name: "Dr. Aisha Mahmoud",
      position: "Chairman of the Board",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "aisha.mahmoud@alihsan-health.com",
      phone: "+234 803 456 7890",
      bio: "Dr. Aisha Mahmoud is a distinguished healthcare administrator with over 25 years of experience in health insurance management and policy development. She holds a PhD in Health Economics from the University of Lagos and has served on multiple national healthcare committees. Her visionary leadership has been instrumental in establishing Al-Ihsan as a trusted name in Nigerian healthcare.",
      expertise: ["Healthcare Policy", "Health Economics", "Strategic Planning", "Regulatory Compliance"],
      achievements: [
        "Led healthcare reforms in Kaduna State",
        "Published 15+ research papers on health insurance",
        "Recipient of National Healthcare Excellence Award 2022"
      ]
    },
    {
      id: 2,
      name: "Engr. Ibrahim Yusuf",
      position: "Vice Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "ibrahim.yusuf@alihsan-health.com",
      phone: "+234 806 123 4567",
      bio: "Engr. Ibrahim Yusuf brings extensive experience in technology infrastructure and systems management to the board. With a background in engineering and business administration, he has successfully overseen the digital transformation of multiple healthcare organizations. His expertise ensures Al-Ihsan remains at the forefront of healthcare technology innovation.",
      expertise: ["Healthcare IT Systems", "Digital Transformation", "Operations Management", "Process Optimization"],
      achievements: [
        "Implemented ICT systems across 50+ healthcare facilities",
        "Pioneered telemedicine platforms in Northern Nigeria",
        "Certified Project Management Professional (PMP)"
      ]
    },
    {
      id: 3,
      name: "Dr. Ngozi Okonkwo",
      position: "Medical Director",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "ngozi.okonkwo@alihsan-health.com",
      phone: "+234 809 876 5432",
      bio: "Dr. Ngozi Okonkwo is a renowned physician with specialization in public health and preventive medicine. She has worked with the WHO and various international health organizations on maternal and child health programs. Her clinical expertise and commitment to quality care ensure the highest medical standards in Al-Ihsan's network of providers.",
      expertise: ["Public Health", "Clinical Quality Assurance", "Preventive Medicine", "Maternal & Child Health"],
      achievements: [
        "25+ years of clinical practice experience",
        "Consulted for WHO on African health initiatives",
        "Fellow of the West African College of Physicians"
      ]
    },
    {
      id: 4,
      name: "Barr. Mohammed Bello",
      position: "Legal & Compliance Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "mohammed.bello@alihsan-health.com",
      phone: "+234 805 234 5678",
      bio: "Barrister Mohammed Bello is a seasoned legal practitioner with expertise in corporate law, health regulations, and compliance management. He holds an LLM in Health Law and has advised numerous healthcare organizations on regulatory matters. His guidance ensures Al-Ihsan maintains full compliance with all Nigerian health insurance regulations and corporate governance standards.",
      expertise: ["Health Law", "Corporate Governance", "Regulatory Compliance", "Contract Negotiation"],
      achievements: [
        "20+ years in healthcare legal practice",
        "Advised on NHIS regulatory frameworks",
        "Member of Nigerian Bar Association Health Law Committee"
      ]
    },
    {
      id: 5,
      name: "Mrs. Fatima Abdullahi",
      position: "Finance Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "fatima.abdullahi@alihsan-health.com",
      phone: "+234 807 345 6789",
      bio: "Mrs. Fatima Abdullahi is a chartered accountant with extensive experience in healthcare finance and insurance fund management. She has successfully managed portfolios worth billions of naira and implemented robust financial controls across multiple organizations. Her financial acumen ensures sustainable operations and transparent fund management at Al-Ihsan.",
      expertise: ["Healthcare Finance", "Fund Management", "Financial Planning", "Risk Management"],
      achievements: [
        "Fellow of the Institute of Chartered Accountants of Nigeria (FCA)",
        "Managed ₦5B+ in health insurance funds",
        "Implemented cost-saving measures saving ₦200M+ annually"
      ]
    },
    {
      id: 6,
      name: "Mr. Chukwuemeka Nwosu",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "chukwuemeka.nwosu@alihsan-health.com",
      phone: "+234 808 456 7890",
      bio: "Mr. Chukwuemeka Nwosu is a healthcare management expert with proven track record in operations optimization and service delivery. He has successfully scaled healthcare operations across multiple states and implemented quality management systems. His operational excellence drives efficient service delivery and customer satisfaction at Al-Ihsan.",
      expertise: ["Healthcare Operations", "Service Delivery", "Quality Management", "Performance Optimization"],
      achievements: [
        "Scaled operations across 15+ states",
        "Reduced service delivery time by 40%",
        "ISO 9001 certified quality management specialist"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
     

      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#2E324D] to-[#3a3f5f] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Board of <span className="text-[#A8D235]">Directors</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
              Meet the experienced leaders guiding Al-Ihsan's mission to deliver quality healthcare across Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {boardMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#A8D235] font-semibold">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {member.bio}
                  </p>
                  <button className="text-[#2E324D] font-semibold hover:text-[#A8D235] transition-colors flex items-center gap-2">
                    View Full Profile →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-[#EC3338] hover:bg-white transition-colors shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Header with Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedMember.name}</h2>
                  <p className="text-xl text-[#A8D235] font-semibold">{selectedMember.position}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Contact Information */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} className="text-[#A8D235]" />
                    <span className="text-sm">{selectedMember.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={18} className="text-[#A8D235]" />
                    <span className="text-sm">{selectedMember.phone}</span>
                  </div>
                </div>

                {/* Biography */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2E324D] mb-3 flex items-center gap-2">
                    <Briefcase size={24} className="text-[#A8D235]" />
                    Biography
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedMember.bio}</p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#2E324D] mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#A8D235] bg-opacity-20 text-[#2E324D] rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#2E324D] mb-3 flex items-center gap-2">
                    <Award size={24} className="text-[#A8D235]" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#A8D235] rounded-full mt-2 shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Close Button */}
                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-6 py-3 bg-[#2E324D] text-white rounded-lg font-semibold hover:bg-[#3a3f5f] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default AlIhsanBoardPage;