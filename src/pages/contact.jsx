import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Footer from '../components/footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = () => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        e.preventDefault();
        // TODO: connect to backend API endpoint for handling contact form
        alert("Thank you for reaching out! We’ll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-50 text-[#2E324D]">
            {/* Header Section */}
            <section className="relative bg-linear-to-br from-[#2E324D] to-[#3a3f5f] text-white py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-16 left-10 w-64 h-64 bg-[#A8D235] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EC3338] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Contact <span className="text-[#A8D235]">Us</span>
                    </motion.h1>
                    <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                        Have questions, need support, or want to learn more about our services?
                        We’re here to help you anytime.
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-8">
                            Reach out to our support team for inquiries, partnerships, or healthcare plan assistance.
                            We’d love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-[#A8D235] w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Head Office</h4>
                                    <p className="text-gray-700">
                                        (Provide your physical office address)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="text-[#A8D235] w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Phone</h4>
                                    <p className="text-gray-700">(Insert official phone numbers)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="text-[#A8D235] w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="text-gray-700">(Insert official contact email)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MessageCircle className="text-[#A8D235] w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">WhatsApp Support</h4>
                                    <p className="text-gray-700">(Insert WhatsApp number)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Clock className="text-[#A8D235] w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Business Hours</h4>
                                    <p className="text-gray-700">
                                        Monday – Friday | 8:00 AM – 5:00 PM <br />
                                        <span className="text-[#EC3338] font-medium">24/7 Emergency Support Line Available</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#A8D235]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8D235] focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8D235] focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8D235] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8D235] focus:outline-none resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-[#A8D235] text-[#2E324D] font-bold py-3 rounded-md hover:bg-[#92bb2d] transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default ContactPage;
