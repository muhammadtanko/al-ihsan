import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Award, Users, Shield, TrendingUp, Lightbulb, CheckCircle, Building2, Scale, Handshake } from 'lucide-react';
import Footer from '../components/footer';
const AboutPage = () => {
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
                staggerChildren: 0.15
            }
        }
    };

    const coreValues = [
        {
            icon: Shield,
            title: "Responsibility",
            description: "We remain accountable and dedicated in fulfilling our mandate.",
            color: "#2E324D"
        },
        {
            icon: Scale,
            title: "Integrity",
            description: "We maintain honesty, transparency, and ethical conduct in all operations.",
            color: "#A8D235"
        },
        {
            icon: Users,
            title: "Teamwork",
            description: "We leverage multidisciplinary collaboration to achieve outstanding outcomes.",
            color: "#EC3338"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We continually strive to exceed expectations in service quality and performance.",
            color: "#2E324D"
        }
    ];

    const leadershipAreas = [
        { icon: Heart, area: "Clinical Practice", color: "#EC3338" },
        { icon: TrendingUp, area: "Healthcare Finance", color: "#A8D235" },
        { icon: Building2, area: "Health Administration", color: "#2E324D" },
        { icon: Scale, area: "Legal & Compliance", color: "#EC3338" },
        { icon: Lightbulb, area: "Information Technology", color: "#A8D235" },
        { icon: Handshake, area: "Operations Management", color: "#2E324D" }
    ];

    return (
        <div className="min-h-screen bg-white">
           

            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-[#2E324D] to-[#3a3f5f] text-white py-16 md:py-20 overflow-hidden">
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
                            About <span className="text-[#A8D235]">Al-Ihsan</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
                            Your Trusted Partner in Healthcare Excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Profile Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E324D] mb-4">
                                Company Profile
                            </h2>
                            <div className="w-24 h-1 bg-[#A8D235] mx-auto"></div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-[#A8D235]">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#2E324D] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-[#A8D235]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#2E324D] mb-4">
                                        Al-Ihsan Integrated Health Services Limited
                                    </h3>
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                Al-Ihsan Integrated Health Services Limited is a <span className="font-semibold text-[#2E324D]">Corporate Affairs Commission registered Third-Party Administrator</span>, providing managed care and health insurance administration for government institutions, private sector organizations, and individuals.
                            </p>

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We are committed to improving national health outcomes by offering structured health protection plans that are <span className="font-semibold text-[#A8D235]">affordable, transparent, and dependable</span>.
                            </p>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-[#2E324D] text-white p-6 rounded-lg text-center">
                                    <CheckCircle className="w-10 h-10 mx-auto mb-3 text-[#A8D235]" />
                                    <p className="font-semibold">CAC Registered</p>
                                </div>
                                <div className="bg-[#A8D235] text-[#2E324D] p-6 rounded-lg text-center">
                                    <Shield className="w-10 h-10 mx-auto mb-3" />
                                    <p className="font-semibold">Licensed TPA</p>
                                </div>
                                <div className="bg-[#EC3338] text-white p-6 rounded-lg text-center">
                                    <Heart className="w-10 h-10 mx-auto mb-3" />
                                    <p className="font-semibold">Quality Focused</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#A8D235]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#A8D235] rounded-full flex items-center justify-center">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#2E324D]">Our Vision</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                To ensure basic, quality, and affordable healthcare services through efficient resource pooling and effective healthcare management accessible to all subscribers.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#EC3338]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#EC3338] rounded-full flex items-center justify-center">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#2E324D]">Our Mission</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                To be the most trusted integrated health insurance solution provider, delivering outstanding service through professional excellence, innovation, and customer satisfaction.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E324D] mb-4">
                            Our Core Values
                        </h2>
                        <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-6"></div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {coreValues.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#A8D235] group"
                                >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: value.color }}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#2E324D] mb-3 text-center">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#2E324D] to-[#3a3f5f] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#A8D235] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC3338] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Leadership Summary
                        </h2>
                        <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-6"></div>
                        <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                            Our leadership team consists of industry-experienced professionals in clinical practice, healthcare finance, health administration, law, operations, information technology, and regulatory compliance. Their diverse knowledge base ensures strategic direction and operational excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
                        {leadershipAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: area.color }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="font-semibold text-base md:text-lg">{area.area}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Committed to Excellence</h3>
                            <p className="text-gray-200 text-lg leading-relaxed">
                                With decades of combined experience across multiple healthcare disciplines, our leadership team brings strategic vision, operational expertise, and unwavering commitment to delivering exceptional healthcare solutions across Nigeria.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2E324D] mb-6">
                            Ready to Experience Quality Healthcare?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            Join thousands of satisfied clients who trust Al-Ihsan for their healthcare needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#A8D235] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#92bb2d] transition-all transform hover:scale-105 shadow-lg">
                                Enroll Now
                            </button>
                            <button className="bg-[#2E324D] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#3a3f5f] transition-all transform hover:scale-105 shadow-lg">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default AboutPage;