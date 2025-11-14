import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#2E324D] text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* About */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#A8D235]">
                            Al-Ihsan Health Services
                        </h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Your trusted partner for accessible, affordable, and reliable
                            healthcare solutions across Nigeria.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/health-plans"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    Health Plans
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/providers"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    Network Providers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li>
                                <a
                                    href="/enrollment"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    Enrollment Guide
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/claims"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    Claims Process
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/faqs"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-[#A8D235] transition-colors"
                                >
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm md:text-base">
                            <li className="flex items-start gap-2">
                                <Phone
                                    size={18}
                                    className="text-[#A8D235] mt-1 flex-shrink-0"
                                />
                                <span>24/7 Call Center Available</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={18} className="text-[#A8D235] mt-1 flex-shrink-0" />
                                <span>info@alihsan-health.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin
                                    size={18}
                                    className="text-[#A8D235] mt-1 flex-shrink-0"
                                />
                                <span>Kaduna State, Nigeria</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    className="border-t border-gray-700 pt-8 text-center text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p>
                        &copy; {new Date().getFullYear()} Al-Ihsan Integrated Health Services Limited. All rights reserved.
                    </p>
                    <p className="mt-2 text-gray-400">
                        Licensed by Kaduna State Contributory Health Management Authority
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
