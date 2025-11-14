import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Stethoscope, Building2, FileText, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/footer';

const ServicesPage = () => {
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
            transition: { staggerChildren: 0.2 }
        }
    };

    const services = [
        {
            icon: Stethoscope,
            title: "Individual & Family Health Plans",
            description:
                "Affordable healthcare coverage tailored to meet the unique needs of individuals and families across Nigeria."
        },
        {
            icon: Building2,
            title: "Corporate & Institutional Plans",
            description:
                "Custom health packages designed for organizations to ensure employee wellbeing and productivity."
        },
        {
            icon: Users,
            title: "Community-Based Health Schemes",
            description:
                "Inclusive plans that extend quality healthcare to rural and underserved populations."
        },
        {
            icon: Shield,
            title: "Managed Care & Third-Party Administration",
            description:
                "Efficient claims processing, provider management, and compliance oversight as a licensed TPA."
        },
        {
            icon: FileText,
            title: "Claims & Utilization Management",
            description:
                "End-to-end management of member claims and utilization to ensure cost-effective and transparent service delivery."
        },
        {
            icon: Activity,
            title: "Health Promotion & Preventive Programs",
            description:
                "Wellness and preventive initiatives that promote healthier lifestyles and early disease detection."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2E324D] to-[#3a3f5f] text-white py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#A8D235] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EC3338] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our <span className="text-[#A8D235]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
                            Comprehensive Health Solutions Built Around You
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E324D] mb-6 text-center"
                            variants={fadeInUp}
                        >
                            What We Offer
                        </motion.h2>
                        <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-12"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#A8D235] transition-all duration-300 group"
                                        variants={fadeInUp}
                                    >
                                        <div className="w-14 h-14 bg-[#2E324D] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#A8D235] transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-[#A8D235] group-hover:text-[#2E324D]" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#2E324D] mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Our Services Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E324D] mb-6">
                            Why Choose Our Health Solutions?
                        </h2>
                        <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-8"></div>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            At <span className="font-semibold text-[#2E324D]">Al-Ihsan Integrated Health Services</span>, we combine medical expertise, efficient administration, and modern technology to make healthcare truly accessible.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#A8D235]">
                                <CheckCircle className="w-8 h-8 text-[#A8D235] mb-3" />
                                <h4 className="font-bold text-[#2E324D] mb-2">Nationwide Coverage</h4>
                                <p className="text-gray-600 text-sm">
                                    Access accredited healthcare providers across all regions.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#EC3338]">
                                <CheckCircle className="w-8 h-8 text-[#EC3338] mb-3" />
                                <h4 className="font-bold text-[#2E324D] mb-2">Transparent & Fair</h4>
                                <p className="text-gray-600 text-sm">
                                    We ensure ethical and open processes in every aspect of service delivery.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#2E324D]">
                                <CheckCircle className="w-8 h-8 text-[#2E324D] mb-3" />
                                <h4 className="font-bold text-[#2E324D] mb-2">24/7 Support</h4>
                                <p className="text-gray-600 text-sm">
                                    Our support team is always available to assist with claims and inquiries.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
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
                            Let’s Build Your Health Protection Plan Today
                        </h2>
                        <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-200">
                            Reach out to us to explore the right coverage for your needs or organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#A8D235] text-[#2E324D] px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#92bb2d] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto sm:mx-0">
                                Enroll Now <ArrowRight size={20} />
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-[#2E324D] transition-all transform hover:scale-105 mx-auto sm:mx-0">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ServicesPage;
